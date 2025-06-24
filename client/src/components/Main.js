import { useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css'
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
const Main = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const startQuiz = () => {
        console.log(inputRef.current?.value)
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <ol>
                <li>
                    You will be asked 10 questions one after another.
                </li>
                <li>
                    10 points is awarded for the correect answer.
                </li>
                <li>
                    Each question has three OPtions. YOu can choose only one Options.
                </li>
                <li>
                    You can review and change answers before the quiz finish.
                </li>
                <li>
                    The result will ve declared at the end of the quiz.
                </li>
            </ol>
            <form id="form">
                <input ref={inputRef} type="text" placeholder="Username*" />
            </form>
            <div className="start">
                <Link className="btn" to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
        </div>
    )
}
export default Main; 