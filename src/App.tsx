import "./App.css";
import Navbar from "./components/navbar";
import Page from "./components/search_bar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-screen justify-center">
        {[...Array(10)].map(() => (
          <div>
            <Page></Page>
            <div className="w-2 h-2" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
