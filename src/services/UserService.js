import Keycloak from "keycloak-js";

const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;
const getIdToken = () => _kc.idToken;
const getLoadUserInfo = () => _kc.loadUserInfo();
const getloadUserProfile = () => _kc.loadUserProfile();
const getAccessToken = () => _kc.token;
const getuserInfo = () => _kc.userInfo;
const getcreateAccountUrl = () => _kc.createAccountUrl;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const getFirstname = () => _kc.tokenParsed?.given_name;
const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getIdToken,
  getAccessToken,
  updateToken,
  getUsername,
  getFirstname,
  hasRole,
  getLoadUserInfo,
  getloadUserProfile,
  getuserInfo,
  getcreateAccountUrl,
};

console.log(_kc)


export default UserService;
