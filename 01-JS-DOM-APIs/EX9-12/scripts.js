function get(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open('GET', url);  
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

get("https://api.github.com/search/repositories?q=javascript").then(setup)

function setup (items) {
    let list = document.getElementById("list-body");
    for (let i=0; i < items.length; i++){
        let repoName = document.createElement('li');
        repoName.innerHTML = items.full_name;
        list. appendChild(repoName);
    }
}