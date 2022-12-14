import { Route, Routes } from "react-router-dom"
import { Nav, Main, MngNotice, ManagerPages } from "common"

const Home = ()=> {
    return(<>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
    
    <div className="container-fluid">
        <header><Nav/></header>
        <div>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/main" element={<Main/>}></Route>
                <Route path="/notice" element={<MngNotice/>}></Route>
                <Route path="/mn/*" element={<ManagerPages/>}></Route>
            </Routes>
        </div>
    </div></>)
}

export default Home