import './App.css';

const tg = window.Telegram.WebApp;


function App() {

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
        work font
        <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
