function copyText(id) {
   var copyText = document.getElementById(id).innerText.trim(); // Trim extra spaces
   var tempInput = document.createElement("textarea");
   tempInput.value = copyText;
   document.body.appendChild(tempInput);
   tempInput.select();
   document.execCommand("copy");
   document.body.removeChild(tempInput);
   alert("Text copied successfully!");
}