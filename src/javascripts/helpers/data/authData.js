import firebase from 'firebase/app';
import 'firebase/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').addClass('hide');
      $('#app').removeClass('hide');
      $('#nav-logout-btn').removeClass('hide');
    } else {
      $('#nav-logout-btn').addClass('hide');
      $('#auth').removeClass('hide');
      $('#app').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
