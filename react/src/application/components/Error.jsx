//san - merge
import { Link } from "react-router-dom"

const Error = () => {
    return(<>
    오류 보고
    <nav><Link to="/mainrent">MainRent</Link></nav><br/>
    제목 : <input></input><br/>
    내용 : <input></input><br/>
    <button>제출</button>
    </>)
}

export default Error