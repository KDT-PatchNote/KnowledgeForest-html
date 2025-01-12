const btn_complete = document.querySelector(".btn-complete");

btn_complete.addEventListener("click", (e)=>{
  if(true){
    alert("정상적으로 비밀번호가 변경되었습니다.");

    window.location.href="login.html";
  }else{
    alert("비밀번호가 변경되지 않았습니다");
    
  }
});