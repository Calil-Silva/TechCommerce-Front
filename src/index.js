import ReactDOM from "react-dom";
import App from "./App";
import { Provider as AlertProvider } from "react-alert";

const Root = () => (
  <AlertProvider>
    <App />
  </AlertProvider>
);

ReactDOM.render(<Root />, document.querySelector(".root"));
