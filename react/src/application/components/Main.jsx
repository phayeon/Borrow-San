import { Link } from "react-router-dom"

const Main = () => {
    const rentInfo = () => {
        alert(
            "[장소명] 보관함\n상세 위치 정보\n잔여 우산 개수 : [null]")
    }

    return (
        <body>
        <h2>메인화면</h2>
        <input placeholder="Secrch" name="search"/>
        <button><Link to="/setmain">메뉴</Link></button><br/>
        <button onClick={rentInfo}>☂</button>
        <button><Link to="/claim">고객센터</Link></button><br/>
        <button><Link to="/qrscan">Borrow</Link></button>
        </body>
    )
}

export default Main