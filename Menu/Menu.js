/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> 
  element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 
    'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should 
  toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/



 

// creates a function




const constructMenu = (menuArray) => {
  //  creates parent div and add menu class 
  const menuParent = document.createElement('div');
  menuParent.classList.add('menu');
  
  // creates menu UL and appends to parent class 
  const menuUL = document.createElement('ul');
  menuParent.appendChild(menuUL);

  // creates LI items, adds text, and appends them to the UL element
  menuArray.forEach(item => {
    let menuLink = document.createElement('li');
    menuLink.textContent = item;
    menuUL.appendChild(menuLink);
  });

  // creates an event listener that toggles the menu show class on a click 
  let menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', (e) => {
      menuParent.classList.toggle("menu--open");
  })

  return menuParent;
}

// selects the header element and append the menu component to the header 
const header = document.querySelector('.header');

let menuAppear = constructMenu(menuItems);
header.appendChild(menuAppear);




