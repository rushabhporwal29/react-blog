import { Link } from "react-router-dom";

const Error404 = () => {
    return ( 
        <div className="Error404">
            <h1>Oops! Page Not Found </h1>
            <Link to="/">Back To Home Page </Link>
        </div>
     );
}
 
export default Error404;