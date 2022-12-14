import { Link } from "react-router-dom"

const AppSignup = () => {
    
    return (
        <body>
            <h1>회원가입</h1>
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

export default AppSignup