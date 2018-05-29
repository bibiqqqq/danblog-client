import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate', value => {
  if (!value) return '-'
  return moment(value).format('YYYY-MM-DD')
})

Vue.filter('relativeTime', value => {
  if (!value) return '-'
  return moment(value).fromNow()
})
