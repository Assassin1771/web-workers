const sumBtn = document.getElementById("sumBtn");
const bgBtn = document.getElementById("bgBtn");

sumBtn.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < 10000000000000000; i++) {
    sum += i;
  }

  alert(sum);
});

bgBtn.addEventListener("click", () => {
  const currentColor = document.body.style.background;

  if (currentColor !== "blue") {
    document.body.style.background = "blue";
  } else {
    document.body.style.background = "green";
  }
});
