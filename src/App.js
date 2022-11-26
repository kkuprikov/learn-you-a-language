import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div class="App-header">
        <p>
          Type a word or phrase to translate
        </p>
        <TextField 
          id="outlined-basic" 
          label="Input" 
          variant="outlined" />
        <Button variant="contained">Process</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
