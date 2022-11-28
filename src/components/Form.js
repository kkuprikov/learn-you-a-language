import './Form.css'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Form() {
  return (
    <div class="Form">
      <p>
        Type a word or phrase to translate
      </p>
      <FormControl>
        <InputLabel>Language</InputLabel>
        <Select
          class="Form__select"
          value={'th'}
          label="Select language"
          style={{ width: 200 }}
        >
          <MenuItem value={'th'}>Thai</MenuItem>
          <MenuItem value={'es'}>Spanish</MenuItem>
        </Select>
        <TextareaAutosize
          class="Form__textarea"
          minRows={10}
          maxRows={30}
          placeholder="Type your text here"
          resize="none"
          style={{ width: 500 }}
        />
      </FormControl>
      <Button variant="contained">Process</Button>
    </div>
  );
}

export default Form;
