
export default function aboutPage() {

  const aboutSection = document.createElement('div');
         
        aboutSection.classList.add('about-secion');
  const title = document.createElement('h1');
        title.innerText="Welcome To Criniti's";
  const description = document.createElement('p');
        description.innerText=`Traditional Italian meets contemporary dining at Criniti's, 
        a multi-award winner of 'Australia's Favourite Italian'. Criniti's was originally 
        established in 2003 in Parramatta, within Sydney's west by Criniti Family, 
        were driven by a passion for fine quality food & cultivated success. 
        Their yearning & hard driven aspirations developed dramatically over
         the years, which resulted in a popular go-to spot amongst the locals.
          It didn't take long for the news to spread south, east and north of the border.
           Patrons travelled from all areas of Sydney to see what all "the fuss" was about. 
        After much success & rave reviews, Criniti's decided it was time 
        to spread its wings east of the border.`

        aboutSection.appendChild(title);
        aboutSection.appendChild(description);

        return aboutSection;

}