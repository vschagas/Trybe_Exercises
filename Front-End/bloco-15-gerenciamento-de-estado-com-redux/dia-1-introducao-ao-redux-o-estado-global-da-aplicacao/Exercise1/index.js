function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  // if (action) {

  // } return state;

  switch (action.type) {
    case 'NEXT_COLOR':
       return {
         ...state, index: state.index === state.colors.length-1 ? 0 : state.index + 1
       }

    case 'PREVIOUS_COLOR':
       return {
        ...state,
        index: state.index === 0 ? state.colors.length -1 : state.index -1
      }
    
    case 'RANDON_COLOR': {
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length
      }
    }

    default: return state;
  }
};

const store = Redux.createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);


const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const randonButton = document.querySelector('#randon')

previousButton.addEventListener('click', () => store.dispatch({ type: 'PREVIOUS_COLOR' }));
nextButton.addEventListener('click', () => store.dispatch({ type: 'NEXT_COLOR' }));
randonButton.addEventListener('click', () => store.dispatch({ type: 'RANDON_COLOR' }))

store.subscribe(() => {
  const { colors, index } = store.getState();
   
  document.querySelector('#value').innerHTML = colors[index];
  document.querySelector('#container').style.backgroundColor = colors[index];

});