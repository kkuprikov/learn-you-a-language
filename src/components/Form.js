import './Form.css'
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const deeplUrl = "https://api-free.deepl.com/v2/translate"
const deeplApiKey = process.env.REACT_APP_DEEPL_API_KEY

function Form() {
  const [userData, setUserData] = useState({});

  const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': `DeepL-Auth-Key ${deeplApiKey}` },
        body: JSON.stringify({ 
          text: 'React POST Request Example',
          target_lang: 'DE'
        })
    };

  const getTranslation = async () => {
    const response = await fetch(deeplUrl, requestOptions);
    console.log(response)
    const jsonData = await response.json();
    setUserData(jsonData);
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
          value={'th'}
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
        onClick={() => {
          getTranslation()

        }}
       >Process</Button>
    </div>
  );
}

export default Form;
