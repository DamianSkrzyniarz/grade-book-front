import React, {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import {Course} from "../interfaces/Course.ts";
import {Teacher} from "../interfaces/Teacher.ts";

function NewCourseForm() {

    const [formData, setFormData] = useState<Course>({})
    const [teachersData, setTeachersData] = useState<Teacher[]>([])

    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        headers.append('Content-Type', "application/json")
        fetch(`http://localhost:8080/courses/new`, {
            method: 'POST',
            mode: 'cors',
            headers: headers,
            body: JSON.stringify(formData)
        })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData((current) => ({
            ...current,
            [event.target.id]: event.target.value
        }))
    }

    function handleTeacherChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFormData((current) => ({
            ...current,
            teacher:  teachersData.find((teacher) => teacher.id === parseInt(event.target.value))
        }))
    }

    useEffect(() => {
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));

        fetch(`http://localhost:8080/teachers/all`, {
            method: 'GET',
            mode: 'cors',
            headers: headers
        })
            .then(response => response.json())
            .then(data => setTeachersData(data))
    }, [])


    return (
        <div className="container">
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nazwa przedmiotu</label>
                    <input type="text" className="form-control" id="name" value={formData.name}
                           onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Typ zajęć</label>
                    <input type="text" className="form-control" id="type" value={formData.type}
                           onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ects" className="form-label">Punkty ECTS</label>
                    <input type="number" className="form-control" id="ects" value={formData.ects}
                           onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="hours" className="form-label">Ilość godzin</label>
                    <input type="number" className="form-control" id="hours" value={formData.hours}
                           onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Opis</label>
                    <input type="text" className="form-control" id="description" value={formData.description}
                           onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <select className="form-select" onChange={handleTeacherChange}>
                        {
                            teachersData.map(teacher => {
                                return (
                                    <option key={teacher.id} value={teacher.id}>
                                        {teacher.firstName} {teacher.lastName}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                    <button type="submit" className="btn btn-primary">Dodaj</button>
            </form>

        </div>
)
}

export default NewCourseForm