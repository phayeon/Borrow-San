import { Link } from "react-router-dom"

const AppLogin = () => {
    return (
    <body>
        <h1>로그인</h1>
        <input placeholder="아이디"></input><br/>
        <input placeholder="비밀번호"></input><br/>
        <input type="checkbox" name="autologin"/>자동 로그인<br/>
        <button><Link to="/main">로그인</Link></button>
        <button><Link to ="/Login">계정 찾기(임시)</Link></button><br/>
        <button><Link to ="/signup">회원가입</Link></button>
    </body>
    )
}

export default AppLogin