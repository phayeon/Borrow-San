import { Link } from "react-router-dom"
import { appstart } from "common/api"

const AppStart = () => {
    const testClick = e => {
        e.preventDefault()
        appstart()
        .then((res)=>{
            console.log(res)
            localStorage.setItem('연결 성공')
            alert(`연결 성공`)
        })
        .catch((err)=>{
            console.log(err)
            alert('연결 실패')
        })
    }
    return (
    <body>
        <h1>시작화면</h1>
        <button><Link to="/login">로그인</Link></button><br/>
        <button><Link to="/signup">회원가입</Link></button>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>
    </body>
    )
}

export default AppStart