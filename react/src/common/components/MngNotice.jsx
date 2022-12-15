import { mngnotice } from "common/api"

const MngNotice = () => {
    const testClick = e => {
        e.preventDefault()
        mngnotice()
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
    <h3>공지 사항</h3>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">제목</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>

    <input type="string" class="form-control" id="inputGroupFile01" style={{height:300}}/>
    <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Upload</label>
        <input type="file" class="form-control" id="inputGroupFile01"/>
    </div>
    <button type="button" class="btn btn-success">공지사항 업로드</button>
        <br/><br/><br/>
        <button onClick={testClick}> 연결 확인 </button>
    </>)
}
export default MngNotice