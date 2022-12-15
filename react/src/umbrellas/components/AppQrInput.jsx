import { Link } from "react-router-dom"

const AppQrInput = () => {
    const QIalert = () => {
        alert(`대여함 코드 : [null]\n우산 코드 : [null]\n이 맞나요?`)
        window.location = "/mainrent"
    }
    return (
        <body>
        <button><Link to="/qrscan">←</Link></button>
        <label>대여 QR입력</label>
        <button>손전등(임시)</button><br/>

        <input placeholder="대여함 코드를 입력하세요" name="rtcode"/><br/>
        <input placeholder="우산 코드를 입력하세요" name="umcode"/><br/>
        <button onClick={QIalert}>완료</button>
        </body>
    )
}

export default AppQrInput