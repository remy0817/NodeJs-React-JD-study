/**
 * @filename screenUtil.js
 * @authors remy
 * @creatTime 2018-08-06 14:14:52
 * @description 屏幕工具，ui设计基准:iphone6,width:750,height:1334
 * @version 0.0.1
 */

import { Dimensions, PixelRatio } from 'react-native';

export const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const fontScale = PixelRatio.getFontScale();

export const pixelRatio = PixelRatio.get(); //当前设备的像素密度

const defaultPR = 2; //iphone6的像素密度
const width = 750 / defaultPR;
const height = 1334 / defaultPR;

const scaleWidth = deviceWidth / width;
const scaleHeight = deviceHeight / height;
const scale = Math.min(scaleWidth, scaleHeight);

/**
 * 设置text为sp，适配文字
 * @param size sp
 * @return { Number } dp
 */
export function setSpText(size: Number) {
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size / defaultPR;
}

/**
 * 屏幕适配，缩放size
 * @param size
 * @return { Number }
 */
export function scaleSize(size: Number) {
    size = Math.round((size * scale + 0.5));
    return size / defaultPR;
}