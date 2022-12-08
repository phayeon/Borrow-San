import { NavG, Claim, Error, Notice, SetPayInfo, SetPayModify, SetSettings, SetUInfo, SetUModify } from "application"
import { Route, Routes } from "react-router-dom"

const AppHomeG = () => {
  return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}><NavG/></td>
            </tr>
        </thead>
        <tbody>
            <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Routes>
                    <Route path="/claim" element={<Claim/>}></Route>
                    <Route path="/error" element={<Error/>}></Route>
                    <Route path="/notice" element={<Notice/>}></Route>
                    <Route path="/setpayinfo" element={<SetPayInfo/>}></Route>
                    <Route path="/setpaymodify" element={<SetPayModify/>}></Route>
                    <Route path="/setsettings" element={<SetSettings/>}></Route>
                    <Route path="/setuinfo" element={<SetUInfo/>}></Route>
                    <Route path="/setumodify" element={<SetUModify/>}></Route>
                </Routes>
                </td>
            </tr>
        </tbody>
    </table>
  </>)
}

export default AppHomeG