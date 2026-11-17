
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.nav-links');
 if(toggle&&nav) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.nav-links a').forEach(a=>{
   if(a.getAttribute('href')===current) a.classList.add('active');
 });
});
