document.getElementById("send").addEventListener("click", () => {
    let user = document.getElementById("user").value;
    localStorage.setItem("user", user);
    alert("saved");
    console.log("saved")
}, false);

document.getElementById("borrar").addEventListener("click", () => {
    localStorage.clear()
    alert("erased");
    console.log("erased");
}, false);

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';

    let files = evt.dataTransfer.files;

    let output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push(f.name);
    }
    document.getElementById('list').innerHTML = output.join('');
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }

  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);