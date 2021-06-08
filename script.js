const firstname = document.getElementById('firtname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submot')
const divwrapper = document.querySelectorAll('.inpt')
const errorMsg = document.querySelectorAll('#error-msg')
submitBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    const emailel = email.value
    console.log(emailel)
    if(firstname.value == ''){
        divwrapper[0].classList.add('active')
        errorMsg[0].style.display = "block"
        firstname.classList.add('wrong')

    }
    if(lastname.value == '') {
        divwrapper[1].classList.add('active')
        errorMsg[1].style.display = "block"
        lastname.classList.add('wrong')
    }
    if( email.value == '' || !emailel.includes('@')) {
        divwrapper[2].classList.add('active')
        errorMsg[2].style.display = "block"
        email.classList.add('wrong')
    }
    if(password.value == '') {
        divwrapper[3].classList.add('active')
        errorMsg[3].style.display = "block"
        password.classList.add('wrong')
    }
})