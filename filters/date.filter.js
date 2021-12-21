import Vue from 'vue'

// use {{date | date('time')}}
Vue.filter('date', function (value) {
    const date = Date.parse(value);
    const year = new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric'
    }).format(date);
  
    const month = new Intl.DateTimeFormat('ru-RU', {
        month: '2-digit'
    }).format(date);
  
    const day = new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit'
    }).format(date);
  
    return `${year}.${month}.${day}`
})
