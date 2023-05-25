import { useState } from "react";
import UserService from "../services/UserService";

const Home = (props) => {
    const [ userJson, SetuserJson ] = useState("");
    const token = UserService.getIdToken()
    console.log("~!~~~~");
    console.log(UserService.getuserInfo());
    let userinfo = UserService.getLoadUserInfo();
    userinfo.then(function(userData) {
        console.log(JSON.stringify(userData));
        SetuserJson(JSON.stringify(userData));
    });
    
    let userprofile = UserService.getloadUserProfile();
    userprofile.then(function(userData) {
        console.log(JSON.stringify(userData));
        // SetuserJson(JSON.stringify(userData));
    });
    console.log(userinfo);
    console.log("~!~~~~");
    return (
        <div className="bg-light p-5 rounded-lg m-3" >
            <p className="lead">Signed in as {UserService.getUsername()}</p>
            <div>
                { userJson }
            </div>
        </div>
    );
}

export default Home;