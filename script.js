
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


    let html = ""

  res.products.forEach(product=>{
   
    // if(products)
    products.innerHTML  += `  <div>
            <div class="relative shadow-2xl">
                <img src="${product.thumbnail}" alt=""><span class="absolute top-0 left-3 text-2xl"><i class="fa-regular fa-heart"></i></span>
            </div>
            <div class="pt-5 px-5 space-y-5">
                <h3 class="title font-bold">${product.title}</h3>
                <div class="flex items-center gap-2">
                <i class="fa-regular fa-star text-amber-500"></i>
                <i class="fa-regular fa-star text-amber-500"></i>
                <i class="fa-regular fa-star text-amber-500"></i>
                <i class="fa-regular fa-star text-amber-500"></i>
                  <span>${product.rating}</span>
                </div>
              
                <p class="text-3xl inline pr-20"><b>$${product.price}</b></p>
                <span class="text-green-400">${product.availabilityStatus}</span>
                <button class="bg-blue-600 w-full rounded-2xl m-auto py-2 text-white font-bold"><a href="product.html">View Details</a></button>
            </div>
        </div>
        `
        // console.log(products)
   })
// products.innerHTML = html
});

let searchBtn = document.querySelector('.searchBtn');
let SearchInput = document.querySelector('.SearchInput');
// let productTitle = 


SearchInput.addEventListener('keyup', e =>{
    const inputValue = e.target.value.toLowerCase();
    let productNames = document.querySelectorAll('h3 .title')
    // productNames.forEach(product =>{
    //     if(product.toLowerCase().includes(inputValue)){
    //         console.log('Right')
    //     }
    // })
    console.log(productNames.textContent.toLowerCase())
})
    





//     const inputValue = SearchInput.value.toLowerCase;

//     Array.from(productTitle).forEach(product=>{

//          if(inputValue !== product[productTitle].toLowerCase){
//         console.log('Nothing match')
//     } else{
//         console.log('product')
//     }
//     })

//  }
// // searchBtn.addEventListener('click', searchFetched)




//     let value = SearchInput.value.trim()
//     if(value === '')return;

//     try{
//         let fetchRequest = await fetch(`https://dummyjson.com/products/search?=${value}`);
//         let result = await fetchRequest.json()
//       displayProducts(result.product)

//     } catch(e){
//     dialogHeading.innerText = 'Error';
//     dialogMssg.innerText = e.message;
//     dialogbox.showModal()
    
//      cancelBtn.addEventListener('click', ()=>{

//     dialogbox.close()
//     })
// }
    
// }


// function displayProducts(prod) {
//     products.innerHTML = "";

//     if (prod.length === 0) {
//         productsContainer.innerHTML = "<h2>No product found.</h2>";
//         return;
//     }

//     prod.forEach(product => {
//         products.innerHTML += `
//             <div class="card">
//                 <img src="${product.thumbnail}" width="150">
//                 <h3>${product.title}</h3>
//                 <p>$${product.price}</p>
//             </div>
//         `;
//     });
// }








//  searchBtn.addEventListener('click', searchFetched)

// const pattern ={
//     email: /^[\da-z]*@[a-z]{2,12}\.[a-z]{2,8}\.[a-z]{2,8}?$/,
//     password: /^[\w#-\$]{8,12}$/
// }

//password must be 8-12 charcters long, (#,-,_,$) are also allowed



export{fetchProducts}
  