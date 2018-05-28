import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

export default () => {
  return new Vuex.Store({
    getters,
    actions,
  })
}
