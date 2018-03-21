/**
When the user clicks the 'button_gethar' button,
dump browser.devtools.network.getHAR() to the browser console
*/
document.getElementById("button_gethar").addEventListener("click", async() => {

  console.log("running browser.devtools.network.getHAR()");
  const harLog = await browser.devtools.network.getHAR();
  console.log("resulting harLog", harLog);

});
