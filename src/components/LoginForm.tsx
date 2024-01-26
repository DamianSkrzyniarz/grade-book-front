import {useState} from "react";
import Cookies from 'js-cookie';

interface Credentials{
    email: string
    password: string
}

function LoginForm(){

    const [formData, setFormData] = useState<Credentials>({email: "", password: ""})

    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const headers = new Headers()
        headers.set('Authorization', 'Basic ' + btoa(formData.email + ":" + formData.password));
        fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers: headers
        })
            .then(response => response.text())
            .then(data => {
                Cookies.set('token', data, {expires: 60})
                location.reload()
            })
    }
    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        setFormData({
            email: event.target.value,
            password: formData.password
        })
    }
    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>){
        setFormData({
            email: formData.email,
            password: event.target.value
        })
    }
    return (
        <div className="container">
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label htmlFor="inputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail1" value={formData.email} onChange={handleEmailChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword1" value={formData.password} onChange={handlePasswordChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default LoginForm