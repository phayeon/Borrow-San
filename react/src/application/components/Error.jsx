const Error = () => {
    const closepage = () => {window.close()}
    return(<body>
    <h2>오류 보고</h2>
    <button onClick={closepage}>←</button><br/>
    제목 : <input></input><br/>
    내용 : <input></input><br/>
    <button onClick={closepage}>제출</button>
    </body>)
}

export default Error