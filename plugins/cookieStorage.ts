import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

interface arg {
  store: any,
  req: any,
  isDev: boolean
}

export default ({ store, req, isDev }: arg) => {
  const day = 7

  createPersistedState({
    key: 'words',
    paths: [
      "wordHistory"
    ],
    storage: {
      getItem: (key: string) => Cookies.get(key),
      setItem: (key: string, value: any) => Cookies.set(key, value, { expires: day, secure: !isDev }),
      removeItem: (key: string) => Cookies.remove(key)
    }
  })(store)
}