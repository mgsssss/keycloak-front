import UserService from "../services/UserService";
import jwtDecode from "jwt-decode";

const Home = (props) => {
    console.log(props);
    const token = UserService.getIdToken()
    console.log("~!~~~~");
    console.log(UserService.getuserInfo());
    console.log("~!~~~~");
    return (
        <div className="bg-light p-5 rounded-lg m-3">
            <p className="lead">Signed in as {UserService.getUsername()}</p>
            <div>
                
                
            </div>
        </div>
    );
}

export default Home;