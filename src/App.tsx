import './App.css';
import Button from './Button';

function App() {
  const alarm =() => {
    alert("button")
  }
  return (
    <div className="App">
      <Button width={100} onClick={alarm}>
          <div>This is Button</div>
        </Button>
    </div>
  );
}

export default App;
