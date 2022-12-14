import { Link } from "react-router-dom"


const AppSetPayInfo = () => {
    return(<>
    결제 정보
    <nav><Link to="/setuinfo">사용자 정보로 돌아가기</Link></nav><br/>
    <nav><Link to="/setpayinfo">결제 정보 수정</Link></nav>

    </>)
}

export default AppSetPayInfo
