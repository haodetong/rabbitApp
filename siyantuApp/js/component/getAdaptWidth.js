/*
    基于iphone6，在其它不同尺寸的设备下，宽度同比例缩放
*/
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    PixelRatio,
    Platform,
    Dimensions
} from 'react-native';

export default function getAdaptWidth(initwidth) {

    var deviceWidth = Dimensions.get('window').width;
    var deviceHeight = Dimensions.get('window').height;
    /*
    switch (deviceHeight) {
        case 480: //逻辑分辨率320 * 480 iphone4(s) 3.5-inch
            return initwidth/667*480;
            break;
        case 568: //逻辑分辨率320 * 568 iphone5(s c) 4-inch
            return initwidth/667*568;
            break;
        case 667: //逻辑分辨率375 * 667 iphone6 4.7-inch
            return initwidth;
            break;
        case 736: //逻辑分辨率414 * 736 iphone6+ 5.5-inch
            return initwidth/667*736;
            break;
        default:
            return  initwidth/667*736;
    }
    */
    var num = initwidth/667*deviceHeight;
    var result = Math.round(num*100)/100;
    return result;
}
