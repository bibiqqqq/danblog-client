import axios from 'axios'

export default {
  /**
   *
   * @param {*} getters baseUrl
   * @param {number} params 列表分页的param
   */
  async getArticleList ({ getters }, params) {
    const res = await axios.get(`${getters.baseUrl}/article/list/${params}`)
    return res
  },

  /**
   *
   * @param {*} getters baseUrl
   * @param {number} params 列表分页的param
   */
  async getArticleDetail ({ getters }, params) {
    const res = await axios.get(`${getters.baseUrl}/article/detail/${params}`)
    return res
  }
}
