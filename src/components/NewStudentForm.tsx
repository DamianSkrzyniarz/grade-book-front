import React, {useState} from "react";
import Cookies from 'js-cookie';
import {Student} from "../interfaces/Student.ts";


function NewStudentForm(){

    const [formData, setFormData] = useState<Student>({})

    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(formData)
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        headers.append('Content-Type', "application/json")
        fetch(`http://localhost:8080/students/new`, {
            method: 'POST',
            mode: 'cors',
            headers: headers,
            body: JSON.stringify(formData)
        })
    }
            function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
                console.log(event.target)
                setFormData((current) => ({
                    ...current,
                    [event.target.id]: event.target.value
                }))
            }

            return (
                <div className="container">
                    <form onSubmit={handleForm}>
                        <div className="mb-3">
                            <label htmlFor="index" className="form-label">Numer Indeksu</label>
                            <input type="number" className="form-control" id="index" value={formData.index}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Imię studenta</label>
                            <input type="text" className="form-control" id="firstName" value={formData.firstName}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Nazwisko studenta</label>
                            <input type="text" className="form-control" id="lastName" value={formData.lastName}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="semester" className="form-label">Semestr</label>
                            <input type="text" className="form-control" id="semester" value={formData.semester}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="major" className="form-label">Kierunek</label>
                            <input type="text" className="form-control" id="major" value={formData.major}
                                   onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Dodaj</button>
                    </form>

                </div>
            )
}

export default NewStudentForm