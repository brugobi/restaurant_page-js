import meals from './meal';

const menu = () => {
  const MEAL = [...meals];

  const container = document.createElement('div');
  container.classList.add('container-fluid');
  const divContentMenu = document.createElement('div');
  divContentMenu.classList.add('d-flex', 'flex-wrap');
  container.appendChild(divContentMenu);

  MEAL.forEach(meals => {
    const mealContainer = document.createElement('div');
    mealContainer.classList.add('p-2', 'col-md-6', 'bd-highlight', 'text-center');
    divContentMenu.appendChild(mealContainer);

    const card = document.createElement('div');
    card.classList.add('card', 'text-white', 'bg-dark', 'mb-3');
    mealContainer.appendChild(card);
    const row = document.createElement('div');
    row.classList.add('row', 'no-gutters');
    card.appendChild(row);

    const divImg = document.createElement('div');
    divImg.classList.add('col-md-4');
    row.append(divImg);
    const imgCard = document.createElement('img');
    imgCard.classList.add('card-img');
    imgCard.setAttribute('src', meals.img);
    divImg.appendChild(imgCard);

    const divBody = document.createElement('div');
    divBody.classList.add('col-md-8');
    row.appendChild(divBody);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    divBody.appendChild(cardBody);
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = meals.title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = meals.text;
    cardBody.appendChild(cardText);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');
    cardBody.appendChild(cardPrice);
    const price = document.createElement('small');
    price.classList.add('text-muted');
    price.innerHTML = meals.price;
    cardPrice.appendChild(price);
  });

  const startDiv = document.getElementById('content');
  startDiv.appendChild(container);
};

export default menu;