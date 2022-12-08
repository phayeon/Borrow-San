import um from "web/manager/img/map.PNG"

const MngDamage= ()=> {
    return(<>
    <h3>보관함 조회</h3>
    <img src={um}/>
    <table class="table">
        <thead>
            <td>
                <th scope="col">대여 ID</th>
                <th scope="col">우산 ID</th>
                <th scope="col">회원 ID</th>
                <th scope="col">보관함</th>
                <th scope="col">파손율</th>
                <th scope="col">교체 필요 여부</th>
            </td>
        </thead>
        <tbody className="bgc">
            <tr>
                <td>
                    <th scope="row">1</th>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                </td>
            </tr>
            <tr>
                <td>
                    <th scope="row">2</th>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                </td>
            </tr>
            <tr>
                <td>
                    <th scope="row">3</th>
                    <th>??</th>
                    <th>??</th>
                    <th>??</th>
                </td>
            </tr>
        </tbody>
    </table>
    </>)
}

export default MngDamage
