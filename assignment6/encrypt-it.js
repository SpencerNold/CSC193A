(function() {
  "use strict";
  window.addEventListener("load", init);

  function init() {
    document.getElementById("encrypt-it").addEventListener("click", handleClick)
    document.getElementById("reset").addEventListener("click", handleReset)
  }

  function handleClick() {
    let text = document.getElementById("input-text").value
    text = text.toLowerCase()
    let acc = ""
    for (let i = 0; i < text.length; i++) {
      let c = text[i];
      if (c >= 'a' && c <= 'z') {
        if (c == 'z') {
          c = 'a'
        } else {
          acc += String.fromCharCode(c.charCodeAt(0) + 1);
        }
      } else {
        acc += c
      }
    }
    document.getElementById("result").textContent = acc
  }

  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }
})();
