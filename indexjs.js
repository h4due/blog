let btn = document.querySelector('input[type="button"]');
btn.addEventListener("click", function() {
  let inputValue = document.querySelector('input[type="text"]').value;
  let font = document.getElementById("font1");
  font.innerHTML = inputValue;
});