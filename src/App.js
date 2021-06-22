import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import Tasks from './Components/Tasks'

function App() {
  const onClick = () =>{
    console.log("root click")
  }

  return (
    <div className="container">
      <Header></Header>
      <Button color="green" text="root click" onClick={onClick}></Button>
      <Tasks/>
      
    </div>
  );
}

export default App;
