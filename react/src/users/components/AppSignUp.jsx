import { Link } from "react-router-dom"
import { AppSignUpGet } from "users/api"

const AppSignUp = () => {
    const getClick = e => {
        e.preventDefault()
        alert(`작업 요청`)
        AppSignUpGet(Request)
    }
    return (
        <body>
            <h1>회원가입</h1>
            <button onClick={getClick}>Django Test</button><br/>
            <input placeholder="이름"/><br/>
            <input placeholder="이메일"/>
            <button>중복 확인(임시)</button><br/>
            <input placeholder="아이디"/>
            <button>중복 확인(임시)</button><br/>
            <input placeholder="비밀번호"/><br/>
            <input placeholder="비밀번호 확인"/><br/>

            <input type="checkbox" name="SUAgree"/>
            가입 정보 이용에 동의합니다.<br/>

            <button><Link to="/Login">회원가입</Link></button>
        </body>
    )
}

export default AppSignUp