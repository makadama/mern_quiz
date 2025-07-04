import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import data, { answers } from "../database/data";

import * as Action from '../redux/question_reducer'
export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {

        setGetData(prev => ({ ...prev, isLoading: true }));
        (async () => {
            try {
                let question = await data;
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }))
                    setGetData(prev => ({ ...prev, apiData: question }))
                    dispatch(Action.startExamAction({ question, answers }))
                }
                else {
                    throw new Error("No Question Available")
                }
            } catch (error) {
                setGetData(prev => { return { ...prev, isLoading: false } })
                setGetData(prev => { return { ...prev, serverError: error } })
            }
        })()
    }, [dispatch])

    return [getData, setGetData]
}
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error)
    }
}