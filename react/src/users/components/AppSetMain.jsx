import { Link } from "react-router-dom"
import { AppSetMainGet } from "users/api"

const AppSetMain = () => {
    const closepage = () => {window.close()}
    const getClick = e => {
        e.preventDefault()
        alert(`작업 요청`)
        AppSetMainGet(Request)
    }
    return(
    <body>
    <h2>메뉴 화면</h2>
    <button onClick={getClick}>Django Test</button><br/>
    <button onClick={closepage}>←</button>

    <nav><Link to="/setuinfo">사용자 정보</Link></nav><br/>
    <nav><Link to="/notice">공지사항</Link></nav><br/>
    <button>이용 방법</button><br/>
    <nav><Link to="/claim">문의 내역</Link></nav><br/>
    <nav><Link to="/setsettings">설정</Link></nav>

    </body>
    )
}

export default AppSetMain
