//san - merge
import { Link } from "react-router-dom"

const SetUInfo = () => {
    return(<>
    사용자 정보
    <nav><Link to="/setmain">←</Link></nav><br/>
    <nav><Link to="/setumodify">사용자 정보 수정</Link></nav>
    </>)
}

export default SetUInfo
