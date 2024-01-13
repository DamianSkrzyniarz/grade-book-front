function StudentInfo(){
    return (
        <div className="container-sm">
            <table className="table table-striped-columns table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Imię</th>
                        <td>Jan</td>
                    </tr>
                    <tr>
                        <th scope="row">Nazwisko</th>
                        <td>Kowalski</td>
                    </tr>
                    <tr>
                        <th scope="row">Indeks</th>
                        <td>1234</td>
                    </tr>
                    <tr>
                        <th scope="row">Semestr</th>
                        <td>I</td>
                    </tr>
                    <tr>
                        <th scope="row">Kierunek</th>
                        <td>Informatyka</td>
                    </tr>
                </tbody>
            </table>
        </div>
)
}

export default StudentInfo