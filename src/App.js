import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl bg-yellow-300 h-screen">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
