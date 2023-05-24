import UserService from "../services/UserService";

const Home = (props) => {
    console.log(props);
    const token = UserService.getIdToken()
    console.log("~!~~~~");
    console.log(UserService.getuserInfo());
    console.log(UserService.getLoadUserInfo());
    console.log("~!~~~~");
    return (
        <div className="bg-light p-5 rounded-lg m-3" >
            <p className="lead">Signed in as {UserService.getUsername()}</p>
            {UserService.getuserInfo}
            <div>
                
            </div>
        </div>
    );
}

export default Home;