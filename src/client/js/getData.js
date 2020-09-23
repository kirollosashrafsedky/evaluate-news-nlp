const fetch = require("node-fetch");

const getData = async (url) => {
  const request = await fetch(url);
  try{
    const data = await request.json();
    printTohtml(data)
    return 'done';
  }catch(error){
    return("error");
  }
}

function printTohtml(data){
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML =
      `<p>Score tag: <span>${data.score_tag}</span></p>
       <p>Agreement: <span>${data.agreement}</span></p>
       <p>Subjectivity: <span>${data.subjectivity}</span></p>
       <p>Confidence: <span>${data.confidence}</span></p>
       <p>Irony: <span>${data.irony}</span></p>

`;
}

export { printTohtml }
export { getData }
