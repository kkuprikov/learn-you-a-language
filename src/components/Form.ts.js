import "./Form.css";
import { getTranslation } from "../lib/translate.ts.js";
import { useRef, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

function Form({ setTranslation, setSuggestedCards }) {
  const [currentLocale, setLocale] = useState("es");
  const [loading, setLoading] = useState(false);
  const userInputRef = useRef();

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let input = userInputRef?.current?.value;
    if (!input) {
      return;
    }
    const response = await getTranslation(input, currentLocale);
    setLoading(false);
    if (response) {
      console.log(response);
      setTranslation(response.data.translated_text);
      let cards = {};
      response.data.card_names.map((e) => {
        return (cards[e] = true);
      });
      setSuggestedCards(cards);
    }
  }

  return (
    <form className="Form">
      <p>Type a word or phrase to translate</p>
      <FormControl style={{ width: 1300 }}>
        <InputLabel>Language</InputLabel>
        <Select
          className="Form__select"
          label="Select language"
          style={{ width: 200 }}
          value={currentLocale}
          onChange={(e) => setLocale(e.target.value)}
        >
          <MenuItem value={"th"}>Thai</MenuItem>
          <MenuItem value={"es"}>Spanish</MenuItem>
        </Select>
        <TextField
          sx={{ mt: 4 }}
          className="Form__textfield"
          multiline
          rows={10}
          placeholder="Type your text here"
          fullWidth
          inputRef={userInputRef}
        />
      </FormControl>
      <LoadingButton
        variant="contained"
        type="submit"
        onClick={onSubmit}
        loading={loading}
      >
        Process
      </LoadingButton>
    </form>
  );
}

export default Form;
