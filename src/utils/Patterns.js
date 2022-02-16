export default Patterns = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    upperCase: /[A-Z]/,
    lowerCase: /[a-z]/,
    numbers: /[0-9]/,
    specialChar: /[!@#\$%\^\&*\)\(+=._-]+$/,
    webUrl: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    phoneNumberWithCountryCode  : /^([6-9][0-9]{9})$/g
}