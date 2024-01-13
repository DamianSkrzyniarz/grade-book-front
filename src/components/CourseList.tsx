function CourseList() {
    return (
        <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">Przedmiot</th>
                    <th scope="col">Prowadzący</th>
                    <th scope="col">ECTS</th>
                    <th scope="col">Ocena</th>
                    <th scope="col">Termin</th>
                    <th scope="col">Data wystawienia</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Fizyka</td>
                    <td>Mark Burger</td>
                    <td>4</td>
                    <td>5</td>
                    <td>1</td>
                    <td>01.03.2024</td>
                </tr>
                <tr>
                    <td>Fizyka</td>
                    <td>Mark Burger</td>
                    <td>4</td>
                    <td>5</td>
                    <td>1</td>
                    <td>01.03.2024</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CourseList