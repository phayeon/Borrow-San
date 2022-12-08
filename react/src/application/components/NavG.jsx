//우선 화면으로 봐야하니 한곳에 링크 다 모아놓고 나중에 링크 배치 다시 하겠습니다.

import { Link } from "react-router-dom"

const NavG = () => <nav>
    <ul>
        <li><Link to="/claim">Claim</Link></li>
        <li><Link to="/error">Error</Link></li>
        <li><Link to="/notice">Notice</Link></li>
        <li><Link to="/setpayinfo">SetPayInfo</Link></li>
        <li><Link to="/setpaymodify">SetPayModify</Link></li>
        <li><Link to="/setsettings">SetSettings</Link></li>
        <li><Link to="/setuinfo">SetUInfo</Link></li>
        <li><Link to="/setumodify">SetUModify</Link></li>
        
    </ul>
</nav>

export default NavG