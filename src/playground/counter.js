const { Component } = React;
const { render } = ReactDOM;
const app = document.getElementById('app');

class Counter extends Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => (
      { count: prevState.count + 1 })
    );
  }

  removeOne = () => {
    this.setState(prevState => (
      { count: prevState.count - 1 })
    );
  }

  resetCount = () => {
    this.setState(() => ({ count: 0 }));
  }

  componentDidMount() {
    const num = localStorage.getItem('count');
    const count = parseInt(num, 10);

    if (!isNaN(count)) this.setState(() => ({ count }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count)
      localStorage.setItem('count', this.state.count);
  }

  render() {
    return (
      <div>
        <h1>Counter App:</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.removeOne}>-1</button>
        <button onClick={this.resetCount}>Reset Counter</button>
      </div>
    );
  }
}

render(<Counter />, app);