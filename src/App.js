import './App.css';
import Form from './components/Form.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Form/>
        </Grid>
        <Grid xs={6}>
          <div class="Results">
            <p>
              Type a word or phrase to translate
            </p>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
