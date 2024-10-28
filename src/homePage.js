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
          description.innerText=`Welcome to Criniti’s – the leading restaurant chain serving the best of Italian 
          cuisine with a contemporary Australian twist. Our menu features mouth-watering wood-fired pizzas,
           pasta, seafood, grilled fish, bruschetta, risotto, ribs, and more. With multiple locations 
           across the country, including Carlton, Southbank, Perth, Castle Hill, 
           Parramatta (next to Bay Vista), Brighton Le Sand, Wetherill Park,
           and 5 more locations to come this year, 
           we offer a unique dining experience at each of our locations.`
    
     const hero_img = document.createElement('img');
        hero_img.classList.add("hero-img");
        hero_img.src = heroImg;

        heroContainer.appendChild(title);
        heroContainer.appendChild(description);
       
        heroSection.appendChild(heroContainer);
        heroSection.appendChild(hero_img);
      
        return heroSection;
}