import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req, isDev }) => {
  const day = 7

  createPersistedState({
    key: 'words',
    storage: {
      getItem: (key: string) => {
        if (process.client) {
          Cookies.getJSON(key)
        } else {
          cookie.parse(req.headers.cookie || '')[key]
        }
      },
      setItem: (key: string, value: any) =>
        Cookies.set(key, value, { expires: day, secure: !isDev }),
      removeItem: (key) => Cookies.remove(key)
    }
  })(store)
}