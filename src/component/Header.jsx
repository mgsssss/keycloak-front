import { NavLink } from "react-router-dom";
import UserService from "../services/UserService";

const logout = (url) => {
    const options = {
        redirectUri : url
    }
    UserService.doLogout(options)
}

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        
        <NavLink to ="/" className="navbar-brand">{props.config.header_text}</NavLink>

        <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <NavLink to="/" className="nav-link"aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="token" className="nav-link">Accsee Token</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="Info" className="nav-link">ID Token</NavLink>
            </li>
        </ul>
        <div>
            <a className="btn btn-outline-success me-3" href={props.config.account_url} target='_blank' rel='noreferrer'>내 정보</a>
            <button className="btn btn-outline-danger" type="submit" onClick={()=>logout(props.config.logout_url)}>로그 아웃</button>
            </div>
            <p className="navbar-text navbar-right" style={{ marginLeft: 15 }}>
                
            </p>
        </div>
    </div>
    </nav>
  );
};

export default Header;
