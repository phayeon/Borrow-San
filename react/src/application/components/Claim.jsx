const Claim = () => {
    const backpage = () => {window.history.back()}
    return(
    <body>
    <h2>사용자 문의</h2>
    <button onClick={backpage}>←</button>
    </body>
    )
}

export default Claim