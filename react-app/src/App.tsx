import ListGroup from "./components/css/ListGroup";
import { useState } from "react";
import Like from "./components/Like";
function App(){
  return (
    <div>
      <Like onClick={() => console.log("Click")}></Like>
    </div>
  );
}
export default App;