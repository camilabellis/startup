function callApi(url, method) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open(method, url);  
      req.onload = () => {
        if (req.status == 200) {
          console.log("Success!");
          let resp = req.responseText;
          let respJson = JSON.parse(resp);
          resolve(respJson); 
        }
        else {
          reject(Error(req.statusText));
          console.error("Failed!")
        }
      };
      req.onerror = () => {
        reject(Error("Server Error"));
        document.getElementById('demo').style.color = "red";
      };  
      req.send();
    });
}

callApi({
  url: 'https://api.github.com/search/repositories?q=javascript',
  method: 'GET'
}).then(setup)

function setup (response) {
  console.log(response);
  let ul = document.createElement('ul');
  response.items.forEach(function(item){
    let li = document.createElement('li');
    li.textContent = tiem.full_name;
    console.log()
  })
  ul.appendChild()
}