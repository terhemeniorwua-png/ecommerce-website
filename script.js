
// call html elements

let logo = document.querySelector('.img')
let customer = document.querySelector('.customer');
let forgPass = document.querySelectorAll('.forgPass');
let passRecovery = document.querySelector('.passRecovery')
let landingPage = document.querySelector('.landingPage')
let admin = document.querySelector('.admin');
let customerLogin = document.querySelector('.customerLogin');
let adminLogin = document.querySelector('.adminLogin');
let customerSignUp = document.querySelector('.customerSignUp')




// logo.addEventListener('click', () => {
//     landingPage.classList.remove('hidden');
//     landingPage.classList.add('block');
// });


// Display of different logins

if(customer){
    customer.addEventListener('click', ()=>{
    if(customerLogin.classList.contains('hidden')){
        customerLogin.classList.remove('hidden')
        customerLogin.classList.add('block')
        landingPage.classList.add('hidden')
    }
})
}

if(admin){
    admin.addEventListener('click', ()=>{
    if(adminLogin.classList.contains('hidden')){
        adminLogin.classList.remove('hidden')
        adminLogin.classList.add('block')
        landingPage.classList.add('hidden')
    }
})
}

let pages = [customerLogin, adminLogin, customerSignUp];

if(forgPass){
    forgPass.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        pages.forEach(page => {
            page.classList.add('hidden');
            page.classList.remove('block');
        });

        passRecovery.classList.remove('hidden');
        passRecovery.classList.add('block');
    });
});
}

// Dialog box
let dialogbox = document.querySelector('.dialog');
let dialogHeading = document.querySelector('.heading');
let dialogMssg = document.querySelector('.erromssg');
let cancelBtn = document.querySelector('.cancelBtn');
let categories = document.querySelector('.nav');

// saving categories in the dashbord

const fetchProducts = async ()=>{
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
    dialogbox.close()
}
}

const uniqueProduct = new Set()

fetchProducts().then(res =>{
    console.log(res)

   res.products.forEach(product =>{
   if(!uniqueProduct.has(product.category)){
    uniqueProduct.add(product.category)
      categories.innerHTML += `
    <li class="bg-gray-200 p-2 rounded-xl px-5">${product.category}</li>
    `
   }
   })



  res.products.forEach(product=>{
    document.querySelector('.products').innerHTML += `  <div>
            <div class="">
                <img src="${product.images}" alt="">
            </div>
            <div class="pt-5 px-5 space-y-5">
                <h3 class="font-bold">${product.title}</h3>
                <div class="flex items-center gap-2">
                <i class="fa-regular fa-star text-amber-500"></i>
                <i class="fa-regular fa-star text-amber-500"></i>
                <i class="fa-regular fa-star text-amber-500"></i>
                <i class="fa-regular fa-star text-amber-500"></i>
                  <span>${product.rating}</span>
                </div>
              
                <p class="text-3xl"><b>${product.price}</b></p>
                <span></span>
                <button class="bg-blue-600 w-full rounded-2xl m-auto py-2 text-white font-bold">View Details</button>
            </div>
        </div>
        `
   })
})