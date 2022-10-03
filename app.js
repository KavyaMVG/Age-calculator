// const container;
// const error;
const dateOfBirth = document.getElementById("dob")
const text = document.querySelector("desc")
const year = document.getElementById("years")
const month = document.getElementById("months")
const day = document.getElementById("days")



dateOfBirth.addEventListener("change", (e) =>{
   const userDate = e.target.value;
    calcAge(userDate);
})

function calcAge(dob){ 
    dob = new Date(dob);
    const currDate  =  new Date();

    const currYear = currDate.getFullYear();
    const userBirthYear =  dob.getFullYear();

    const age = currYear - userBirthYear;
    displayAge(age);
}

function displayAge(years) {
    year.innerText = years
}

``