

const INICIAL_STATE = {
  theme: 'ligth'
}

const reducer = (state = INICIAL_STATE, action) => {
  if (action.type === 'CHANGE_THEME') {
    return {
      theme: state.theme === 'ligth' ? 'dark' : 'ligth'
    };
  };

  return state;
};

const store = Redux.createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const action = {
  type: 'CHANGE_THEME'
}


const button = document.querySelector('#teste')
button.addEventListener('click', () => {
  store.dispatch(action)
})