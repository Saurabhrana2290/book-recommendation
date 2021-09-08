import './App.css';
import book from './book.jpg';
function App() {
  return (
    <div className="App">
      
      <h1> 📚 Goodbooks!</h1>

      <p>Checkout my favourite books. Select a genre to get started</p>

      <div className="subButton">
        <button id="btn1">Javascript</button>
        <button id="btn2">fiction</button>
        <button id="btn3">business</button>
      </div>

      <hr />

      <div className="bookNames">
        <ul className="books">
          <li id="book1" className="nonBullets"></li>
          <li id="book2" className="nonBullets"></li>
        </ul>
      </div>

    </div>
  );
}

export default App;
