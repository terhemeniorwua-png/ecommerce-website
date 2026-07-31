
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
let haveAcctn = document.querySelector('.haveAcctn')
let custSignUp = document.querySelector('.custSignUp')




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
        landingPage.classList.add('hidden');
    }
})
}

if(haveAcctn){
    haveAcctn.addEventListener('click', ()=>{
    //  if(customerSignUp.classList.contains('hidden')){
        customerSignUp.classList.remove('block');
        customerSignUp.classList.add('hidden');
        customerLogin.classList.remove('hidden');
        customerLogin.classList.add('block')
    // }
})
}

if(custSignUp){
    custSignUp.addEventListener('click', ()=>{
    if(customerSignUp.classList.contains('hidden')){
        customerSignUp.classList.remove('hidden');
        customer.classList.add('block');
        customerLogin.classList.remove('block');
        customerLogin.classList.add('hidden')
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

 export const fetchProducts = async ()=>{
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
    cancelBtn.addEventListener('click', ()=>{

    dialogbox.close()
    })
}
}


//adding nav bar

let products = document.querySelector('.products')

const uniqueProduct = new Set()


fetchProducts().then(res =>{

   res.products.forEach(product =>{
   if(!uniqueProduct.has(product.category)){
    uniqueProduct.add(product.category)
    if(categories)
      categories.innerHTML += `
    <li class="bg-gray-200 p-2 rounded-xl px-5">${product.category}</li>
    `
   }
   })


  

  res.products.forEach(product=>{
   
    // if(products)
    products.innerHTML  += `  <div class="productItem">
            <div class="relative shadow-2xl">
                <img src="${product.thumbnail}" alt=""><span class="absolute top-0 left-3 text-2xl"><i class="fa-regular fa-heart"></i></span>
            </div>
            <div class="pt-5 px-5 space-y-5">
                <h3 class="title font-bold">${product.title}</h3>
                <div class="flex items-center gap-2">
                <i class="fa-regular fa-star"></i>
                  <span>${product.rating}</span>
                </div>
              
                <p class="text-3xl inline pr-20"><b>$${product.price}</b></p>
                <span class="text-green-400">${product.availabilityStatus}</span>
               <div class="flex itmes-center justify-center gap-1">
     <button
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex-1 transition">

            <i class="fa-solid fa-cart-shopping"></i>

            Add To Cart

        </button>

        <button
        class="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-4 rounded-xl flex-1 transition">

            Buy Now

        </button>
               </div>
            </div>
        </div>
        `

        //  <button data-id=${product.id} class="detailsBtn bg-blue-600 w-full rounded-2xl m-auto py-2 text-white font-bold"><a href="#">View Details</a></button>
         
   })
// products.innerHTML = html
});

// let productItem = document.querySelectorAll('.productItem');
let SearchInput = document.querySelector('.SearchInput');
let hero = document.querySelector('.hero')

// let productTitle = 

const searchProduct =  e =>{
    const inputValue = e.target.value.toLowerCase();

    let productNames = document.querySelectorAll(' .title')

    productNames.forEach(product =>{
        const curItem = product.closest('.productItem')
        if(product.innerText.toLowerCase().includes(inputValue)){
           hero.style.display = ''
            
            curItem.style.display = 'block'
        } else{
            curItem.style.display = 'none'
             hero.style.display = 'none'
        }
    })
   
}
if(SearchInput)

SearchInput.addEventListener('keyup', searchProduct)
  

// View Details function

let clickedId= null

if(products)
products.addEventListener('click', e=>{

    const btnClicked = e.target.closest('.products');
    // const curItem = e.closest('.productItem');

    if(!btnClicked) return;
     clickedId = btnClicked.dataset.id;
     console.log(clickedId)
    
})









  