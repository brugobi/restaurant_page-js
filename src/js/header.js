const header = () => {
  const headerDiv = document.createElement('header');
  headerDiv.classList.add('nav', 'justify-content-start');
  document.body.insertBefore(headerDiv, document.body.firstChild);
  const p = document.createElement('p');
  p.classList.add('nav-item');
  p.innerHTML = 'Brazilian Steakhouse';
  headerDiv.appendChild(p);
};

export default header;