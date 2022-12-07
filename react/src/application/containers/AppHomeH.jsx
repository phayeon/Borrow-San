import { NavH, Main, Login, Start, SignUp, Loading, LoadingLent, MainRent, QrScan, QrInput, ImgUmb, ImgReturn } from "application"
import { Route, Routes } from "react-router-dom"

const AppHomeH = () => {
  return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}><NavH/></td>
            </tr>
        </thead>
        <tbody>
            <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Routes>
                    <Route path="/" element={<Start/>}></Route>대여소
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                    <Route path="/loading" element={<Loading/>}></Route>
                    <Route path="/loadinglent" element={<LoadingLent/>}></Route>
                    <Route path="/main" element={<Main/>}></Route>
                    <Route path="/mainrent" element={<MainRent/>}></Route>
                    <Route path="/qrscan" element={<QrScan/>}></Route>
                    <Route path="/qrinput" element={<QrInput/>}></Route>
                    <Route path="/imgumb" element={<ImgUmb/>}></Route>
                    <Route path="/imgreturn" element={<ImgReturn/>}></Route>
                </Routes>
                </td>
            </tr>
        </tbody>
    </table>
  </>)
}

export default AppHomeH