import Messager from './Messager';
import Patterns from './Patterns';
export default Validator = {
  check: params => {
    return Object.keys(params).every(item => {
      if (params[item].length == 0) {
        Messager.toast(`Please enter ${item}`);
        return false;
      } else return true;
    });
  },
  checkPasswords: (password, confirmPassword) => {
    if (password.length < 6) {
      Messager.toast(`Please choose strong password`);
      return false;
    } else if (password != confirmPassword) {
      Messager.toast(`Password doesn't match with confirm password`);
      return false;
    }
    return true;
  },
  checkEmail: email => {
    if (!Patterns.email.test(email)) {
      Messager.toast('Email is not valid.');
      return false;
    }
    return true;
  },
  checkSingle: (params, name) => {
    if (!params) {
      Messager.toast(`Please enter ${name}`);
      return false;
    }
    return true;
  },
  checkPhoneNumber: phone => {
    if (!Patterns.phoneNumberWithCountryCode.test(phone)) {
      Messager.toast('Phone number is not valid');
      return false;
    }
    return true;
  },
};
