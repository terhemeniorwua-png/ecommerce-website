
// call html elements

// let logo = document.querySelector('.img')
let customer = document.querySelector('.customer');
let landingPage = document.querySelector('.landingPage')
let admin = document.querySelector('.admin');
let customerLogin = document.querySelector('.customerLogin');
let adminLogin = document.querySelector('.adminLogin');
let customerSignUp = document.querySelector('.customerSignUp')

// logo.addEventListener('click', ()=>{
//     if(!landingPage){
//        !landingPage.classList.remove('block')
//        !landingPage.classList.add('hidden')
//        landingPage.classList.remove('hidden')
//        landingPage.classList.add('block')
//     }
// })

// Display of different logins

customer.addEventListener('click', ()=>{
    if(customerLogin.classList.contains('hidden')){
        customerLogin.classList.remove('hidden')
        customerLogin.classList.add('block')
        landingPage.classList.add('hidden')
    }
})

admin.addEventListener('click', ()=>{
    if(adminLogin.classList.contains('hidden')){
        adminLogin.classList.remove('hidden')
        adminLogin.classList.add('block')
        landingPage.classList.add('hidden')
    }
})