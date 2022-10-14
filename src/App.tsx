import "./App.css";
import { Row } from "./Row";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.feachNetflixOriginals}
      />
    </div>
  );
}

export default App;
