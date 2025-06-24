import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch } from 'react-redux'
import { resetAllActions } from '../redux/question_reducer';
import { resetResultActions } from '../redux/result_reducer';
import { useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';
import { combineSlices } from '@reduxjs/toolkit';
const Result = () => {
    const dispatch = useDispatch();

    const { questions: { queue, answers }, result: { userId, result } } = useSelector(state => state);

    const totalPoints = queue.length * 10;

    const attempts = attempts_Number(result)

    const earnPoints = earnPoints_Number(result, answers, 10)

    const flag = flagResult(totalPoints, earnPoints)

    const onRestart = () => {
        dispatch(resetAllActions())
        dispatch(resetResultActions())
    }
    return (
        <div className='container'>
            <h1 className="title text-light">Quiz Application</h1>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>
                        Username
                    </span>
                    <span className='bold'>
                        {userId || ''}
                    </span>
                </div>
                <div className='flex'>
                    <span>
                        Total Quiz Points
                    </span>
                    <span className='bold'>
                        {totalPoints || 0}
                    </span>
                </div>
                <div className='flex'>
                    <span>
                        Total Questions
                    </span>
                    <span className='bold'>
                        {answers.length || 0}
                    </span>
                </div>
                <div className='flex'>
                    <span>
                        Total Attempts
                    </span>
                    <span className='bold'>
                        {attempts || 0}
                    </span>
                </div>
                <div className='flex'>
                    <span>
                        Total Earn Points
                    </span>
                    <span className='bold'>
                        {earnPoints || 0}
                    </span>
                </div>
                <div className='flex'>
                    <span>
                        Quizz Result
                    </span>
                    <span style={{ color: `${flag ? 'green' : 'red'}` }} className='bold'>
                        {flag ? 'passed' : 'failed'}
                    </span>
                </div>
            </div>
            <div className="start">
                <Link to={'/'} className="btn" onClick={onRestart}>Restart</Link>
            </div>
            <div className="container">
                <ResultTable />
            </div>
        </div>
    )
}
export default Result;