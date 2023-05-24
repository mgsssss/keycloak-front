import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../services/UserService";
const Welcome = () => {
    return (
        <div className="bg-light p-5 rounded-lg m-3">
            <h1>앗뇽 !</h1>
            <p className="lead">로그인을 해야 서비스 이용이 가능해 !</p>
            <p>
                <button className="btn btn-lg btn-warning" onClick={()=> UserService.doLogin()}>로그인</button>
            </p>
        </div>
    );
}

export default Welcome;