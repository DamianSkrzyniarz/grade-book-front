import React, {useState} from "react";
import Cookies from "js-cookie";
import {Course} from "../interfaces/Course.ts";
import {useParams} from "react-router-dom";
import SignedUpStudents from "./SignedUpStudents.tsx";
import {User} from "../interfaces/User.ts";

function CourseInfo(userData: User){

    const [courseData, setCourseData] = useState<Course>({teacher: {}})
    const {id} = useParams()

    React.useEffect(() => {
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        fetch(`http://localhost:8080/courses/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
            .then(response => response.json())
            .then(data => setCourseData(data))
    }, [])
    return (
        <div className="container-sm">
            <table className="table table-striped-columns table-bordered">
                <tbody>
                <tr>
                    <th scope="row">Nazwa</th>
                    <td>{courseData.name}</td>
                </tr>
                <tr>
                    <th scope="row">Prowadzący</th>
                    <td>{courseData.teacher?.firstName} {courseData.teacher?.lastName}</td>
                </tr>
                <tr>
                    <th scope="row">Typ zajęć</th>
                    <td>{courseData.type}</td>
                </tr>
                <tr>
                    <th scope="row">Punkty ECTS</th>
                    <td>{courseData.ects}</td>
                </tr>
                <tr>
                    <th scope="row">Liczba godzin</th>
                    <td>{courseData.hours}</td>
                </tr>
                <tr>
                    <th scope="row">Opis</th>
                    <td>{courseData.description}</td>
                </tr>
                </tbody>
            </table>
        <SignedUpStudents {...userData}/>
        </div>
    )
}

export default CourseInfo