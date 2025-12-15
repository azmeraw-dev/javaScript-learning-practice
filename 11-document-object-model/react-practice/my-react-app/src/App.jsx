import Hello from "./Hello";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Props & State Practice</h1>

      {/* Hello Components with props */}
      <Hello name="Azmeraw" greeting="Hello" />
      <Hello name="React Learner" greeting="Welcome" />
      <Hello name="Ethio Telecom" greeting="Hi" />

      <hr style={{ margin: "20px 0" }} />

      {/* Counter Components with different initial values */}
      <Counter initial={0} />
      <Counter initial={5} />
      <Counter initial={10} />
    </div>
  );
}

export default App;


