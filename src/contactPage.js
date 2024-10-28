

export default function contactPage() {

    const container = document.createElement('div');
    
    const title = document.createElement('h1');
    const phone = document.createElement('h2');
    const email = document.createElement('h4');

          title.innerText = 'Contact Us'
          phone.innerText = '+6123434566'
          email.innerText = 'pizzaz@gmal.com'

    container.classList.add("contact-container");
    container.appendChild(title);
    container.appendChild(phone);
    container.appendChild(email);

   return container;
}