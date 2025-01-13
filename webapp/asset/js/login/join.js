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



//비밀번호 글자수 제한
function pwdLength(){
  let password = document.getElementById("INPUT-PASSWORD").value;
  // const passwordPattern = /^(?=.*[a-z])(?=.)/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,15}$/;
 

}




// 비밀번호 일치여부 검사 
function validatePassword() {
	let password = document.getElementById("INPUT-PASSWORD").value;
  let confirmPassword = document.getElementById("JOIN-REPASSWORD").value;
	let resultDiv = document.getElementById('JOIN-DIV-PWALARM');

	var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,15}$/;

	if (passwordRegex.test(password)) {
		if (password=== confirmPassword) {
			resultDiv.innerHTML = '비밀번호가 일치합니다.';
			resultDiv.style.color = 'green';
		}else{
			resultDiv.innerHTML = '비밀번호가 일치하지 않습니다.';
			resultDiv.style.color = 'red';
		}
	}else{
		resultDiv.innerHTML = '비밀번호는 최소 8자에서 15자까지, 영문자, 숫자 및 특수 문자를 포함해야 합니다.';
		resultDiv.style.color = 'red';
	}
}