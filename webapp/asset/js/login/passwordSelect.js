const btn_check = document.getElementById("PASSWORDSELECT-BTN-CHECK");
const input_authentication_number = document.getElementById(".input-authentication-number");

btn_check.addEventListener("click", (e)=>{
  if(true){
    alert("인증번호가 일치합니다.");
    window.location.href="passwordSelect-detail.html";
  }else{
    alert("인증번호가 일치하지 않습니다.");
    
  }
});