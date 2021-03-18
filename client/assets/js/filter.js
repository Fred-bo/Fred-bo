import Vue from 'vue'

// 时间格式化的全局过滤器
// 时间格式 ’yyyy-MM-dd hh:mm:ss.S‘
Vue.filter('formatTime', function (date, fmt) {
    console.log(date)
    date = new Date(date);
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
    // eslint-disable-next-line no-restricted-syntax
    for (const k in o)
        if (new RegExp(`(${k})`).test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
            );
    return fmt;
});