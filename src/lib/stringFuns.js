
const StringFuns = {

  properCase: function(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  },

  pluralString: function(n, word) {
    if (n == 1) {
      return word
    } else {
      return word + 's'
    }
  },

  sanitize: function(s) {
    return s.replaceAll(/[^a-zA-Z0-9' ]/g, '').trim()
  },

  idSafe: function(s) {
    return s.replaceAll(/[^a-zA-Z0-9]/g, '').trim()
  }

}

export default StringFuns
