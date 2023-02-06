import {fetchUser} from '../utils/fetchLocalStaorageData'

const userInfo = fetchUser()
export const initialState = {
    user:userInfo
}