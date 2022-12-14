import { Nav, Claim, SetClaim, Error, Notice, SetPayInfo, SetPayModify, SetSettings, SetUInfo, SetUModify, Main, Login, Start, SignUp, MainRent, QrScan, QrInput, ImgUmb, ImgReturn, SetMain } from "application"
import { Route, Routes } from "react-router-dom"

const AppHomeG = () => {
  return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}><Nav/></td>
            </tr>
        </thead>
        <tbody>
            <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Routes>
                    <Route path="/claim" element={<Claim/>}></Route>
                    <Route path="/setclaim" element={<SetClaim/>}></Route>
                    <Route path="/error" element={<Error/>}></Route>
                    <Route path="/notice" element={<Notice/>}></Route>
                    <Route path="/setpayinfo" element={<SetPayInfo/>}></Route>
                    <Route path="/setpaymodify" element={<SetPayModify/>}></Route>
                    <Route path="/setsettings" element={<SetSettings/>}></Route>
                    <Route path="/setuinfo" element={<SetUInfo/>}></Route>
                    <Route path="/setumodify" element={<SetUModify/>}></Route>
                    <Route path="/" element={<Start/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                    <Route path="/main" element={<Main/>}></Route>
                    <Route path="/mainrent" element={<MainRent/>}></Route>
                    <Route path="/qrscan" element={<QrScan/>}></Route>
                    <Route path="/qrinput" element={<QrInput/>}></Route>
                    <Route path="/imgumb" element={<ImgUmb/>}></Route>
                    <Route path="/imgreturn" element={<ImgReturn/>}></Route>
                    <Route path="/setmain" element={<SetMain/>}></Route>
                </Routes>
                </td>
            </tr>
        </tbody>
    </table>
  </>)
}

export default AppHomeG