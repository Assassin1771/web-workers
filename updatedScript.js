const worker = new Worker("worker.js");

const sumBtn = document.getElementById("sumBtn");
const bgBtn = document.getElementById("bgBtn");

sumBtn.addEventListener("click", () => {
  worker.postMessage("worker message");

  worker.onmessage = (response) => {
    alert(response.data);
  };
});

bgBtn.addEventListener("click", () => {
  const currentColor = document.body.style.background;

  if (currentColor !== "blue") {
    document.body.style.background = "blue";
  } else {
    document.body.style.background = "green";
  }
});
