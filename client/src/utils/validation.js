function passwordConfirm(password, passwordConfirm) {
    if (passwordConfirm !== password || passwordConfirm.length < 8) {
        return false;
    } else {
        return true;
    }
}

function email(email) {
    let regExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
    if (!regExp.test(email)) {
        return false;
    } else {
        return true;
    }
}


function name(name) {
    let regExp = /^[a-z 0-9,.'-]+$/i

    if (!regExp.test(name) || name.length < 3 || name.length > 50) {
        return false;
    } else {
        return true;
    }
}

function password(password) {
    let regExp = /^(?=.*?[A-Z a-z])(?=.*?[0-9])(?=.*?[#?!$%^&*-]).{8,}/
    if (!regExp.test(password) || password.length < 8) {
        return false;
    } else {
        return true;
    }
}

function phone(phone) {
    let regExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    if (!regExp.test(phone)) {
        return false;
    } else {
        return true;
    }
}

function urlCheck(url) {
    let urlExp = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    if (!urlExp.test(url)) {
        return false;
    } else {
        return true;
    }
}

function urlImageCheck(url) {
    let urlExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g
    if (!urlExp.test(url)) {
        return false;
    } else {
        return true;
    }
}



export { passwordConfirm, email, name, password, phone, urlCheck, urlImageCheck }
    
   
    
  
