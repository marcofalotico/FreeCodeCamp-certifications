const ADD = 'ADD';

// creo il reducer con state iniziale = empty array. Se l'azione è di tipo ADD. returna il messaggio a key.message
const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD: return [...state, action.message];
    default: return state;
  }
}

// creo l'action creator, una funzione che returna un'oggetto (un'azione) che ha il type per forza e un testo, passato come argomento e inizializzato nella key = message
const addMessage = (msg) => {
  return {
    type: ADD,
    message: msg
  }
}

// creo lo store
const store = Redux.createStore(messageReducer);


// all'inizio lo state è vuoto
console.log(store.getState())

store.dispatch(addMessage("Marco"))
console.log(store.getState())
// dopo che gli passo la stringa "Marco", lo state avrà "Marco" nell'array