import './Form.css'
import axios from 'axios';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const deeplUrl = "https://9f9b-124-122-125-95.ngrok.io/v2/translate"

function Form() {
  const [userData, setUserData] = useState({});

  const getTranslation = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append('text', 'React POST Request Example')
    bodyFormData.append('target_lang', 'DE')

    axios({
      method: "post",
      url: deeplUrl,
      data: bodyFormData,
    })
      .then(function (response) {
        //TODO: substitute output content with transformed response
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
