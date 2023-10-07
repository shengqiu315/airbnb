import { request } from "@/utils";


export const getHomeGoodPrice = () => {
    return request.get({ url: '/home/goodprice' })
}