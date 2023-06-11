import { EditForm } from "./EditForm";
import {UserForm} from "./UserForm"
import { useLocation } from "react-router-dom";

export const AddForm = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("_id");
    return (
        <>
        {
            id ? 
            (<>
                <EditForm/>
            </>):(
            <>
            <h2>Register your details</h2>
            <div className="form">
                <UserForm user={{}} url={`http://localhost:8000/form`}/>
            </div>
            </>)
        }
        </>
    )
}