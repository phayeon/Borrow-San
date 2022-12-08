//san - merge
import { Link } from "react-router-dom"


const SetPayInfo = () => {
    return(<>
    결제 정보
    <nav><Link to="/setuinfo">돌아가기</Link></nav><br/>
    <nav><Link to="/setpayinfo">결제 정보 수정</Link></nav>

    </>)
}

export default SetPayInfo
