import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }

}

export const updateResult = (index) => async (dispatch) => {
    try {
        await dispatch(Action.updateResultActions(index))
    }
    catch (error) {
        console.log(error)
    }
}