import { CSVLink } from "react-csv"

const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
];

const data = [
    {
        firstName: "Naruto",
        lastName: "Uzumaki",
        email: "dasdas@gmail.com"
    },
    {
        firstName: "Albert",
        lastName: "Lanza",
        email: "ladskdaskdma@gmail.com"
    },
    {
        firstName: "Maria",
        lastName: "Perez",
        email: "maria@gmail.com"
    }
]

const JsonToCsvConverter = () => {
  return (
    <>

        <CSVLink data={data} headers={headers} filename="data.csv">
            <button className='btn btn-secondary'></button>
        </CSVLink>

    </>
  )
}

export default JsonToCsvConverter