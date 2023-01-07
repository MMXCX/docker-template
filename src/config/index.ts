export default {
  bcrypt_salt: 10,
  tokenExp: {
    access: {
      num: 5,
      str: '5s'
    },
    refresh: {
      num: 2592000,
      str: '30d'
    }
  },
  // Is sending email is enable
  email: {
    enabled: false
  }
}