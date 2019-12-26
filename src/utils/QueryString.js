let QueryString = {}
QueryString.install = (Vue) => {
  function initial() {
    config()
  }

  function config() {
    Vue.mixin({
      data() {
        return {}
      },
      filters: {
        toFixed: function (value) {
          return parseFloat(value).toFixed(2);
        }
      },
      methods: {
        // sexImg(sex) {
        //   if (sex == 'male') {
        //     return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MzdDNjkyMTcxMDExRUFBQ0Q1OTUxMEY3OEQ1NUQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MzdDNjkzMTcxMDExRUFBQ0Q1OTUxMEY3OEQ1NUQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTczN0M2OTAxNzEwMTFFQUFDRDU5NTEwRjc4RDU1RDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTczN0M2OTExNzEwMTFFQUFDRDU5NTEwRjc4RDU1RDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5cwryUAAAWdklEQVR42uxd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'
        //   } else if (sex == 'female') {
        //     return 'data:image/png;base64,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'
        //   } else {
        //     return ''
        //   }
        // },
        goBack() {
          this.$router.go(-1);
        },
        // formatePercent(num) {
        //   if (num == 0) {
        //     return 0
        //   } else if (!num) {
        //     return '--'
        //   } else {
        //     num = num * 100
        //     num = String(num).replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
        //     return parseFloat(num) + '%'
        //   }
        // },
        // formateNumber(num) {
        //   if (num == 0) {
        //     return 0
        //   } else if (!num) {
        //     return '--'
        //   } else {
        //     num = num * 100
        //     num = String(num).replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
        //     return parseFloat(num)
        //   }
        // },
        // formateNum(num) {
        //   if (num == 0) {
        //     return 0
        //   } else if (!num) {
        //     return '--'
        //   } else {
        //     num = String(num).replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
        //     return parseFloat(num)
        //   }
        // },
        // getQueryString(name) {
        //   return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
        // },
        // parseTime(time, cFormat) {
        //   if (!time) {
        //     return '--'
        //   }
        //   if (arguments.length === 0) {
        //     return null
        //   }
        //   if ((time + '').length === 10) {
        //     time = +time * 1000
        //   }
        //   const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
        //   let date = new Date(time)
        //   const formatObj = {
        //     y: date.getFullYear(),
        //     m: date.getMonth() + 1,
        //     d: date.getDate(),
        //     h: date.getHours(),
        //     i: date.getMinutes(),
        //     s: date.getSeconds(),
        //     a: date.getDay()
        //   }
        //   const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        //     let value = formatObj[key]
        //     if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        //     if (result.length > 0 && value < 10) {
        //       value = '0' + value
        //     }
        //     return value || 0
        //   })
        //   return time_str
        // },
        // 获取当前时间
        getNowTime() {
          const format = '{y}/{m}/{d} {h}:{i}'
          let date = new Date()
          const formatObj = {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
          }
          const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
            let value = formatObj[key]
            if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
            if (result.length > 0 && value < 10) {
              value = '0' + value
            }
            return value || 0
          })
          return time_str
        },

      }
    })
  }
  initial()
}

export default QueryString