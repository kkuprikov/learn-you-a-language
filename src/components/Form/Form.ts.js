import './Form.css'
import axios from 'axios';
import {useRef, useState} from "react";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const deeplUrl = "https://lively-field-181.fly.dev/v2/translate"

function Form({ setTranslation, setSuggestedCards }) {
  const [currentLocale, setLocale] = useState('es');
  const userInputRef = useRef();

  async function getTranslation(input, targetLanguage) {
    if (input === '') {
      return Promise.resolve();
    }
    let bodyFormData = new FormData();
    bodyFormData.append('text', input);
    bodyFormData.append('target_lang', targetLanguage);

    return axios.post(deeplUrl, bodyFormData);
  }

  async function onSubmit() {
    // @ts-ignore
    const response = await getTranslation(userInputRef?.current?.value, currentLocale);
    if (response) {
      console.log(response);
      setTranslation(response.data.translated_text);
      let cards = {};
      response.data.card_names.map((e) => {
        cards[e] = true;
      });
      setSuggestedCards(cards);
    }
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
          label="Select language"
          style={{ width: 300 }}
          value={currentLocale}
        >
          <MenuItem value={'th'}>Thai</MenuItem>
          <MenuItem value={'es'}>Spanish</MenuItem>
        </Select>
        <div style={{ width: '500px' }}>
          <TextField
            className="Form__textfield"
            multiline
            rows={10}
            placeholder="Type your text here"
            fullWidth
            inputRef={userInputRef} />
        </div>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        onClick={onSubmit}
      >Process</Button>
    </div>
  );
}

export default Form;