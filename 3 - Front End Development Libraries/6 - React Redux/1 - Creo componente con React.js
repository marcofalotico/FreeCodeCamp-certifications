class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
  
    // creo i metodi settando lo state
    handleChange(event){
      this.setState({
        input: event.target.value,
        messages: this.state.messages
      })
    }
  
    submitMessage(){
      this.setState({
        input: '',
        messages: [...this.state.messages, this.state.input]
      })
    }
  
    // metodo render
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange = {this.handleChange.bind(this)}
                  value={this.state.input}/>
          <button onClick={this.submitMessage.bind(this)}>
            Submit
          </button>
          <ul>
            {this.state.messages.map((message, index)=>{
              return <li key={index}>{message}</li>
            })}
          </ul>
        </div>
      );
    }
  };