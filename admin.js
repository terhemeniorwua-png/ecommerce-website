
import { fetchProducts } from "./script.js";

const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');

  // admin parts

  let seach = document.querySelector('.Search');
let adminPdd = document.querySelectorAll('.adminPddName');
let adminSearchBtn = document.querySelector('.adminMagLence');
 let searched = document.querySelector('.adminPdd');



   fetchProducts().then( res =>{
    res.products.forEach(product=>{
console.log(product.images[0])
        searched.innerHTML +=`
       <tr>
                <td class="py-3 px-6 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg"><img src="${product.images[0]}" alt="${product.title}"></div>
                  <span class="font-medium text-slate-700">${product.title}</span>
                </td>
                <td class="py-3 px-6 text-slate-600">$${product.price}</td>
                <td class="py-3 px-6 text-slate-600 adminPddName">${product.category}</td>
                <td class="py-3 px-6 text-slate-600">${product.stock}</td>
                <td class="py-3 px-6">
                  <div class="flex items-center gap-2">
                    <button class="w-7 h-7 rounded bg-blue-500 text-white flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
                    <button class="w-7 h-7 rounded bg-amber-500 text-white flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
                    <button class="w-7 h-7 rounded bg-red-500 text-white flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
                  </div>
                </td>
              </tr>

    `
    
   })
})



  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }
  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }

 if(openBtn){
     openBtn.addEventListener('click', openSidebar);
 }
  if(closeBtn){
    closeBtn.addEventListener('click', closeSidebar);
  }
  if(overlay){overlay.addEventListener('click', closeSidebar);}

// Search product

if(adminSearchBtn){
    adminSearchBtn.addEventListener('click', (e)=>{
        e.preventDefault();

        adminPdd.forEach(product =>{
            if(product === seach.value){

                searched.innerHTML = `
                 <tr>
                <td class="py-3 px-6 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg">${product.images}</div>
                  <span class="font-medium text-slate-700">${product.title}</span>
                </td>
                <td class="py-3 px-6 text-slate-600">${product.price}</td>
                <td class="py-3 px-6 text-slate-600 adminPddName">${product.category}</td>
                <td class="py-3 px-6 text-slate-600">${product.stock}</td>
                <td class="py-3 px-6">
                  <div class="flex items-center gap-2">
                    <button class="w-7 h-7 rounded bg-blue-500 text-white flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
                    <button class="w-7 h-7 rounded bg-amber-500 text-white flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
                    <button class="w-7 h-7 rounded bg-red-500 text-white flex items-center justify-center"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
                  </div>
                </td>
              </tr>

                `
            }
        })
      
    })
}