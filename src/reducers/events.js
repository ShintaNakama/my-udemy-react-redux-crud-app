import _ from 'lodash'
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENTS, } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            console.log(action.response.data)
            const data = action.response.data
            return { ...events, [data.id]: data }
            // クライアントのメモリにあるデータをAPIから取得したデータで更新するため、
            // eventで渡ってきたデータで更新している
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
            console.log(action.id)
            delete events[action.id] //delete_event後一覧に戻る際、メモリにある古い情報も削除する
            return { ...events } //spread演算子を使うことで新しいオブジェクトを渡すことができる
        default:
            return events
    }
}