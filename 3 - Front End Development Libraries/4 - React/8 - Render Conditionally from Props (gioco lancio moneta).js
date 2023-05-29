// ho un child component che returna le frasi nel tag <h1> con il "ternary operator"
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        { this.props.fiftyFifty ? "You Win!" : "You Lose!" }
      </h1>
    );
  }
}

// questo è il parent component, che è di tipo stateful, in cui è inizializzato il counter a 1.
class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    // bindo il metodo handleClick con l'oggetto
    this.handleClick = this.handleClick.bind(this);
  }
  // creo il metodo che aumenta il counter
  handleClick() {
    this.setState(prevState => {
      prevState = this.state.counter;
      return {
        counter: prevState + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty = {expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
// in sostanza:
// 1 - clicco il bottone e attivo il metodo handleClick che aumenta il counter;
// 2 - renderizzo il child che passa la props fiftyFifty, uguale a un'espressione che ottiene true o false in base alla generazione di un numero random al 50%
// 3 - il child component entra in gioco e mostra la stringa se l'operatore è true o false
// 4 - sotto c'è la traccia del counter