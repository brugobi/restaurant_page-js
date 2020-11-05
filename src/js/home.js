import barbecue from '../assets/barbecue.jpg';

const home = () => {
  const container = document.createElement('div');
  container.classList.add('container-fluid');
  const divContent = document.createElement('div');
  divContent.classList.add('row', 'vh-100', 'bg-ligth', 'justify-content-center', 'align-items-center');
  container.appendChild(divContent);
  const divCol = document.createElement('div');
  divCol.classList.add('col-7');
  divContent.appendChild(divCol);
  const h2 = document.createElement('h2');
  h2.classList.add('mb-3', 'text-white');
  h2.innerHTML = 'Come to visit us and check the best brazilian barbecure!';
  divCol.appendChild(h2);
  const divImg = document.createElement('div');
  divCol.appendChild(divImg);
  const img = document.createElement('img');
  img.classList.add('img-barbecue');
  img.setAttribute('src', barbecue);
  img.setAttribute('alt', 'barbecue');
  divImg.appendChild(img);

  const startDiv = document.getElementById('content');
  startDiv.appendChild(container);
};

export default home;