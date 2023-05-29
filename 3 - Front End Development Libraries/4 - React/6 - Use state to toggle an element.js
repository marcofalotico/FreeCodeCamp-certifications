class MyComponent extends React.Component {
    // constructor() method
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this)
    }
    // setState conditions in toggleVisibility() method
    toggleVisibility() {
      this.setState(state => {
        if (state.visibility == true) {
          return {visibility: false}
        } else {
          return {visibility: true}
        }
      });
    }
    // render() method
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>
              Click Me
            </button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>
              Click Me
            </button>
          </div>
        );
      }
    }
  }