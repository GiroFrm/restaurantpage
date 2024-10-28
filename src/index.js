import homePage from "./homePage";
import aboutPage from "./aboutPage";
import contactPage from "./contactPage";
import menuPage from "./menuPage";

import "./style.css";

const bodyContainer  = document.getElementById('content');
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild(homePage())

   const bntHome = document.querySelector('#home-btn');
         bntHome.addEventListener('click', ()=>{
            bodyContainer.innerHTML = "";
            bodyContainer.appendChild(homePage())
         })
    const bntAbout = document.querySelector('#about-btn');
         bntAbout.addEventListener('click', ()=>{
            bodyContainer.innerHTML = "";
            bodyContainer.appendChild(aboutPage())
         })
    const bntContact = document.querySelector('#contact-btn');
         bntContact.addEventListener('click', ()=>{
            bodyContainer.innerHTML = "";
            bodyContainer.appendChild(contactPage())
         })

   const bntMenu = document.querySelector('#menu-btn');
         bntMenu.addEventListener('click', ()=>{
            bodyContainer.innerHTML = "";
            bodyContainer.appendChild(menuPage())
         })
  
  

   