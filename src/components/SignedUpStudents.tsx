import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Signup} from "../interfaces/Signup.ts";
import {useParams} from "react-router-dom";
import {User} from "../interfaces/User.ts";

function SignedUpStudents(userData: User){

    const [signupsData, setSignupsData] = useState<Signup[]>([])
    const {id} = useParams()

    useEffect(() => {
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));

        fetch(`http://localhost:8080/signups/course/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
            .then(response => response.json())
            .then(data => setSignupsData(data))
    }, [])
    if(userData.scope === "ROLE_TEACHER" || userData.scope === "ROLE_ADMIN") {
        return (
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">Student</th>
                    <th scope="col">Indeks</th>
                    <th scope="col">Ocena</th>
                    <th scope="col">Termin</th>
                    <th scope="col">Data wystawienia</th>
                    <th scope="col">Edytuj ocenę</th>

                </tr>
                </thead>
                <tbody>
                {
                    signupsData.map(signup => {
                        return (
                            <tr>
                                <td>{signup.student?.firstName} {signup.student?.lastName}</td>
                                <td>{signup.student?.index}</td>
                                <td>{signup.grade}</td>
                                <td>{signup.attempt}</td>
                                <td>{signup.gradeDate}</td>
                                <td>✍️</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        )
    }
}

export default SignedUpStudents