const fetch = require("node-fetch");

let apiKey = 0;
const urlParts = {
  'firstPart': 'https://api.meaningcloud.com/sentiment-2.1?key=',
  'secondPart': '&of=json&lang=en&txt='
}

function handleSubmit(event) {
    event.preventDefault()
    let inputTxt = document.getElementById('inputBox').value;

    getkey()
    .then((key) => {
      const fullUrl = urlParts.firstPart + key + urlParts.secondPart + inputTxt;
      Client.getData(fullUrl)
    })
}

const getkey = async () => {
  const request = await fetch('http://localhost:8081/getkey');
  try{
    const data = await request.json();
    return data.apiKey
  }catch(error){
    return("error");
  }
}



export { handleSubmit }
export { getkey }
