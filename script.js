// INPUTS
const label = document.querySelectorAll('label')
const input = document.querySelectorAll('input')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
// OUTPUTS
const dayOutput = document.getElementById('day-out')
const monthOutput = document.getElementById('month-out')
const yearOutput = document.getElementById('year-out')
// ERROR MESSAGES
const error = document.querySelectorAll('small')
const errorMesseges = {  
                        error1:'This field is required', 
                        error2: 'Must be a valid day',
                        error3:'Must be a valid month', 
                        error4: 'Must be a valid date',
                        error5:'Must be in the past'
                    }
// BUTTON TO PRINT AGE
let button = document.querySelector('button')
button.addEventListener('click', () => {
        validateInputs()
        CalculateDate()
})

// FUNCTION THAT VALIDATE INPUT FIELDS
    function validateInputs() {
    if(day.value == ''){
        error[0].innerHTML = errorMesseges.error1
        input[0].style.border = '1px solid red'
        label[0].style.color = 'red'
        isValid = false             
    }
    else if(day.value < 1 || day.value > 31){
        error[0].innerHTML = errorMesseges.error2
        input[0].style.border = '1px solid red'
        label[0].style.color = 'red'
        isValid = false        
    }
    if(month.value == ''){
        error[1].innerHTML = errorMesseges.error1
        input[1].style.border = '1px solid red'
        label[1].style.color = 'red'
        isValid = false        
    }
    else if(month.value < 1 || month.value > 12){
        error[1].innerHTML = errorMesseges.error3
        input[1].style.border = '1px solid red'
        label[1].style.color = 'red'
        isValid = false        
    }
    const currentYear = new Date ()
    const years = currentYear.getFullYear()
    
    if(year.value == ''){
        error[2].innerHTML = errorMesseges.error1
        input[2].style.border = '1px solid red'
        label[2].style.color = 'red'
        isValid = false
    }
    else if(year.value > years){
        error[2].innerHTML = errorMesseges.error5
        input[2].style.border = '1px solid red'
        label[2].style.color = 'red'
        isValid = false        
    }
    
// VALIDATING MONTHS WITH ONLY 30 DAYS
    if (month.value == 11 &&  day.value > 30){
        error.innerHTML = errorMesseges.error4
        label.style.color = 'red'
        isValid = false
    }
    else if (month.value == 9 &&  day.value > 30){
        error.innerHTML = errorMesseges.error4
        label.style.color = 'red'
        isValid = false
    }
    else if (month.value == 7 &&  day.value > 30){
        error.innerHTML = errorMesseges.error4
        label.style.color = 'red'
        isValid = false
    }
    else if (month.value == 4 &&  day.value > 30){
        error.innerHTML = errorMesseges.error4
        label.style.color = 'red'
        isValid = false
    }
}
//FUNCTION THAT CALCULATE AGE
    let isValid = true
    function CalculateDate() {
    if (isValid) {
        let birthday = `${month.value}/${day.value}/${year.value}`;
        let birthdayObj = new Date(birthday)    
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        
        // DISPLAY AGE
        dayOutput.textContent= ageDay;
        monthOutput.textContent = ageMonth;
        yearOutput.textContent = ageYears;
    }
    }














