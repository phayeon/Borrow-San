import { Route, Routes } from "react-router-dom"
//import "web/manager/style/Manager.css"
import { MngBox } from "stands"
import { MngDamage } from "umbrellas"
import { MngUserInfo, MngDemand, MngMenu, MngNotice } from "common"


const ManagerPages = ()=>{
    return(<>
    <table>
    <thead>관리자명</thead>
    <div><MngMenu/></div>
    </table>
    <body className="bgc">
        <Routes>
            <Route path="*/mngbox" element={<MngBox/>}></Route>
            <Route path="*/mngdamage" element={<MngDamage/>}></Route>
            <Route path="*/mnguserinfo" element={<MngUserInfo/>}></Route>
            <Route path="*/mngdemand" element={<MngDemand/>}></Route>
            <Route path="*/mngnotice" element={<MngNotice/>}></Route>
        </Routes>
    </body>
    </>)
    }

export default ManagerPages