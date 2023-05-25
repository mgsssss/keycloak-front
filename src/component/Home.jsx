import { useEffect, useState } from "react";
import UserService from "../services/UserService";

const Home = (props) => {
    
    const [userJson, SetuserJson] = useState([]);
    const token = UserService.getIdToken();

    let userinfo = UserService.getLoadUserInfo();

    let json_data;
    var tifOptions = [];
    useEffect(() => {
        // SetuserJson(UserService.getLoadUserInfo())
        let userprofile = UserService.getLoadUserInfo();
        userprofile.then(function (userData) {
            const data = JSON.stringify(userData);
            json_data = JSON.parse(data);

            Object.keys(json_data).forEach(function (key) {
                tifOptions.push([key, json_data[key]]);
            });

            SetuserJson(tifOptions);
            console.log("aaa", userJson);
            const getEntries = Object.entries(json_data).map((entrie, idx) => {
                // SetuserJson([...entrie]);
                // return console.log(entrie, idx);
            });
            // SetuserJson(JSON.stringify(userData));
        });
    }, []);

    return (
        <div className="bg-light p-5 rounded-lg m-3">
            <p className="lead">Signed in as {UserService.getUsername()}</p>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">value</th>
                    </tr>
                </thead>
                <tbody>
                    {userJson.map((country, key) => {
                        return (
                            <tr key={key}>
                                <th scope="row">{country[0]}</th>
                                <td>{country[1]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
