import Vue from 'vue'

Vue.filter('dateFormat', (date: string) => {
    let d
    let year
    let month
    let day
    let weekDay
    let weekDayStr

    if (!date) {
        return ''
    }

    d = new Date(date)
    year = d.getFullYear()
    month = d.getMonth()
    day = d.getDate()
    weekDay = d.getDay()
    weekDayStr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][weekDay]

    return `${year}.${month}.${day} (${weekDayStr})`
})