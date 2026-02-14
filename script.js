const modeBtn = document.getElementById("modeBtn");

  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
      modeBtn.textContent = "☀️";
    }else{
      modeBtn.textContent = "🌙";
    }
  });
