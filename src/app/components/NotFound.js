import {useRouteError} from "react-router-dom";

const NotFound = () => {
    const err = useRouteError();
    return (
        <div className="p-5" style={{color: "white"}}>
            <h5>{err.data}</h5>
            <h4>{err.status}</h4>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default NotFound