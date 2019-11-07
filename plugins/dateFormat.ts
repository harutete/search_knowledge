import Vue from 'vue'

export const dateFormat = (date: string, format: string, isWeekDayStr: boolean) => {
    let d
    let formatStr = format
    let weekDay
    let weekDayStr

    if (!date) {
        return ''
    }

    d = new Date(date)

    weekDay = d.getDay()
    weekDayStr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][weekDay]
    formatStr = formatStr.replace(/YYYY/, d.getFullYear().toString())
    formatStr = formatStr.replace(/MM/, d.getMonth().toString())
    formatStr = formatStr.replace(/DD/, d.getDate().toString())
    formatStr = formatStr.replace(/DD/, weekDayStr)

    return formatStr
}

Vue.prototype.$dateFormat = dateFormat