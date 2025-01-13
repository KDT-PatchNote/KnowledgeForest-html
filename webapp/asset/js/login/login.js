
const btn_join = document.querySelector(".login-btn-join");





btn_join.addEventListener("click", (e)=>{
  if(true){
    alert("정상적으로 로그인이 되었습니다.");
    window.location.href="/webapp/html/main/main_logout.html";
  }else{
    alert("아이디 혹은 비밀번호가 일치하지 않습니다");
    
  }
});

