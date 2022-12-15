//import "web/main/style/Main.css"
//import mainimg from "web/main/img/mainimg.PNG"
import { main } from "common/api"

const Main = ()=> {
    const testClick = e => {
        e.preventDefault()
        main()
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
    
    <table className="container-fluid">
        <thead></thead>
        <tbody>
            <tr className="white" id='service' style={{height: "1080px"}}>service</tr>
            <tr id="howto" style={{height: "1080px"}}>howto</tr>
            <tr className="white" id="mapping" style={{height: "1080px"}}>mapping</tr>
        </tbody>
    </table>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button></>)
}

export default Main