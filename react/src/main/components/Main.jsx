import 'main/components/Main.css'
const Main=()=> {
    return(<>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Borrow-San</a>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#service" >서비스 소개</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#howto">이용방법</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#notice" >공지사항</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <table class = "container-fluid">
            <tbody>
            <td> 

                <tr id='service'>service<img src="" style={{height: "1080px"}}></img></tr>
                
                <tr class="white" id="howto">howto<img src="" style={{height: "1080px"}}></img></tr>
                <tr id="notice">mapping<img src="" style={{height: "1080px"}}></img></tr>
            </td>
        </tbody>
    </table>
    </>)
}
export default Main