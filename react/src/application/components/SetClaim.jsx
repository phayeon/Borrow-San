import { Link } from "react-router-dom"

const SetClaim = () => {
    return(<>
    사용자 문의 작성
    <button><Link to="/claim">←</Link></button>
    제목 : <input></input><br/>
    내용 : <input></input><br/>
    <button>취소</button><button>제출</button>

    </>)
}

export default SetClaim
