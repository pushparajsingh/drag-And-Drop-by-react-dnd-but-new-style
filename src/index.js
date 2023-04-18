import React from "react";
import ReactDOM from 'react-dom/client';
import Example from "./example";
import { DndProvider } from "react-dnd";
// import Backend from "react-dnd-html5-backend";
import { HTML5Backend } from 'react-dnd-html5-backend'



import "./styles.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
 
);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
