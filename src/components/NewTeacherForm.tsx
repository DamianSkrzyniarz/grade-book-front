import React, {useState} from "react";
import Cookies from 'js-cookie';
import {Teacher} from "../interfaces/Teacher.ts";


function NewTeacherForm(){

    const [formData, setFormData] = useState<Teacher>({})

    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(formData)
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        headers.append('Content-Type', "application/json")
        fetch(`http://localhost:8080/teachers/new`, {
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

            return (
                <div className="container">
                    <form onSubmit={handleForm}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Imię</label>
                            <input type="text" className="form-control" id="firstName" value={formData.firstName}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Nazwisko</label>
                            <input type="text" className="form-control" id="lastName" value={formData.lastName}
                                   onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Dodaj</button>
                    </form>

                </div>
            )
}

export default NewTeacherForm