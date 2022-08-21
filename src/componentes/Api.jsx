
const url_base = process.env.REACT_APP_URL_BASE;
const api_key = process.env.REACT_APP_API_KEY;

const Api = (consulta) => {
  const url = url_base + consulta + api_key;

  return (
    fetch(url)
    .then((result) => result.json())
  )
}


export default Api;