import './Form.css'
import axios from 'axios';
import {useState} from "react";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const deeplUrl = "https://cb90-202-176-124-205.ngrok.io/v2/translate"

const Form = ({setResult}) => {
  const [currentLocale, setLocale] = useState('th');

  const getTranslation = async (event) => {
    let bodyFormData = new FormData();
    bodyFormData.append('text', 'React POST Request Example')
    bodyFormData.append('target_lang', 'DE')

    axios({
      method: "post",
      url: deeplUrl,
      data: bodyFormData,
    })
      .then(function (response) {
        setResult(response.data)
        console.log(response);
      })
      .catch(function (response) {
        //TODO: handle error
        console.log(response);
      });
  };

  return (
    <div className="Form">
      <p>
        Type a word or phrase to translate
      </p>
      <FormControl>
        <InputLabel>Language</InputLabel>
        <Select
          className="Form__select"
          value={currentLocale}
          label="Select language"
          style={{ width: 300 }}
        >
          <MenuItem value={'th'}>Thai</MenuItem>
          <MenuItem value={'es'}>Spanish</MenuItem>
        </Select>
        <div style={{width: '500px'}}>
          <TextField
            className="Form__textfield"
            multiline
            rows={10}
            placeholder="Type your text here"
            fullWidth
          />
        </div>
      </FormControl>
      <Button 
        variant="contained"
        onClick={getTranslation}
       >Process</Button>
    </div>
  );
}

export default Form;
