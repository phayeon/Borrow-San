import { Link } from "react-router-dom"
import { appsetsettings } from "common/api"

const AppSetSettings = () => {
    const testClick = e => {
        e.preventDefault()
        appsetsettings()
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
    사용자 설정
    <nav><Link to="/setmain">SetMain</Link></nav>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>
    </>)
}

export default AppSetSettings
