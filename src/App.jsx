import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

// XS VIEW
// {/* <MediaQuery minWidth={320}>werawerio</MediaQuery> */}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Content />
      {/* <Footer /> */}
    </>
  );
}

export default App;
