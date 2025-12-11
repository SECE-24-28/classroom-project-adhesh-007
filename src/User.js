import { useParams } from "react-router-dom"
export default function User(){
    const data= useParams()
    return(
        <>
        
        <h1>im from user {data.id}</h1>
        </>
    )
}

