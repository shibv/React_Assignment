import "./App.css";
import { ItemProvider } from "./context/ItemContextProvider";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <ItemProvider>
        <ItemList />
      </ItemProvider>
    </>
  );
}

export default App;
