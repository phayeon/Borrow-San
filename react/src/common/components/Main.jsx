import "web/main/style/Main.css"
import mainimg from "web/main/img/mainimg.PNG"

const Main = ()=> {
    return(<>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
    
    <table className="container-fluid">
        <thead></thead>
        <tbody>
            <tr> <img src={mainimg} style={{width:"100%", height:1000}}/> </tr>
            <tr className="white" id='service' style={{height: "1080px"}}>service</tr>
            <tr id="howto" style={{height: "1080px"}}>howto</tr>
            <tr className="white" id="mapping" style={{height: "1080px"}}>mapping</tr>
        </tbody>
    </table></>)
}

export default Main