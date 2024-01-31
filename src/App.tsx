import './App.css'
import Navbar from "./components/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm.tsx";
import CourseList from "./components/CourseList.tsx";
import StudentInfo from "./components/StudentInfo.tsx";
import {useEffect, useState} from "react";
import {User} from "./interfaces/User.ts";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import NewStudentForm from "./components/NewStudentForm.tsx";
import NewTeacherForm from "./components/NewTeacherForm.tsx";
import NewCourseForm from "./components/NewCourseForm.tsx";

function App() {

    const [userData, setUserData] = useState<User>()

    useEffect( () => {
        if(typeof Cookies.get('token') !== "undefined") {
            setUserData(jwtDecode<User>(Cookies.get('token')!))
        }
    }, [])

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/student" element={<StudentInfo {...userData}/>} />
        <Route path="/courses" element={<CourseList {...userData}/>} >
            <Route path=":id"/>
        </Route>
        <Route path="/create">
            <Route path="student" element={<NewStudentForm/>}/>
            <Route path="teacher" element={<NewTeacherForm/>}/>
            <Route path="course" element={<NewCourseForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
