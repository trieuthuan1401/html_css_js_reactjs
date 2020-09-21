import { combineReducers } from 'redux';
import { contactReducer } from './contactReducer'


//Trong một ứng dụng phức tạp sử dụng hàm combineReducers() để combine tất cả các reducers trong application thành một single index reducer. Mỗi một reducers đại diện cho một phần của application state, và Mỗi một reducer thì có state parameter là khác nhau.

export default combineReducers({
    contact: contactReducer
})
