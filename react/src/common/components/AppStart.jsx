import { Link } from "react-router-dom"

const AppStart = () => {
    return (
    <body>
        <h1>시작화면</h1>
        <button><Link to="/login">로그인</Link></button><br/>
        <button><Link to="/signup">회원가입</Link></button>
    </body>
    )
}

export default AppStart