import { request } from "@/utils";

/** 高性价比 */
export const getHomeGoodPrice = () => {
    return request.get({ url: '/home/goodprice' })
}

/** 高分好评*/
export const getHomeHighScore = () => {
    return request.get({ url: '/home/highscore' })
}

/**低价折扣 */
export const getHomeDiscount = () => {
    return request.get({ url: '/home/discount' })
}
