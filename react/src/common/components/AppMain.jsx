import { Link } from "react-router-dom"
import { appmain } from "common/api"

const AppMain = () => {
    const testClick = e => {
        e.preventDefault()
        appmain()
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
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>
        </body>
    )
}

export default AppMain