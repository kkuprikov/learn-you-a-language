import axios from "axios";

const deeplUrl = "https://lively-field-181.fly.dev/v2/translate"

export async function getTranslation(input, targetLanguage) {
  let bodyFormData = new FormData();
  bodyFormData.append('text', input);
  bodyFormData.append('target_lang', targetLanguage);

  return axios.post(deeplUrl, bodyFormData);
}
