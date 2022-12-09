import { Link } from "react-router-dom"

const QrScan = () => {
    return (
        <body>
        <button><Link to="/main">←</Link></button>
        <label>대여 QR스캔</label><br/>
        <h2>카메라 자리</h2>
        <label>※ 인식 되면 자동으로 화면 이동 ※</label><br/><br/>
        <button><Link to="/qrinput">코드 입력</Link></button>
        <button><Link to="/qrscan">손전등(임시)</Link></button>
        </body>
    )
}

export default QrScan