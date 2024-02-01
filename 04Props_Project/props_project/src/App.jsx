import Cards from "./Components/Cards";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-center m-16">Understanding props</h1>
      <div className="flex m-3">
        <Cards username="Aditya" para = "This card is created by Aditya"  />
        <Cards username= "Anurag" para = "This card is created by Anurag"/>
        <Cards username = "Animesh" para = "This card is created by Animesh"/>
        <Cards username = "Kulgaurav" para = "This card is created by Kulgaurav"/>
      </div>
    </>
  );
}

export default App;
