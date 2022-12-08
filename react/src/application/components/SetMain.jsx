const SetMain = () => {
    const backpage = () => {window.history.back()}
    return(
    <body>
    <h2>메뉴 화면</h2>
    <button onClick={backpage}>←</button>
    </body>
    )
}

export default SetMain
