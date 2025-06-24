import { createSlice } from "@reduxjs/toolkit"
export const resultReducer = createSlice({
    name: "result",
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            return {
                ...state, userId: action.payload
            }
        },
        pushResultAction: (state, action) => {
            state.result.push(action.payload)
        },
        updateResultActions: (state, action) => {
            const { trace, checked } = action.payload;
            console.log('on  result reducer ', { trace, checked })
            state.result.fill(checked, trace, trace + 1)
            console.log('after update')
        },
        resetResultActions: () => {
            return {
                userId: null,
                result: []
            }
        }
    }
})


export const { setUserId, pushResultAction, resetResultActions, updateResultActions } = resultReducer.actions;
export default resultReducer.reducer