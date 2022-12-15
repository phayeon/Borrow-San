//san - merge
import { Link } from "react-router-dom"
import { appsetuinfo } from "common/api"

const AppSetUInfo = () => {
    const testClick = e => {
        e.preventDefault()
        appsetuinfo()
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
    return(<>
    사용자 정보
    <nav><Link to="/setmain">←</Link></nav><br/>
    <nav><Link to="/setumodify">사용자 정보 수정</Link></nav>
    <nav><Link to="/setpayinfo">결제 정보</Link></nav>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>
    </>)
}

export default AppSetUInfo
