import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
export const attempts_Number = (result) => {
    return result.filter(r => r !== undefined).length
}


export const earnPoints_Number = (result, answer, point) => {
    return result.map((element, i) => answer[i] === element).filter(i => i).map(i => i * point).reduce((prev, curr) => prev + curr, 0)
}

export const flagResult = (totalPoints, earnPoints) => {
    return (totalPoints * 50 / 100) < earnPoints
}


export const CheckUserExit = ({ children }) => {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to='/' replace={true}></Navigate>
}