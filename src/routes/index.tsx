import { Routes, Route, Navigate } from "react-router";
import Login from "../pages/Login";

const RoutesMain = () => {

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/landing"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<h1>register</h1>}/>
            <Route path="/landing" element={<h1>landing Page</h1>}/>

            
            <Route path="/dashboard" element={<h1>dash</h1>}></Route>
        </Routes>
    )
}
