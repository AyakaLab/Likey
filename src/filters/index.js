import i18n from '../i18n'
// import API from '../api/api'
import BigNumber from 'bignumber.js'

const filters = {
  winstonToAr (val, showDecimals = false) {
    if (!val) return '0'
    val = new BigNumber(val).div(1000000000000)
    BigNumber.set({ EXPONENTIAL_AT: 13 })
    return showDecimals ? val.toFixed(12) : val.toString()
  },
  finalize (val, loading) {
    if (loading) return i18n.tc('app.loading')
    if (!val) return '0 AR'
    return val + ' AR'
  }
}

export default filters