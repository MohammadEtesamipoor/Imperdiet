let btn = document.querySelector(".btn-chat");
let chatPage = document.querySelector(".chat-online-page");

document.querySelector('.header-chat-2').onclick = function() {
    chatPage.style.opacity=0;
    btn.style=`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    border: none;
    background-color: rgb(228, 184, 236);
    top: 76vh;
    left: 93vw;
    z-index: 11000;
    .oval{
      position: absolute;
      margin-top: -30px;
      margin-left: -35px;
      width: 10px;
    }
    .shape {
        height: 25px;
       width: 25px;
       // clip-path: polygon(0% 38%,100% 10%,40% 100%,47% 49%);
     }
    `
}
btn.onclick = function () {
  let btn1 = document.querySelector(".shape");
  let degrees = 0;
  let opa = 0.0;
  let tim = setInterval(() => {
    degrees++;
     opa = opa + 0.1;
    if(degrees ===45) clearInterval(tim);
    chatPage.style.opacity=opa;
    btn.style = `clip-path: polygon(0% 32.34%, 14.87% 27.14%, 33.96% 21.05%, 100% 0%, 80.42% 40.23%, 64.38% 73.2%, 58.91% 84.44%, 52.64% 40.23%); 
    transform: rotate(${degrees}deg);
    background-color: rgba(118, 17, 136, 0.952);
    `
  }, 8);
};
let btnChatOnline = document.querySelector(".oval");
setInterval(() => {
  if (btnChatOnline.style.display !== "none")
    btnChatOnline.style.display = "none";
  else if (btnChatOnline.style.display == "none")
    btnChatOnline.style.display = "block";
}, 500);
