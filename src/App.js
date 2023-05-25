import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Token from "./component/Token";
import Info from "./component/Info";
import Welcome from "./component/Welcome";
import UserService from "./services/UserService";
// import RolesRoute from "./component/RolesRoute";
// import SecretBooks from "./component/SecretBooks";
import NoMatch from "./component/NoMatch";
import jwt_decode from "jwt-decode";
import { setting } from './setting';

// import { Button, Nav } from "react-bootstrap"; // 꼭 import를 해와야한다

const App= ()=> {
  const isLogin = UserService.isLoggedIn();

  const getRole = () => {
    if ( isLogin ) {
      const token = UserService.getIdToken();
      const jwt = jwt_decode(token);
      const role = jwt['userRole'];
      return role;
    } else {
      return "";
    }
  }
  
  return (
    <BrowserRouter>
      <div className="container" style={{backgroundColor: setting.backgroundColor}}>
        {isLogin && <Header config={setting}/>}
        <Routes>
          {!isLogin && <Route path="/" element={<Welcome />}/>}
          {isLogin && <Route path="/" element={<Home userRole = {getRole} />}/>}
          {isLogin && <Route path="/token" element={<Token />}/>}
          {isLogin && <Route path="/info" element={<Info />}/>}
          <Route path="*" element={<NoMatch />} />
          
          {/* <RolesRoute path="/secret" roles={['admin']}>
            <SecretBooks/>
          </RolesRoute> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
