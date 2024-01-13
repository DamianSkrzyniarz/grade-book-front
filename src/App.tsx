import './App.css'
import Navbar from "./components/Navbar.tsx";
import StudentInfo from "./components/StudentInfo.tsx";
//import CourseList from "./components/CourseList.tsx";

function App() {
  return (
    <div>
      <Navbar/>
      <StudentInfo id={2}/>
    </div>
  )
}

export default App
