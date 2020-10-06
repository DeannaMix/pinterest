import firebase from 'firebase/app';
import 'firebase/auth';
import app from '../../components/pinterestApp/app';
import userData from './userData';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData.getUser(user);
      $('#auth').addClass('hide');
      $('#app').removeClass('hide');
      $('#nav-logout-btn').removeClass('hide');
      app.buildBoards();
    } else {
      $('#nav-logout-btn').addClass('hide');
      $('#auth').removeClass('hide');
      $('#app').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
