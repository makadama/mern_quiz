import { useEffect, useState } from "react";
import Questions from "./Questions"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/fetchQuestions";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

const Quiz = () => {
    const trace = useSelector(state => state.questions.trace)
    const queue = useSelector(state => state.questions.queue)
    const answers = useSelector(state => state.questions.answers)
    const result = useSelector(state => state.result.result)
    const [check, setChecked] = useState(undefined)

    useEffect(() => {
        console.log('questions', queue)
        console.log('answers', answers)
        console.log('result', result)
    })

    const dispatch = useDispatch();
    const onNext = () => {
        if (trace < queue.length) {
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }

        /** reset the value of the checked variable */
        setChecked(undefined)
    }


    const onPrevious = () => {
        if (trace > 0) {
            dispatch(MovePrevQuestion())
        }
    }


    const onChecked = (check) => {
        setChecked(check)
    }

    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace={true}></Navigate>
    }
    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <Questions onChecked={onChecked} />
            <div className="grid">
                {
                    trace > 0 ? <button className="btn prev" onClick={onPrevious}>Prev</button> : <div></div>
                }

                <button className="btn next" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
export default Quiz;