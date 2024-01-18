import './App.css'
import Navbar from "./components/Navbar.tsx";
//import StudentInfo from "./components/StudentInfo.tsx";
import CourseList from "./components/CourseList.tsx";

function App() {
  return (
    <div>
      <Navbar/>
      <CourseList id={1}/>
    </div>
  )
}

export default App
