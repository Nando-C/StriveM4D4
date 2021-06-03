import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import BookList from "./components/BookList";
import books from "./data/books.json";

function App() {
  return (
    <div className="App">
      <WarningSign msg="this is my alert message" />
      <MyBadge color="primary" text="badger mushroom" />
      <BookList books={books} />
    </div>
  );
}

export default App;
