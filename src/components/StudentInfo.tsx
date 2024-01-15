import React, {useState} from "react";

interface studentProps {
    id: number
}

interface Student{
    firstName: string
    lastName: string
    index: number
    semester: string
    major: string
}

function StudentInfo(props: studentProps){

    const [studentData, setStudentData] = useState<Student>([])


    React.useEffect(() => {
        fetch(`http://localhost:8080/students/id/${props.id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
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