const form = document.getElementsByTagName('form')[0].addEventListener('submit',(e)=>{
    e.preventDefault()
})
const msgError = {
    first :'First Name cannot be empty',
    last : 'Last Name cannot be empty',
    email:'Looks like this is not an email',
    email2:'Email Address cannot be empty',
    password:'Password cannot be empty'
}

const $ = (selector) => document.querySelector(selector)

const validateForm = (form) =>{
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let validate = true
    $('.error-first-name').innerHTML = ''
    $('.first-name > input').style = ''
    $('.icon-first').style = ''

    $('.error-last-name').innerHTML = ''
    $('.last-name > input').style = ''
    $('.icon-last').style = ''

    $('.error-email').innerHTML = '' 
    $('.email > input').style = ''
    $('.icon-email').style = ''

    $('.error-password').innerHTML = '' 
    $('.password > input').style = ''
    $('.icon-password').style = ''


    if(form['first-name'].value===''){
        $('.error-first-name').innerHTML = msgError.first
        $('.first-name > input').style = 'border: 1.9px solid var(--Red)'
        $('.icon-first').style = 'display:inherit'
        validate = false
    }
  

    if(form['last-name'].value===''){
        $('.error-last-name').innerHTML = msgError.last
        $('.last-name > input').style = 'border: 1.9px solid var(--Red)'
        $('.icon-last').style = 'display:inherit'
        validate = false
    }   
   

    if(!regex.test(form.email.value)){
        $('.error-email').innerHTML = msgError.email
        $('.email > input').style = 'border: 1.9px solid var(--Red); color:var(--Red)'
        $('.icon-email').style = 'display:inherit'
        validate = false
       
    }
  
    if(form.email.value===''){
        $('.error-email').innerHTML = msgError.email2
        $('.email > input').style = 'border: 1.9px solid var(--Red)'
        $('.icon-email').style = 'display:inherit'
        validate = false  
    }
   

    if(form.password.value===''){
        $('.error-password').innerHTML = msgError.password
        $('.password > input').style = 'border: 1.9px solid var(--Red)'
        $('.icon-password').style = 'display:inherit'
        validate = false
    }
   
    return !validate
}
