import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {
    useEffect(() => {
        (async () => {
            try {
                const result = await axios('/backend/make-call-that-uses-secret/brad/popcorn')
                const {data} = result;
                alert(data);
            } catch (e) {
                alert('failed to do the secret operation!');
            }
        })();
    }, []);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
