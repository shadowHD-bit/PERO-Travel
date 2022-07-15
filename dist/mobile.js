let mobileButton = document.getElementById("mobile-btn");
let win_mobile = document.querySelector(".mobile_navs");
let header = document.querySelector(".header_content");

mobileButton.addEventListener("click", () => {
  if (mobileButton.className == "fas fa-bars") {
    mobileButton.classList.remove("fa-bars");
    mobileButton.classList.add("fa-times");
    win_mobile.style.visibility = "visible";
    header.style.backgroundColor = "#384D70";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

  } else {
    mobileButton.classList.remove("fa-times");
    mobileButton.classList.add("fa-bars");
    win_mobile.style.visibility = "hidden";
    header.style.backgroundColor = "";
    document.body.style.overflow = "visible";
  }
});
