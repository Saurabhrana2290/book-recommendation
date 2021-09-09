import './App.css';
import React,{useState} from 'react';
function App() {
  var [book1Name,setBook1Name] = useState("");
  var [book2Name,setBook2Name] = useState("");
  function clickHandlerBtn1(){
    setBook1Name("Eloquent JavaScript");
    setBook2Name("The Good Parts");
  }
  function clickHandlerBtn2(){
    setBook1Name("Let Us C");
    setBook2Name("C Programming Absolute Beginner’s Guide");
  }
  function clickHandlerBtn3(){
    setBook1Name("Beginning Programming with Java For Dummies");
    setBook2Name("Head First Java: A Brain-Friendly Guide");
  }
  return (
    <div className="App">
      <h1> 📚 Goodbooks!</h1> 
      <p>Checkout my favourite books. Select a genre to get started</p>
      <div className="subButton">
        <button id="btn1" onClick={clickHandlerBtn1}>Javascript</button>
        <button id="btn2" onClick={clickHandlerBtn2}>C Language</button>
        <button id="btn3" onClick={clickHandlerBtn3}>Java</button>
      </div>
      <hr />
      <div className="bookNames">
        <ul className="books">
          <li id="book1" className="nonBullets">{book1Name}</li>
          <li id="book2" className="nonBullets">{book2Name}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
