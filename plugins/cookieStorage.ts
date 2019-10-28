import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
// import cookie from 'cookie'

export default ({ store }) => {
  const day = 7

  createPersistedState({
    key: 'wordList',
    paths: [
      'wordHistory'
    ],
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => {
        Cookies.set(key, value, { expires: day, secure: true })
        console.log(value)
      },
      removeItem: (key) => Cookies.remove(key)
    }
  })(store)
}