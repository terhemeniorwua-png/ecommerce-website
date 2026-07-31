
import { fetchProducts } from "./script.js";

const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');

  // admin parts

  // let searchInput = document.querySelector('.SearchInput');
let adminPdd = document.querySelectorAll('.adminPddName');
let adminSearchBtn = document.querySelector('.adminMagLence');
 let adminProduct = document.querySelector('.adminPdd');


// Dialog box
let dialogbox = document.querySelector('.dialog');
let dialogHeading = document.querySelector('.heading');
let dialogMssg = document.querySelector('.erromssg');
let cancelBtn = document.querySelector('.cancelBtn');
 
// close modal
    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
    dialogbox.close()
  })



// Admin products display
let deleteProd = document.querySelectorAll('.deleteProd');
// let modalActionBtn = document.querySelector('.actionBtn')
let modalHeader = document.querySelector('.modalHeader')
let productAddModal = document.querySelector('.addProductModal');
let deletebtn = document.querySelector('.deleteProdt')
let deletDialog =   document.querySelector('.deletDialog')


    fetchProducts().then( res =>{
      let html = ''
      res.products.forEach(product=>{

          html +=`
        <tr class="prod">
                  <td class="py-3 px-6 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg"><img src="${product.thumbnail}" alt="${product.title}"></div>
                    <span class="font-medium text-slate-700 title">${product.title}</span>
                  </td>
                  <td class="py-3 px-6 text-slate-600">$${product.price}</td>
                  <td class="py-3 px-6 text-slate-600 adminPddName">${product.category}</td>
                  <td class="py-3 px-6 text-slate-600">${product.stock}</td>
                  <td class="py-3 px-6">
                    <div class="flex items-center gap-2">
                      <button class="w-7 h-7 rounded bg-blue-500 text-white flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
                      <button class="update w-7 h-7 rounded bg-amber-500 text-white flex items-center justify-center" data-id=${product.id}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
                      <button class="deleteProd w-7 h-7 rounded bg-red-500 text-white flex items-center justify-center" data-id=${product.id}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
                    </div>
                  </td>
                </tr>

      `
    })

    document.querySelector('.totalProduct').innerText = res.products.length;
    document.querySelector('.totalCategories').innerText = res.products.length
 adminProduct.innerHTML += html
  })

  

 document.querySelector('.canceModal').addEventListener('click', ()=>{
    document.querySelector('.deletDialog').close()
  })
 let updatePro = document.querySelector('.update')




// Search product

const searchProduct =  e =>{
    const inputValue = e.target.value.toLowerCase();

    let productNames = document.querySelectorAll(' .title')

    productNames.forEach(product =>{
        const curItem = product.closest('.prod')
        if(product.innerText.toLowerCase().includes(inputValue)){
            
            curItem.style.display = 'block'
        } else{
            curItem.style.display = 'none'
        }
    })
}

let Search = document.querySelector('.Search')
Search.addEventListener('keyup', searchProduct)







let addProduct = document.querySelectorAll('.addProduct');
let cancelAdd = document.querySelector('.cancelAdd');
let saveProduct = document.querySelector('.saveProduct');
let productInfo = document.querySelectorAll('.productInfo')


addProduct.forEach(btn =>{
  btn.addEventListener('click', ()=>{
     productAddModal.classList.remove("hidden");
    }
)
})

cancelAdd.addEventListener('click', ()=>{
    productAddModal.classList.add("hidden");
})




// Function to Add or modify a product

     async function addProduc(method, elements, location) {
          try{
              let add = await fetch(`https://dummyjson.com/products/${location}`,{
            method: String(method),
             headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(elements)
        })

        let res = await add.json()
        
        if(!add.ok){
          throw new Error('Failed')
        }
            return res
          }catch(e){
                dialogHeading.innerText = 'Error!';
                dialogMssg.innerText = e.message;
                dialogbox.showModal()
    
                cancelBtn.addEventListener('click', ()=>{

    dialogbox.close()
          }
        ) }
}
    
// addProduc('POST')

    let select = document.querySelector('.select')
    let price = document.querySelector('.price');
    let title = document.querySelector('.title');
    let description = document.querySelector('.description');
    let imgurl = document.querySelector('.imgurl')

 
    
// function to add a product
const addProd = async (id, e)=>{
  e.preventDefault()
 
    let hasEmptyField = false;

    productInfo.forEach(input => {
        if (input.value.trim() === "") {
            hasEmptyField = true;
        }
    });

    if (hasEmptyField) {
        dialogHeading.innerText = "Error";
        dialogMssg.innerText = "Fill in all the fields";
        dialogbox.showModal();

        setTimeout(() => {
            dialogbox.close();
        }, 2000);

        return;
    } else{

   let product ={
        title:title.value.trim(),
        price: Number(price.value.trim()),
        category:select.value.trim(),
        description:description.value.trim(),
        imgurl:imgurl.value.trim()
    }
   
   await addProduc('POST',product, 'add')
      }
       productInfo.forEach(input => {
        input.value = ''
    });
}

saveProduct.addEventListener('click', addProd)





    // Delet a product

  async function removeProduct(id) {
            try{
                let fetPr = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE'
            })

             const data = await fetPr.json();
             if(!fetPr.ok){
              throw new Error('Failed to delete')
             }
          return data
    //  )   
    } catch(e){
       dialogHeading.innerText = 'Error!';
    dialogMssg.innerText = e.message;
    dialogbox.showModal()
    saveProduct.innerText = 'Update Product'
   
    }
}

  // delete and update eventsLinstener

  let productToDelete = null;

  adminProduct.addEventListener('click', (e)=>{
// Delete admin's product eventlistener
    let btn = e.target.closest('.deleteProd')
    let btn2 = e.target.closest('.update')
    // if(!btn || !btn2) return;
     if(btn){
       productToDelete = btn.dataset.id

    deletDialog.showModal()
     } if(btn2){

      // update a product

      productToDelete = btn2.dataset.id;
      modalHeader.innerText = 'Edit Product';
     
      if(productAddModal.classList.contains('hidden')){
        productAddModal.classList.remove('hidden');
        // productAddModal.\
      }
       
         }
    
  })


  // function to update a product


const updateProd = async (id)=>{
  e.preventDefault()
 
    let hasEmptyField = false;

    productInfo.forEach(input => {
        if (input.value.trim() === "") {
            hasEmptyField = true;
        }
    });

    if (hasEmptyField) {
        dialogHeading.innerText = "Error";
        dialogMssg.innerText = "Fill in all the fields";
        dialogbox.showModal();

        setTimeout(() => {
            dialogbox.close();
        }, 2000);

        return;
    } else{

   
   await addProduc('PUT',product, id)
      }
       productInfo.forEach(input => {
        input.value = ''
    });
}

  // if(updatePro)
saveProduct.addEventListener('click', async ()=>{

        productAddModal.classList.add('hidden')
    

  await updateProd(productToDelete)

})




// delete product

   deletebtn.addEventListener('click', async ()=>{

        deletDialog.close()

        await removeProduct(productToDelete)

            dialogHeading.innerText = 'Success!';
                 dialogMssg.innerText = "Delete product successful";
                    dialogbox.showModal()
                    
                    setTimeout(()=>{
                      dialogbox.close()
                    }, 2000)  
})




// side bar annimations

  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }
  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }


     openBtn.addEventListener('click', openSidebar);


    closeBtn.addEventListener('click', closeSidebar);

overlay.addEventListener('click', closeSidebar);




