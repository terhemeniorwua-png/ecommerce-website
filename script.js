
// call html elements

// let logo = document.querySelector('.img')
let customer = document.querySelector('.customer');
let forgPass = document.querySelectorAll('.forgPass');
let passRecovery = document.querySelector('.passRecovery')
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

let pages = [customerLogin,adminLogin]

forgPass.addEventListener('click', ()=>{
  pages.forEach(page =>{
    if(page.classList.contains('block')){
        page.classList.remove('block');
    page.classList.add('hidden')
    }
  });

  passRecovery.classList.remove('hidden');
  passRecovery.classList.add('block')
})

// Dialog box
let dialogbox = document.querySelector('.dialog');
let dialogHeading = document.querySelector('.heading');
let dialogMssg = document.querySelector('.erromssg');
let cancelBtn = document.querySelector('.cancelBtn')

// saving categories in the dashbord
let categories = document.querySelector('.nav');

const fetch = async ()=>{
    try{

    let fetchApi =await fetch('https://dummyjson.com/products');

if(!fetchApi.ok){
    throw new Error('An error occured while fetching response')
}
let reponse = await fetchApi.json()
return reponse
} catch(e){
    dialogHeading.innerText = 'Error';
    dialogMssg.innerText = e.message;
    dialogbox.showModal()
    cancelBtn.close()
}
}

fetch()