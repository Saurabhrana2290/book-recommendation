import './App.css';
import React,{useState} from 'react';
function App() {
  var [book1Name,setBook1Name] = useState("");
  var [book2Name,setBook2Name] = useState("");
  function clickHandlerBtn1(){
    setBook1Name("Let us code");
    setBook2Name("Code for me");
  }
  function clickHandlerBtn2(){
    setBook1Name("Abc");
    setBook2Name("Shakes");
  }
  function clickHandlerBtn3(){
    setBook1Name("flintoff");
    setBook2Name("Rd");
  }
  return (
    <div className="App">
      <h1> 📚 Goodbooks!</h1> 
      <p>Checkout my favourite books. Select a genre to get started</p>
      <div className="subButton">
        <button id="btn1" onClick={clickHandlerBtn1}>Javascript</button>
        <button id="btn2" onClick={clickHandlerBtn2}>fiction</button>
        <button id="btn3" onClick={clickHandlerBtn3}>business</button>
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
