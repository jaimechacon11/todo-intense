import { useState } from "react";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Formulario = ({ todos, setTodos }) => {

    const [startDate, setStartDate] = useState(new Date());

    const date = new Date();
    const dateFormatted = format(date,"MM/dd/yyyy");
    const hourFormatted = format(date,"k:m:s");
    console.log(dateFormatted);
    console.log(hourFormatted);
    console.log(typeof(startDate));
    console.log(startDate.getDate());
    console.log(startDate.getMonth()+1);
    console.log(startDate.getFullYear());

    const [todo, setTodo] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        const fecha2 = startDate.getDate() + "/" + (startDate.getMonth()+1) + "/" + startDate.getFullYear();
        setTodos([{ id: nanoid(3), todo, completed: false,dateFormatted,hourFormatted,fecha2}, ...todos]);
        setTodo("");
    }

    return (
        <form onSubmit={handleSumbit}>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <DatePicker selected={startDate} dateFormat="MM/dd/yyyy" onChange={date => setStartDate(date)} />
            <button>Add</button>
        </form>
    )
}

export default Formulario
