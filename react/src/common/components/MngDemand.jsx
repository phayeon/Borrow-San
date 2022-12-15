import { mngdemand } from "common/api"

const MngDemand=()=>{
    const testClick = e => {
        e.preventDefault()
        mngdemand()
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
    <h3>수요 예측</h3>
    <table class="table">
        <thead>
            <td>
                <th scope="col">구분</th>
                <th scope="col">주소</th>
                <th scope="col">수요 증감</th>

            </td>
        </thead>
        <tbody className="bgc">
            <tr>
                <td>
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
                </td>
            </tr>
            <tr>
                <td>
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
export default MngDemand