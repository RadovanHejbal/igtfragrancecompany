import { Link } from "react-router-dom";

const NotFound = () => {
    return <div>
        The page doesnt exist, you can go back to <Link to={"/"}>Home</Link> page instead.
    </div>
}

export default NotFound;