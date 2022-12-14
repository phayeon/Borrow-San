import { Link } from "react-router-dom"
import { useState } from "react"
import { appsetpaymodify } from "common/api"

const AppSetPayModify = () => {
    const testClick = e => {
        e.preventDefault()
        appsetpaymodify()
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
    
    const [inputs, setInputs] = useState({})
    const {cname, cnumber, cexpm, cexpy, text} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const request = {cname, cnumber, cexpm, cexpy, text}
        alert(`사용자 이름: ${JSON.stringify(request)}`)
    }
    
    return(<>
    <nav><Link to="/setpayinfo">SetPayInfo</Link></nav><br/>
    결제정보 수정<br/><br/>
    카드사 이름: <input type="text" name="cname" onChange={onChange} /><br/>
    카드 번호: <input type="text" name="cnumber" onChange={onChange} /><br/>
    만료 기한 : <input type="text" name="cexpm" onChange={onChange} /><input type="text" name="cexpy" onChange={onChange} /><br/>
    CVC: <input type="text" name="cvc" onChange={onChange} /><br/>
    <button onClick={onClick}> 등록 </button>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>
    </>)
}

export default AppSetPayModify