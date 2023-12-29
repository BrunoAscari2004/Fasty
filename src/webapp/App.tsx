import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <Toaster />
      <Home />
    </ReduxProvider>
  );
}

export default App;
