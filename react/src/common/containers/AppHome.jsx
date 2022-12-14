import { AppLogin, AppMain, AppMainRent, AppNav, AppSetPayInfo, AppSetPayModify, AppSetSettings, AppSetUInfo, AppStart } from "common"
import { AppQrScan, AppQrInput, AppImgReturn, AppImgUmb } from "umbrellas"
import { AppSetUModify } from "users"
import { Route, Routes } from "react-router-dom"

const AppHome = () => {
  return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}><AppNav/></td>
            </tr>
        </thead>
        <tbody>
            <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Routes>
                    <Route path="/claim" element={<AppClaim/>}></Route>
                    <Route path="/setclaim" element={<AppSetClaim/>}></Route>
                    <Route path="/error" element={<AppError/>}></Route>
                    <Route path="/notice" element={<AppNotice/>}></Route>
                    <Route path="/setpayinfo" element={<AppSetPayInfo/>}></Route>
                    <Route path="/setpaymodify" element={<AppSetPayModify/>}></Route>
                    <Route path="/setsettings" element={<AppSetSettings/>}></Route>
                    <Route path="/setuinfo" element={<AppSetUInfo/>}></Route>
                    <Route path="/setumodify" element={<AppSetUModify/>}></Route>
                    <Route path="/" element={<AppStart/>}></Route>
                    <Route path="/login" element={<AppLogin/>}></Route>
                    <Route path="/signup" element={<AppSignUp/>}></Route>
                    <Route path="/main" element={<AppMain/>}></Route>
                    <Route path="/mainrent" element={<AppMainRent/>}></Route>
                    <Route path="/qrscan" element={<AppQrScan/>}></Route>
                    <Route path="/qrinput" element={<AppQrInput/>}></Route>
                    <Route path="/imgumb" element={<AppImgUmb/>}></Route>
                    <Route path="/imgreturn" element={<AppImgReturn/>}></Route>
                    <Route path="/setmain" element={<SetMain/>}></Route>
                </Routes>
                </td>
            </tr>
        </tbody>
    </table>
  </>)
}

export default AppHome