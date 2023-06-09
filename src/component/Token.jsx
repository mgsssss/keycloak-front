import UserService from "../services/UserService";
import jwt_decode from "jwt-decode"
import { JsonView, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
const Token = () => {
    const token = UserService.getToken();
    const jwt = jwt_decode(token);
    console.log(jwt);

    return (
      <div style={{padding: "20px"}}>
        
          <JsonView data={jwt_decode(UserService.getAccessToken())} shouldInitiallyExpand={(level) => true} style={darkStyles} />
          
        
      </div>
    );
}

export default Token;