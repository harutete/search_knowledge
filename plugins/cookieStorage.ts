import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

const day = 7
export default ({ store }) => {
  modules: {
    wordHistory
  },
  strict: true,
  plugins: [createPersistedState({
    key: 'wordList',
    paths: [
      'wordHistory'
    ],
  })]
}
