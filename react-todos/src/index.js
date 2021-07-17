import ReactDOM from "react-dom";
import "./index.css";
import App from "./use-reducer-todos";

// jsx - sugar syntax per js puro

ReactDOM.render(<App who="Antony" />, document.getElementById("root"));

// equivalente a:
// React.createElement(App, { who: 'Antony' })

// React.createElement("div", {
//   children: React.createElement("p", { children: "Hello world!" }),
// }),
/* <React.StrictMode>
    <App />
  </React.StrictMode> */
