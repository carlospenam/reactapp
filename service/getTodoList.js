import axios from "axios";
import { useEffect, useState } from "react";

export function getTodoList () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dataTasks, setDataTasks] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
            .then(response => setDataTasks(response.data.todos))
    }, [])

    return {
        dataTasks
    }
}