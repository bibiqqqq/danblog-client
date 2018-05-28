import moment from 'moment'
import Vue from 'vue'
Vue.filter('date', value => {
  if (!value) return '-'
  return moment(value).format('YYYY-MM-DD')
})
