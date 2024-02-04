import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {User} from "../interfaces/User.ts";
import {Link} from "react-router-dom";
import {Signup} from "../interfaces/Signup.ts";


function StudentCourseList(userData: User) {

    const [signupsData, setSignupsData] = useState<Signup[]>([])

    useEffect(() => {
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));

        fetch(`http://localhost:8080/signups/student/email/${userData.sub}`, {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
            .then(response => response.json())
            .then(data => setSignupsData(data))
    }, [])

    return (
        <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">Przedmiot</th>
                    <th scope="col">Prowadzący</th>
                    <th scope="col">Typ zajęć</th>
                    <th scope="col">ECTS</th>
                    <th scope="col">Ocena</th>
                    <th scope="col">Termin</th>
                    <th scope="col">Data wystawienia</th>
                </tr>
                </thead>
                <tbody>
                {
                    signupsData.map(signup =>{
                        return (
                            <tr>
                                <td>{signup.course?.name}</td>
                                <td>{signup.course?.teacher.firstName} {signup.course?.teacher.lastName}</td>
                                <td>{signup.course?.type}</td>
                                <td>{signup.course?.ects}</td>
                                <td>{signup.grade}</td>
                                <td>{signup.attempt}</td>
                                <td>{signup.gradeDate}</td>
                                <td><Link to={`/student/courses/details/${signup.course.id}`}>Szczegóły</Link></td>

                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default StudentCourseList