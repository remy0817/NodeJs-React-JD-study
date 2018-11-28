/**
 * @filename timeUtil.js
 * @authors remy
 * @creatTime 2017-09-19 15:57:09
 * @updateTime 2018-01-22 v0.2.0 新增方法dateFormat、getDateItemValue；停止使用formatDateToStr、formatTimestampToStr
 * @description 时间格式转换
 * @version 0.2.0
 */

/**
 * @param date { Date }
 * @param itemStr { String } yyyy/MM/dd/HH/hh/mm/ss'
 * @result { Object }
 */
export function getDateItemValue(date, itemStr) {
    var str = '',
        mode = ''; // 12小时制时有意义am、pm
    function fillZeroToFirst(num) {
        return (num < 10 ? '0' : '') + num;
    }
    switch (itemStr) {
        case 'yyyy':
            str = date.getFullYear();
            break;
        case 'MM':
            str = fillZeroToFirst(date.getMonth() + 1);
            break;
        case 'dd':
            str = fillZeroToFirst(date.getDate());
            break;
        case 'HH':
            str = fillZeroToFirst(date.getHours());
            break;
        case 'hh':
            var hour = date.getHours();
            hour == 24 && (hour = 0);
            if (hour > 12) {
                hour -= 12;
                mode = 'pm';
            } else {
                mode = 'am';
            }
            str = fillZeroToFirst(hour);
            break;
        case 'mm':
            str = fillZeroToFirst(date.getMinutes());
            break;
        case 'ss':
            str = fillZeroToFirst(date.getSeconds());
            break;
        case 'ii':
            var ms = date.getMilliseconds();
            str = (ms < 100 ? '0' : '') + ms;
            break;
        default:
            str = '';
    }
    return { text: str, mode: mode };
}

/**
 * @param str { String } 'yyyy-MM-dd HH:mm:ss:ii' -- HH: 24小时制, hh: 12小时制, ii: 毫秒
 * @param arg { Number/String/Date } 时间戳/时间
 * @result { String }
 */
export function dateFormat(str, arg) {
    var date = null;
    if (this instanceof Date) {
        date = this;
    } else if (/^1[0-9]{12}/g.test(arg)) {
        date = new Date(Number(arg));
    } else if (arg instanceof Date) {
        date = arg;
    }
    if (!date) {
        throw Error('timeUtil.parseStr参数异常');
    }!str && (str = 'yyyy-MM-dd');
    var resultArr = str.match(/([a-zA-Z]{1,}|[^a-zA-Z]{1,})/g),
        reg = /^[a-zA-Z]/g,
        resultStr = '',
        mode = '';
    resultArr && resultArr.forEach((item) => {
        if (reg.test(item)) {
            var obj = getDateItemValue(date, item);
            obj.mode && (mode = obj.mode);
            resultStr += obj.text;
        } else {
            resultStr += item;
        }
    });
    return resultStr + mode;
}

/**
 * @description 为了new Date具有更好的兼容性，自定义一个MobileDate类继承自Date类
 * safari、firefox不兼容new Date('2018-08-07 10:00:00')
 */
export class MobileDate extends Date {
    constructor(timeStr) {
        super();
        if (/^1[0-9]{12}/g.test(timeStr)) {
            return new Date(timeStr);
        } else if (timeStr.indexOf(' ') > -1) {
            let temp = timeStr.split(' ');
            let date = new Date(temp[0]);
            let time = temp[1].split(':');
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setMilliseconds(time[2]);
            return date;
        } else {
            return new Date(timeStr);
        }
    }
}