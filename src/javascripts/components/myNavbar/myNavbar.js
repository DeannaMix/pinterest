import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#nav-logout-btn').on('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { logoutEvent };
