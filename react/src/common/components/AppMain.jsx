import { Link } from "react-router-dom"

const AppMain = () => {
    const rentInfo = () => {
        alert(
            "[장소명] 보관함\n상세 위치 정보\n잔여 우산 개수 : [null]")
    }

    return (
        <body>
        <h2>메인화면</h2>
        <input placeholder="Secrch" name="search"/>
        <button><Link target={"_blank"} to="/setmain">메뉴</Link></button><br/>
        <button onClick={rentInfo}>☂</button>
        <button><Link target={"_blank"} to="/error">오류보고</Link></button><br/>
        <button><Link to="/qrscan">Borrow</Link></button>
        </body>
    )
}

export default AppMain