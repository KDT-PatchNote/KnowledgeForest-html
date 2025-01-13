const all = document.querySelector('input.join-input-checkbox-big');
const terms = document.querySelectorAll('input.join-input-checkbox-small');

NodeList.prototype.map = Array.prototype.map;

//전체동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
all.addEventListener('click', () => {
  terms.forEach((term) => {
    console.log(term);
    term.checked = all.checked;
  });
});

//약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
terms.forEach((term)=>{
  term.addEventListener(`click`, () =>{
    all.checked = terms.map((term) => term.checked).filter((checked)=>checked).length === 2;

  })
});
const pwd = document.getElementById('password');
const repwd = document.getElementById('repassword');
const p_repwd = document.getElementById('join-p-repwd');

function pwdCheck() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("repassword").value;
 
  if (password !== confirmPassword) {
    document.getElementById("JOIN-DIV-PWALARM").innerText =
      "비밀번호가 일치하지 않습니다. 다시 입력해주십시오.";
      document.getElementById("JOIN-DIV-PWALARM").style.color = "red";

  } else {
    document.getElementById("JOIN-DIV-PWALARM").innerText =
      "비밀번호가 일치합니다.";
      document.getElementById("JOIN-DIV-PWALARM").style.color = "green";
  }
}
