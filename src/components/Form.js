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

const Form = ({setTranslation, setSuggestedCardNames}) => {
  const [currentLocale, setLocale] = useState('th');
  const [userInput, setUserInput] = useState('');

  const getTranslation = async (event) => {
    if (userInput === '') {
      return
    }
    let bodyFormData = new FormData();
    bodyFormData.append('text', userInput)
    bodyFormData.append('target_lang', 'DE')

    axios({
      method: "post",
      url: deeplUrl,
      data: bodyFormData,
    })
      .then(function (response) {
        setTranslation(response.data.translated_text)
        setSuggestedCardNames(response.data.card_names)
        console.log(response);
      })
      .catch(function (response) {
        //TODO: handle error
        console.log(response);
      });
  };

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

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
            onChange={handleChange}
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
