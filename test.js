const moment = require("moment");
require('moment/locale/zh-cn')
moment.locale('zh-cn')

console.log(moment().format('LT'));