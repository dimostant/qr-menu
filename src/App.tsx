import "./App.css";
import Navbar from "./components/navbar";
import Page from "./components/search_bar";
import { useRef } from "react";

function App() {
  const pages = useRef(10);

  return (
    <>
      <Navbar></Navbar>
      <div className="h-2"/>
      <div className="w-screen justify-center">
        {[...Array(pages.current)].map(() => (
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
