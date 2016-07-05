/*
    基于iphone6，在其它不同尺寸的设备下，高度同比例缩放
*/
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    PixelRatio,
    Platform,
    Dimensions
} from 'react-native';

export default function getAdaptHeight(initHeight) {

    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;
    /*
    switch (deviceHeight) {
        case 480: //逻辑分辨率320 * 480 iphone4(s) 3.5-inch
            return initHeight/375*320;
            break;
        case 568: //逻辑分辨率320 * 568 iphone5(s c) 4-inch
            return initHeight/375*320;
            break;
        case 667: //逻辑分辨率375 * 667 iphone6 4.7-inch
            return initHeight;
            break;
        case 736: //逻辑分辨率414 * 736 iphone6+ 5.5-inch
            return initHeight/375*414;
            break;
        default:
            return  initHeight/375*414;
    }
    */
    var num = initHeight/375*deviceWidth;
    var result = Math.round(num*100)/100;
    return result;
}
