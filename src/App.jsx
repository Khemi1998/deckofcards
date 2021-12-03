import "./App.scss";
import Card from "./components/Card/Card";
import cardDeck from "./data/data";

const App = () => {
  return (
    <div className="app">
      <h1 className="cardTile__title">Card Deck</h1>
      <Card className="cardTile" CardArr={cardDeck}/>
    </div>
  );
};

export default App;