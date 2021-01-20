import logo from "./logo.svg";
import "./App.css";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Foo from "./components/Foo";

function App() {
  return (
    <div className="App">
      <Body1 />
      <Body2 />
      <Body3 />
      <Body2 />
      <Foo />
    </div>
  );
}

export default App;
