import SimpleToast from 'react-native-simple-toast';
export default AutoCompleteApi = {
  get:
    () =>
    (title, apiKey, showLoader = true) => {
      if (showLoader)
        // LoaderManager.show()
        // return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${title}&key=${apiKey}&components=country:SG`, {
        return fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${title}&key=${apiKey}`,
          {
            method: 'GET',
          },
        )
          .then(res => {
            // LoaderManager.hide()
            console.log(res);
            return res.json();
          })
          .then(resJson => {
            if (resJson.error_message) {
              SimpleToast.show(resJson.error_message);
            } else {
              return resJson;
            }
          })
          .catch(err => {
            // LoaderManager.hide()
            console.log(err);
          });
    },
};
