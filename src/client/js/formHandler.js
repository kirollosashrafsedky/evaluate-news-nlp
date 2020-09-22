let apiKey = 0;
const urlParts = {
  'firstPart': 'https://api.meaningcloud.com/sentiment-2.1?key=',
  'secondPart': '&of=json&lang=en&txt='
}

function handleSubmit(event) {
    let inputTxt = document.getElementById('inputBox').value;
    event.preventDefault()
    getkey()
    .then(() => {
      const fullUrl = urlParts.firstPart + apiKey + urlParts.secondPart + inputTxt;
      Client.getData(fullUrl)
    })
}

const getkey = async () => {
  const request = await fetch('http://localhost:8081/getkey');
  try{
    const data = await request.json();
    apiKey = data.apiKey
  }catch(error){
    return("error");
  }
}


export { handleSubmit }
