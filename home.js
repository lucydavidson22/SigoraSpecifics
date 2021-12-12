window.addEventListener("message", event => {
    document.querySelector("h1").innerText = JSON.stringify(event);
    document.body.style.backgroundColor = "black";
    if (event.data.name === "themeChange") {
      document.body.style.backgroundColor = "black";
    }
  });

// function getDate(){
//     var today = new Date();
//     document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
// }

document.getElementById('date').innerHTML = today;