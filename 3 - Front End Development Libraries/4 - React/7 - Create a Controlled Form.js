class MyForm extends React.Component {
    constructor(props) {
      super(props);
      // state di default inizializzato a stringhe vuote
      this.state = {
        input: '',
        submit: ''
      };
      // bindo i due metodi con this
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    // metodo che parte quando scrivo nell'input tag, prende il target.value da tastiera
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    // metodo che parte quando clicco submit
    handleSubmit(event) {
      event.preventDefault() // evita refresh pagina
      this.setState({
        submit: this.state.input //salvo dentro la proprietà di state "submit", l'input
      })
    }
    // renderizzo il form: quando faccio submit parte il metodo handleSubmit, il value dell'input è this.state.input, quando lo cambio parte il metodo handleChange che lo ri-salva nella proprietà input
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange} />
            <button type='submit'>
              Submit!
            </button>
          </form>
          <h1>
            {this.state.submit}
          </h1>
        </div>
      );
    }
  }