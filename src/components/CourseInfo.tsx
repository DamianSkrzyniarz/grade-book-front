import React, {useState} from "react";
import Cookies from "js-cookie";
import {Course} from "../interfaces/Course.ts";
import {useParams} from "react-router-dom";

function CourseInfo(){

    const [courseData, setCourseData] = useState<Course>({})
    const {id} = useParams()

    React.useEffect(() => {
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        console.log(id)
        fetch(`http://localhost:8080/courses/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
            .then(response => response.json())
            .then(data => {
                setCourseData(data)
                console.log(data)
            })
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
        </div>
    )
}

export default CourseInfo