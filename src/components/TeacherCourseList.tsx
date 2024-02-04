import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {User} from "../interfaces/User.ts";
import {Course} from "../interfaces/Course.ts";
import {Link} from "react-router-dom";


function TeacherCourseList(userData: User) {

    const [coursesData, setCoursesData] = useState<Course[]>([])

    useEffect(() => {
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        fetch(`http://localhost:8080/courses/teacher/${userData.sub}`, {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
            .then(response => response.json())
            .then(data => setCoursesData(data))
    }, [])

    return (
        <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">Nazwa</th>
                    <th scope="col">ECTS</th>
                    <th scope="col">Typ zajęć</th>
                    <th scope="col">Liczba godzin</th>

                </tr>
                </thead>
                <tbody>
                {
                    coursesData.map(course =>{
                        return (
                        <tr>
                            <td><Link to={`/teacher/courses/details/${course.id}`}>{course.name}</Link></td>
                            <td>{course.ects}</td>
                            <td>{course.type}</td>
                            <td>{course.hours}</td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default TeacherCourseList