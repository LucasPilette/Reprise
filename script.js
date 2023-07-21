let nameError = document.getElementById('nameError');
let birthDateError = document.getElementById('birthDateError');
let zipCodeError = document.getElementById('zipCodeError');
let emailError = document.getElementById('emailError');


let nameRegexp = /^[a-z ,.'-]+$/i;
let birthDateRegexp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
let zipCodeRegexp = /^(?:0[1-9]|[1-8]\d|9[0-8 ])\d{3}$/;
let emailRegexp = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;



const dateObj = new Date();
let today = dateObj.toISOString().split('T')[0];



function validateName () {
    let firstName = document.myForm.firstName.value;
    if (firstName.length == 0){
        nameError.innerHTML = 'Veuillez entrer un nom';
        return false;
    } 
    if(!nameRegexp.test(firstName)){
        nameError.innerHTML = 'Veuillez entrer un nom valide';
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validateBirthDate () {
    let birthDate = document.myForm.birthDate.value;
    if(birthDate.length == 0 ){
        birthDateError.innerHTML = 'Veuillez renseigner une date';
        return false;
    }
    if(today<birthDate){
        birthDateError.innerHTML = 'Veuillez renseigner une date valide';
        return false;
    }
    if(!birthDateRegexp.test(birthDate)){
        birthDateError.innerHTML = 'Veuillez renseigner une date valide';
        return false; 
    }
    birthDateError.innerHTML = "";
    return true;

}

function validateZipCode () {
    let zipCode = document.myForm.zipCode.value;
    if (zipCode.length == 0){
        zipCodeError.innerHTML = 'Veuillez entrer un code postal';
        return false;
    } 
    if(!zipCodeRegexp.test(zipCode)){
        zipCodeError.innerHTML = 'Veuillez entrer un code postal valide';
        return false;
    }
    zipCodeError.innerHTML = "";
    return true;
}

function validateEmail () {
    let email = document.myForm.email.value;
    if (email.length == 0){
        emailError.innerHTML = 'Veuillez entrer un email';
        return false;
    } 
    if(!emailRegexp.test(email)){
        emailError.innerHTML = 'Veuillez entrer un email valide';
        return false;
    }
    emailError.innerHTML = "";
    return true;
}



function validateForm () {
    if(!validateName() || !validateBirthDate() || !validateZipCode() || !validateEmail){
        return false;
    } else {
        window.alert('Formulaire vérifié');
    }
}


