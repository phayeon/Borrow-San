import { Link } from "react-router-dom"

const ImgReturn = () => {
    const ImgGuide = () => {alert(`촬영 가이드(임시)`)}
    const RentInfo = () => {alert(`사용시간 : [null]\n지불금액 : [null]`)
                            window.location = "/main"}
    return (
        <body>
        <button><Link to="/mainrent">←</Link></button>
        <label>우산 촬영</label><br/>
        <h1>카메라 자리</h1>
        <button onClick={RentInfo}>촬영</button><br/>
        <button onClick={ImgGuide}>촬영 가이드</button>
        <button>손전등(임시)</button>
        </body>
    )
}

export default ImgReturn