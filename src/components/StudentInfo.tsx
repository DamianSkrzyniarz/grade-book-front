import React, {useState} from "react";
import {Student} from "../interfaces/Student.ts";
import Cookies from "js-cookie";
import {User} from "../interfaces/User.ts";

function StudentInfo(currentUser: User){

    const [studentData, setStudentData] = useState<Student>({})


    React.useEffect(() => {
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        fetch(`http://localhost:8080/students/email/${currentUser.sub}`, {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
            .then(response => response.json())
            .then(data => setStudentData(data))
    }, [])
    return (
        <div className="container-sm">
            <table className="table table-striped-columns table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Imię</th>
                        <td>{studentData.firstName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Nazwisko</th>
                        <td>{studentData.lastName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Indeks</th>
                        <td>{studentData.index}</td>
                    </tr>
                    <tr>
                        <th scope="row">Semestr</th>
                        <td>{studentData.semester}</td>
                    </tr>
                    <tr>
                        <th scope="row">Kierunek</th>
                        <td>{studentData.major}</td>
                    </tr>
                </tbody>
            </table>
        </div>
)
}

export default StudentInfo