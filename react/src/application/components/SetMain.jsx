const SetMain = () => {
    const backpage = () => {window.history.back()}
    return(
    <body>
    <h2>메뉴 화면</h2>
    <button onClick={backpage}>←</button>

    <nav><Link to="/setuinfo">사용자 정보</Link></nav><br/>
    <nav><Link to="/notice">공지사항</Link></nav><br/>
    <nav><Link to="/">이용 방법</Link></nav><br/>
    <nav><Link to="/claim">문의 내역</Link></nav><br/>
    <nav><Link to="/setsettings">설정</Link></nav>

    </body>
    )
}

export default SetMain
