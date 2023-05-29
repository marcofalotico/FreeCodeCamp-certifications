const textAreaStyles = {
  width: 235,
  margin: 5
};

// componente genitore stateful con state e due metodi: handleChange e HandleSubmit
class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // mi salvo in this.state.userInput quello che scrivo da tastiera con il .setState() method
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  // quello che submitto viene ficcato in un array itemsArray, splittato dalle virgole, e poi inserito nell'array toDoList con il .setState() method
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  // renderizzo
  render() {
    // mappo tra gli elementi del toDoList array con map e returno una list in html in JSX
    const items = this.state.toDoList.map(element => {
      return <li>{element}</li>
    });
    // returno JSX dal componente genitore la UI
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
// 1 - Ho un area di testo, che fa scrivere e salva i valori, ha uno stile definito all'inizio e un placeholder
// 2 - Ho un bottone che fa partire il metodo handleSubmit
// 3 - visualizzo i singoli elementi in una lista html