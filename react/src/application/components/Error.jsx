const Error = () => {
    const backpage = () => {window.history.back()}
    return(<>
    오류 보고
    <button onClick={backpage}>←</button>
    제목 : <input></input><br/>
    내용 : <input></input><br/>
    <button>제출</button>
    </>)
}

export default Error