import { Link } from "react-router-dom"
import { appsetpayinfo } from "common/api"


const AppSetPayInfo = () => {
    const testClick = e => {
        e.preventDefault()
        appsetpayinfo()
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
    
    결제 정보
    <nav><Link to="/setuinfo">사용자 정보로 돌아가기</Link></nav><br/>
    <nav><Link to="/setpaymodify">결제 정보 수정</Link></nav>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>

    </>)
}

export default AppSetPayInfo
