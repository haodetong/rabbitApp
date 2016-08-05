var fs = require('fs');
var util = require('./../util');
var WAIMAI_PATH = './database/waimai.json';

var Waimai = {
  init: function(app){
    app.post('/waimai/getMenus', this.getMenus);
  },

  //获取菜单
  getMenus: function(req, res){
    var key = req.param('key');
    if(key !== util.getKey()){
      return res.send({
        status: 0,
        data: '使用了没有鉴权的key'
      });
    }
    fs.readFile(WAIMAI_PATH, function(err, data){
      if(!err){
        try{
          var obj = JSON.parse(data);
          return res.send({
            status: 1,
            data: obj
          });
        }catch(e){
          return res.send({
            status: 0,
            err: e
          });
        }
      }

      return res.send({
        status: 0,
        err: err
      });
    });
  }

};

module.exports = Waimai;
