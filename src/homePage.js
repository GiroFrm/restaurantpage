import heroImg from './images/pizza.jpg';

export default function homePage() {
   
    const heroContainer = document.createElement('div');
          heroContainer.classList.add("article");
    // create div 
     const heroSection  = document.createElement("div");
           heroSection.classList.add("hero-section", "flex-group", "wrapper");
    
    
     const title = document.createElement('h1');
           title.innerText="Best Pizza in town"
          
     const description = document.createElement('p');
          description.innerText=`Welcome!
        Criniti's serves the best-woodfired pizza, ribs, pasta, seafood, 
        grilled fish, bruschetta, risotto, and more for lunch and dinner.`
    
     const hero_img = document.createElement('img');
        hero_img.classList.add("hero-img");
        hero_img.src = heroImg;

        heroContainer.appendChild(title);
        heroContainer.appendChild(description);
       
        heroSection.appendChild(heroContainer);
        heroSection.appendChild(hero_img);
      
        return heroSection;
}