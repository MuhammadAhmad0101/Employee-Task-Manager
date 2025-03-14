import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./Contexts/UserContext.jsx";
createRoot(document.getElementById("root")).render(
      <Context>
            <BrowserRouter>
                  <App />
                  <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Slide} />
            </BrowserRouter>
      </Context>
);
