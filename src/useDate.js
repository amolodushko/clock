import {useEffect, useState} from "react";

const useDate = (timeout = 1000)=> {
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        const i = setInterval(()=>{
            setDate(new Date());
        }, timeout);

        return ()=> clearInterval(i)
    },[timeout]);

    return [date.getHours(), date.getMinutes(), date.getSeconds()];
}

export default useDate;