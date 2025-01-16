import { useEffect , useState } from "react";
// custom hook

function useCurrenyInfo(curreny) {
    const[data , setdata] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curreny}.json`)
        .then((res) => res.json()) // coverting data into json format
        .then((res) => setdata(res[curreny])) // passing array because we dont know extact value that user will pass
        console.log(data)

    } , [curreny])
    console.log(data)
    return data
} 

export default useCurrenyInfo