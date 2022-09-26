
import './App.css';
import { QrReader} from 'react-qr-reader';
import { useState } from 'react';




const Test = () => {
  const [data, setData] = useState('no result')

  return (
    <>
      <p>{data}</p>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Test/>
    </div>
  );
}

export default App;
