import { useState } from "react";

function App() {
  const [showElement, setShowElement] = useState(false);
  return (
    <div className="App">
      <h2>Check a Checkbox using<br />React Testing Library - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h2>
      <div className="container">
        <label>
          <input
            type="checkbox"
            data-testid="cbShowHide"
            checked={showElement}
            onChange={e => setShowElement(e.target.checked)} />
          <span>Show/Hide Box</span>
        </label>
        {showElement && <div className="box" data-testid="box">This is testing application.</div>}
      </div>
    </div>
  );
}

export default App;
