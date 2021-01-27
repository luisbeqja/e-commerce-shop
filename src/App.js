import "./App.css";
import Header from "./components/header";
import Name from "./components/prodotto";

function App() {
  const price = () => {
    return;
  };
  return (
    <div className="App">
      <Header />
      <div className="producs">
        <Name
          photo="https://picsum.photos/id/235/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/237/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/231/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/235/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/237/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/231/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/233/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/235/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/231/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
        <Name
          photo="https://picsum.photos/id/233/200/300"
          prezzo={Math.floor(Math.random() * 200)}
          name="luis"
        />
      </div>
    </div>
  );
}

export default App;
