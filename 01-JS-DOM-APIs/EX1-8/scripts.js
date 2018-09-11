const slideSource = document.getElementById('slideSource');

window.onload = () => {
    slideSource.classList.toggle('fade');
}

function loadDoc(url, cFunction) {
    let xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
    xhttp.send();
  }
  function myFunction(xhttp) {
    document.getElementById('demo').innerHTML =
    xhttp.responseText;
}

function get(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open('GET', url);  
      req.onload = () => {
        if (req.status == 200) {
          resolve(req.response);    
          console.log("Success!");
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



