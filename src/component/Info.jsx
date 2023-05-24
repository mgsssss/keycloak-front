import UserService from "../services/UserService";
import jwt_decode from "jwt-decode"
import { JsonView, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const Info = () => {
    return (
        <div style={{
            padding: "20px"
        }}>
            {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(jwt_decode(UserService.getIdToken()), null, 2)}</pre> */}
            
            <JsonView data={jwt_decode(UserService.getIdToken())} shouldInitiallyExpand={(level) => true} style={darkStyles} />
          
        </div>
    );
}

export default Info;