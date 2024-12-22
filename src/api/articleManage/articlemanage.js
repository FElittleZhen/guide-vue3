/*
 * @Author: wangzhen12138 1615777455@qq.com
 * @Date: 2024-12-21 19:33:14
 * @LastEditors: wangzhen12138 1615777455@qq.com
 * @LastEditTime: 2024-12-22 16:29:29
 * @FilePath: \My-Vue3\src\api\articleManage\articlemanage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request2'
// 新增tab标签
export function addTabList(data) {
    return request({
        url: '/article/add',
        method: 'post',
        data:data
    })
}
//   获取tab列表
export function getTabList(query) {
    return request({
        url: '/system/dict/type/list',
        method: 'get',
        params: query
    })
}


