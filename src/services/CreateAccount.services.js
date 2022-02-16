import {Endpoints} from '../utils/Api_Endpoints';
import axiosInstance from '../utils/axios';
export const SignUpStep1 = data => {
  console.log(data, 'hiii');
  const object = {
    first_name: data.first_name,
    last_name: data.last_name,
    form_step: data.form_step,
  };
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, object)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep2 = date => {
  const data = {
    dob: date,
    form_step: 2,
  };
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: data})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep3 = data => {
  const object = {
    gender_id: data,
    form_step: 3,
  };
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, object)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep4 = id => {
  const object = {
    want_to_see_id: id,
    form_step: 4,
  };
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: object})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep5 = images_attributes => {
  const formData = new FormData();
  formData.append('images_attributes', JSON.stringify(images_attributes));
  formData.append('form_step', 5);
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: formData})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep6 = data => {
  const object = {
    email: data.email,
    form_step: 6,
  };
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: object})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep7 = values => {
  const data = {
    about: values,
    form_step: 7,
  };
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: data})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep8 = data => {
  return axiosInstance
    .post(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: data})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep9 = data => {
  const formData = new FormData();
  data.forEach(x => formData.append('hobbiy_ids[]', x));
  formData.append('form_step', 9);
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: formData})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep10 = data => {
  const formData = new FormData();
  formData.append('sexual_orientation_ids[]', data);
  formData.append('form_step', 10);
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: formData})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const SignUpStep11 = data => {
  const formData = new FormData();
  return axiosInstance
    .put(`${Endpoints.CreateAccount.SIGNUP_STEPS}`, {user: formData})
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const GetGenders = () => {
  return axiosInstance
    .get(`${Endpoints.SexualOrientations.GET_GENDERS}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
