import React from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
class App extends React.Component {
  state = {
    pageTitle: "My App",
    products: [
      { id: 0, name: "Avocado", count: 10 },
      { id: 1, name: "Bread", count: 5 },
    ],
    cart: [],
  };

  changePageTitleHandler = () => {
    this.setState({ pageTitle: "Products list" });
  };

  addToCartHandler = (id, name) => {
    if (!this.state.cart.find((item) => item.id === id)) {
      this.setState((prevState) => ({
        cart: [...prevState.cart, { id, name }],
      }));
    }
  };

  removeFromCartHandler = (id) => {
      const filteredArray = this.state.cart.filter(item => item.id !== id);
      this.setState({
          cart: filteredArray,
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.pageTitle}</h1>
        </header>
        <button onClick={this.changePageTitleHandler}>Change title</button>
        <div>
          {this.state.products.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              count={item.count}
              addToCart={() => this.addToCartHandler(item.id, item.name)}
            />
          ))}
        </div>
        <div>
          <div>Cart:</div>
          {this.state.cart.map((item) => (
              <div key={item.id}>
                  <span>{item.name}</span>
                  <button onClick={() => this.removeFromCartHandler(item.id)}>remove</button>
              </div>
          ))}
        </div>
      </div>
    );
  }
>>>>>>> Stashed changes
}

export default App;
