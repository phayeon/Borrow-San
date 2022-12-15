import { mnguserinfo } from "common/api"

const MngUserInfo= ()=> {
    const testClick = e => {
        e.preventDefault()
        mnguserinfo()
        .then((res)=>{
            console.log(res)
            localStorage.setItem('연결 성공')
            alert(`연결 성공`)
        })
        .catch((err)=>{
            console.log(err)
            alert('연결 실패')
        })
    }
    return(<>
    <h3>회원 조회</h3>
    <table class="table">
        <thead>
            <td>
                <th scope="col">회원 ID</th>
                <th scope="col">이메일</th>
                <th scope="col">이름</th>
                <th scope="col">결제 카드</th>
            </td>
        </thead>
        <tbody className="bgc">
            <tr>
                <td>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                </td>
            </tr>
            <tr>
                <td>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                </td>
            </tr>
            <tr>
                <td>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                </td>
            </tr>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>
        </tbody>
    </table>
    </>)
}

export default MngUserInfo
