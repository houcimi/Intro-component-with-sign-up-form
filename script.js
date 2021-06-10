const firstname = document.getElementById('firtname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submot')
const errorImg = document.querySelectorAll('#error-img')
const errorMsg = document.querySelectorAll('#error-msg')
const formControlls = document.querySelectorAll('.inpt')

submitBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    const emailel = email.value
    console.log(emailel)
    if(firstname.value == ''){
        errorImg[0].style.opacity = 1
        firstname.classList.add('wrong')
        firstname.parentNode.querySelector('span').innerText = "First Name is required"
    }
    if(lastname.value == '') {
        errorImg[1].style.opacity = 1
        lastname.classList.add('wrong')
        lastname.parentNode.querySelector('span').innerText = "Last Name is required"
    }
    if( email.value == '' || !emailel.includes('@')) {
        errorImg[2].style.opacity = 1
        email.classList.add('wrong')
        email.parentNode.querySelector('span').innerText = "This Does not look like an email"
    }
    if(password.value == '') {
        errorImg[3].style.opacity = 1
        password.classList.add('wrong')
        password.parentNode.querySelector('span').innerText = "Password is required"
    }
})