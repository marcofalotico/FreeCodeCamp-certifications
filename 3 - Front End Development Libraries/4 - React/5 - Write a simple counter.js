class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // bindo i metodi con this
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }
  
  // definisco i metodi increment(), decrement() e reset(), con il setState() method al loro interno
  increment() {
    this.setState({ count: this.state.count += 1 })
  }
  decrement() {
    this.setState ({ count: this.state.count -= 1 })
  }
  reset() {
    this.setState ({ count: 0 })
  }
  // renderizzo e utilizzo i metodi nei rispettivi bottoni al comando onClick
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};