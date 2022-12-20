import AsyncStorage from "@react-native-async-storage/async-storage"
import authAction from "../redux/actions/auth"
import transactionActions from "../redux/actions/transaction"
import userAction from "../redux/actions/user"


export const clearState = async (dispatch) => {
    try {
        dispatch(userAction.reset())
        dispatch(authAction.resetState())
        dispatch(transactionActions.reset())
        AsyncStorage.clear()
    } catch (error) {
        console.log(error)
    }
}