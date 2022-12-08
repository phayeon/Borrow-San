//san - merge
import { Link } from "react-router-dom"

const SetUModify = () => {
    return(<>
        <nav><Link to="/setuinfo">SetUInfo</Link></nav>
    사용자 정보 수정<br/><br/>
    이름: <input/><br/>
    이메일: <input placeholder="ex) e-mail_ID@mailadress.com"/><br/>
    성별: <input placeholder=" ex) mail or femail "/><br/>
    생년월일: <input placeholder=" ex) 20221208 "/><br/>
    전화번호: <input placeholder="ex) 01012345678"/><br/>
    <button> 취소 </button><button> 등록 </button>
    </>)
}

export default SetUModify
