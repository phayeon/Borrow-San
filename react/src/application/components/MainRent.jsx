import { Link } from "react-router-dom"

const MainRent = () => {
    const QIalert = () => {
        alert(`우산 대여 후 5분 내에\n내부 촬영을 해주셔야\n차후 파손에 관한\n이의 제기가 가능합니다.`)
    }
    return (
        <body>
        {QIalert}
        <h1>메인화면(대여 중)</h1>
        <input placeholder="Secrch" name="search"/>
        <button><Link to="/setmain">메뉴</Link></button><br/>
        <button><Link to="/imgumb">우산 촬영</Link></button><br/>
        <button><Link to="/error">오류 보고</Link></button><br/>
        <button><Link to="/imgreturn">반납하기</Link></button>
        </body>
    )
}

export default MainRent