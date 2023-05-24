import PropTypes from 'prop-types'
import { Routes } from "react-router-dom";
import UserService from "../services/UserService";
import NotAllowed from "./NotAllowed";

const RolesRoute = ({ roles, children, ...rest }) => (
  <Routes {...rest}>
    {UserService.hasRole(roles) ? children : <NotAllowed/>}
  </Routes>
)

RolesRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RolesRoute
