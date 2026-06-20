// XEP3AJ - Site JS
document.addEventListener('DOMContentLoaded',()=>{
  // Mobile menu
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle){toggle.addEventListener('click',()=>links.classList.toggle('open'))}

  // FAQ accordions
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q=item.querySelector('.faq-q');
    if(q)q.addEventListener('click',()=>item.classList.toggle('open'));
  });

  // Reveal on scroll
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Newsletter
  document.querySelectorAll('form[data-newsletter]').forEach(f=>{
    f.addEventListener('submit',e=>{e.preventDefault();alert('Thank you for subscribing!');f.reset();});
  });
  // Contact form
  document.querySelectorAll('form[data-contact]').forEach(f=>{
    f.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! We will contact you shortly.');f.reset();});
  });
});
