import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req, isDev }) => {
  const day = 7

  createPersistedState({
    key: 'words',
    paths: ['wordHistory'],
    storage: {
      getItem: (key: string) => {
        if (process.client) {
          Cookies.get(key)
        }
        // } else {
        //   cookie.parse(req.headers.cookie || '')[key]
        // }
      },
      setItem: (key: string, value: any) =>
        Cookies.set(key, value, { expires: day, secure: !isDev }),
      removeItem: (key: string) => Cookies.remove(key)
    }
  })(store)
}