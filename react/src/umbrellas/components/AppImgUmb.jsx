import { Link } from "react-router-dom"

const AppImgUmb = () => {
    const ImgGuide = () => {
        alert(`촬영 가이드(임시)`)
    }
    return (
        <body>
        <button><Link to="/mainrent">←</Link></button>
        <label>우산 촬영</label><br/>
        <h1>카메라 자리</h1>
        <button><Link to="/mainrent">촬영</Link></button><br/>
        <button onClick={ImgGuide}>촬영 가이드</button>
        <button>손전등(임시)</button>
        </body>
    )
}

export default AppImgUmb