const menu = document.getElementById('menu');
const h2 = document.createElement('h2');
const p = document.createElement('p')

menu.appendChild(h2);
menu.appendChild(p)

function closed(){
  h2.innerHTML = 'Closed! Sorry no food today!'
}

switch (new Date().getDay() ){
  case 0:
    closed();
    break;

  case 1:
    h2.innerHTML = 'Monday!';
    p.innerHTML = 'Monday is "mack-måndag", therefore it´s sandwhich all day long!';
    break;
  
  case 2:
    h2.innerHTML ='Tuesday!';
    p.innerHTML = 'Today is Taco-tuesday! Arrrriba!';
    break;
  
  case 3:
    h2.innerHTML = 'Wednesday!'
    p.innerHTML = 'Also known as mini-saturday, today we deserve a hamburger and a cold beer.';
    break;
  
    case 4:
      h2.innerHTML = 'Thursday!'
      p.innerHTML = 'Oh, classic thursday.. spenach soup and pancakes is obviously today´s lunch.';
      break;
    
    case 5: 
      h2.innerHTML = 'Friday!!!'
      p.innerHTML = 'Party all day long! Pizza for breakfast, lunch and dinner!'
      break;
    
    case 6:
      closed();
      break;
}


