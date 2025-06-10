import ListGroup from "./components/css/ListGroup";
import { useState } from "react";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { set } from "immer/dist/internal";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [maxChars, setMaxChars] = useState(100);
  const handleClick = () => {
    setMaxChars((prevMaxChars) => (prevMaxChars === 100 ? 10 : 100));
  };

  return (
    <div>
      <ExpandableText maxChars={maxChars} onClick={handleClick}>
        ratione.
      </ExpandableText>
    </div>
  );
}
export default App;
