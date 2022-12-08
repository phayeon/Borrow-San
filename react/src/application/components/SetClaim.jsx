const SetClaim = () => {
    const backpage = () => {window.history.back()}
    return(<>
    사용자 문의 작성
    <button onClick={backpage}>SetMain</button><br/>
    제목 : <input></input><br/>
    내용 : <input></input><br/>
    <button>제출</button>
    </>)
}

export default SetClaim
