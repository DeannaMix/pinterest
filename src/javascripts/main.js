import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import navbar from './navbar';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  navbar.navbar();
  myNavbar.logoutEvent();
};

init();
