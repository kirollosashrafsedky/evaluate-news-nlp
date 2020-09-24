const fetch = require("node-fetch");
import { printTohtml } from './printData'


function handleSubmit(event) {
    event.preventDefault()
    const inputTxt = document.getElementById('inputBox').value;
    const inputObj = {
      'input': inputTxt
    }
    if (formValidate()){
      getData(inputObj)
      .then((data) => {
        Client.printTohtml(data);
      })
    }
}

function formValidate(){
  const inputTxt = document.getElementById('inputBox').value;
  const errorMsg = document.getElementById('err-msg');
  errorMsg.innerText = "";
  if(inputTxt == ''){
    errorMsg.innerText = 'You can\'t submit empty input'
    return false;

  }else{
    return true;
  }
}

const getData = async (data = {})=>{
    const response = await fetch('http://localhost:8081/getdata', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

export { handleSubmit }
export { getData }
