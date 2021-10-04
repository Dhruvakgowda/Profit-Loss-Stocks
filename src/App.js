import { useState } from "react";
import "./styles.css";

export default function App() {
  var [result, setResult] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    let diff, percent, msg;

    let body = document.querySelector("body");
    let initialPrice = document.querySelector("#initial-price").value;
    let quantity = document.querySelector("#quantity").value;
    let currentPrice = document.querySelector("#current-price").value;

    initialPrice = Number(initialPrice);
    quantity = Number(quantity);
    currentPrice = Number(currentPrice);

    if (initialPrice > currentPrice) {
      
      diff = initialPrice - currentPrice;
      percent = (diff / initialPrice) * 100;

      msg = `Total Loss of ${percent.toFixed(1)}% loss worth Rs.${(
        diff * quantity
      ).toFixed(1)} !`;

      if (percent > 50) {
        body.style.backgroundColor = "#ff0000";
      } else {
        body.style.backgroundColor = "#D9AD26";
      }
    } else if (currentPrice > initialPrice) {
      diff = currentPrice - initialPrice;
      percent = (diff / initialPrice) * 100;

      msg = `Total Returns of ${percent.toFixed(1)}% profit worth Rs.${(
        diff * quantity
      ).toFixed(1)} !`;

      if (percent > 50) {
        body.style.backgroundColor = "#4abb5f";
      } else {
        body.style.backgroundColor = "#D9AD26";
      }
    } else {
      msg = "You're stagnant! ";
      body.style.backgroundColor = "#2478b7";
    }
    setResult(msg);
  }

  return (
    <div className="App">
      <header>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            color: "white",
            font: "bold"
          }}
        >
          Profit/Loss Calculator
        </h1>
      </header>

      <main>
        <div className="container">
          <p style={{ color: "white" }}>
            Find out if your stock gained profit or loss?
          </p>
          <p style={{ color: "wheat" }}>Input your Investment</p>

          <form onSubmit={(event) => submitHandler(event)}>
            <input
              type="number"
              id="initial-price"
              placeholder="Initial Stock Price*"
              required
              autoFocus
              min="1"
            ></input>
            <input
              type="number"
              id="quantity"
              placeholder="Quantity of Stock*"
              required
              min="1"
            ></input>
            <input
              type="number"
              id="current-price"
              placeholder="Current Stock Price*"
              required
              min="1"
            ></input>

            <button
              type="submit"
              className="submit-btn"
              style={{ fontWeight: "bold" }}
            >
              Submit
            </button>
          </form>

          <div
            id="result"
            style={{
              border: "1px solid white",
              padding: "1rem",
              fontWeight: "bold",
              backgroundColor: "white",
              maxWidth: "50%",
              margin: "auto"
            }}
          >
            {result}
          </div>
        </div>

      </main>

      <footer>
        <a
          href="https://dhruvak.netlify.app"
          style={{ color:"white" }}
          rel="noopener noreferrer"
        >
          Dhruva | Portfolio
        </a>
      </footer>
    </div>
  );
}
