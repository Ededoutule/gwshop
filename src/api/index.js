import ajax from './ajax'

const BASE_URL = '/api'
    //根据经纬度获取位置详情
const reqAddress = (geohash) => ajax(BASE_URL + `/position/${geohash}`)
    //获取食品种类
const reqFoodTypes = () => ajax(BASE_URL + '/index_category')
    //根据经纬度获取商铺列表
const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {
        longitude,
        latitude
    })
    // 4、根据经纬度和关键字搜索商铺列表
const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {
        geohash,
        keyword
    })
    // 6、用户名密码登陆
const reqPwdLogin = ({
        name,
        pwd,
        captcha
    }) => ajax(BASE_URL + '/login_pwd', {
        name,
        pwd,
        captcha
    }, 'POST')
    // 7、发送短信验证码
const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {
        phone
    })
    // 8、手机号验证码登陆
const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {
        phone,
        code
    }, 'POST')
    // 9、根据会话获取用户信息
const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
    // 10、用户登出
const reqLogout = () => ajax(BASE_URL + '/logout')

/**
 * 获取商家信息
 */
const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
const reqShopGoods = () => ajax('/goods')
export {
    reqAddress,
    reqFoodTypes,
    reqShops,
    reqSearchShop,
    reqPwdLogin,
    reqSendCode,
    reqSmsLogin,
    reqUserInfo,
    reqLogout,
    reqShopInfo,
    reqShopRatings,
    reqShopGoods
}