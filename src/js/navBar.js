import home from './home';
import contact from './contact';
import menu from './menu';

const navBar = () => {
  const startDiv = document.getElementById('content');
  const navContainer = document.createElement('nav');
  navContainer.classList.add('navbar', 'navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');
  // navContainer.innerHTML = '<p>HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>';
  const navButton = document.createElement('button');
  navButton.classList.add('navbar-toggler');
  navContainer.appendChild(navButton);
  //const myAtrr = { "type" : "button", "data-toggle" : "collapse", "data-target" : "#navbarNav", "aria-label" : "Toggle navigation", "aria-controls" : "navbarNav", "aria-expanded" : "false"  };
  //Object.assign(navButton.setAttribute, myAtrr);
  navButton.setAttribute('type', 'button');
  navButton.setAttribute('data-toggle', 'collapse');
  navButton.setAttribute('data-target', '#navbarNav');
  navButton.setAttribute('aria-controls', 'navbarNav');
  navButton.setAttribute('aria-expanded', 'false');
  navButton.setAttribute('aria-label', 'Toggle navigation');
  const spanElem = document.createElement('span');
  spanElem.classList.add('navbar-toggler-icon');
  navButton.appendChild(spanElem);
  const divList = document.createElement('div');
  divList.classList.add('collapse', 'navbar-collapse');
  divList.setAttribute('id', 'navbarNav');
  const ul = document.createElement('ul');
  ul.classList.add('navbar-nav');
  const links = ['Home', 'Menu', 'Contact'];
  links.forEach(link => {
    const node = document.createElement('li');
    node.classList.add('nav-item');
    const anchor = document.createElement('a');
    anchor.classList.add('nav-link');
    anchor.textContent = link;
    node.appendChild(anchor);
    ul.appendChild(node);

    if (anchor.textContent === 'Home') {
      anchor.addEventListener('click', () => {
        startDiv.innerHTML = '';
        navBar();
        home();
      });
    } else if (anchor.textContent === 'Menu') {
      anchor.addEventListener('click', () => {
        startDiv.innerHTML = '';
        navBar();
        menu();
      });
    } else if (anchor.textContent === 'Contact') {
      anchor.addEventListener('click', () => {
        startDiv.innerHTML = '';
        navBar();
        contact();
      });
    }; 
  });
  
  divList.appendChild(ul);
  navContainer.appendChild(divList);
  startDiv.appendChild(navContainer); 
};

export default navBar;