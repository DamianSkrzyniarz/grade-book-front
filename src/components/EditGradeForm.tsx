import React, {useState} from "react";
import Cookies from 'js-cookie';
import {Signup} from "../interfaces/Signup.ts";
//import {useParams} from "react-router-dom";


function EditGradeForm(){

    //const {id} = useParams()
    const [formData, setFormData] = useState<Signup>({student: {}, course: {teacher: {}}})

    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const headers = new Headers()
        headers.set('Authorization', 'Bearer ' + Cookies.get('token'));
        headers.append('Content-Type', "application/json")
        fetch(`http://localhost:8080/signup/edit`, {
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
                    <label htmlFor="index" className="form-label">Ocena</label>
                    <input type="number" className="form-control" id="index" value={formData.grade}
                           onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="index" className="form-label">Termin</label>
                    <input type="number" className="form-control" id="index" value={formData.attempt}
                           onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Dodaj</button>
            </form>

        </div>
    )
}

export default EditGradeForm