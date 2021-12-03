import "./App.scss";
import Card from "./components/Card/Card";
import cardDeck from "./data/data";

// Challenge
// There is a gist with the data you need below
// Create a new file in data and copy the array of card Objects into it
// Create a reusable component to display each CARD object in the array
// Map over the data file and create a component for each object
// Add some conditional styles based on suit
// EXTENSION: Can you shuffle the deck before mapping? 

const App = () => {
  return (
    <div className="app">
      <h1 className="cardTile__title">Card Deck</h1>
      <Card className="cardTile" CardArr={cardDeck}/>
    </div>
  );
};

export default App;