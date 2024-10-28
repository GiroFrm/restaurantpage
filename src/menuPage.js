

export default function menuPage() {
  
    const menuContainer = document.createElement('div');
          menuContainer.classList.add('menu-container');
          
    const title = document.createElement('h1');
          title.innerText=`Our Menu`
          menuContainer.appendChild(title);
          
    const pizza = document.createElement('p');
          menuContainer.appendChild(pizza);
          pizza.innerText=' Pizza Margherita VO – San Marzano tomato, fior di latte, fresh basil 25'

    const pizza2 = document.createElement('p');
          menuContainer.appendChild(pizza2);
          pizza2.innerText=' Pizza Pomodoro VO – Yellow tomato passata, heirloom tomato, 27'

    const pizza3 = document.createElement('p');
          menuContainer.appendChild(pizza3);
          pizza3.innerText=' Pizza DOC – San Marzano tomato, fior di latte, fresh 31'

    const pizza4 = document.createElement('p');
          menuContainer.appendChild(pizza4);
          pizza4.innerText=' Pizza San Daniele – San Marzano tomato, fior di latte, 35'

    const pizza5 = document.createElement('p');
          menuContainer.appendChild(pizza5);
          pizza5.innerText=' Pizza Napoletana – San Marzano tomato, fior di latte, 27'      
          
    const pizza6 = document.createElement('p');
          menuContainer.appendChild(pizza6);
          pizza6.innerText=' Pizza Capricciosa Nuova – San Marzano tomato, fior di latte, 29'           
         return menuContainer;
         

}