import './App.css';
import {useState} from "react";
import Form from './components/Form.js';
import Result from './components/Result/Result.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {
  const [result, setResult] = useState('');

  return (
    <ThemeProvider theme={darkTheme}>
      <Form setResult={setResult} />
      <Result result={result}/>
    </ThemeProvider>
  );
}

export default App;
