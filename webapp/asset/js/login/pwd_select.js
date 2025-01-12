const btn_check = document.querySelector(".btn-check");
const input_authentication_number = document.querySelector(".input-authentication-number");

btn_check.addEventListener("click", (e)=>{
  if(true){
    alert("인증번호가 일치합니다.");
    window.location.href="pwd_select_after.html";
  }else{
    alert("인증번호가 일치하지 않습니다.");
    
  }
});