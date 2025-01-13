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
// function pwCheck(e){
//   pwd =e.target;
//   console.log("ssss"+pwd);
  
//   // if($(pwd).val() === $(repwd).val()){
//   //   console.log(pwd+"pwd");
//   //   console.log(pwd.val+"pwd.val");
    
//   //   $('p_pwd').text('일치').css('color','green');
      
//   // }else{
//   //   $('p_pwd').text('불일치').css('color','red')
//   // }
// }


function pwChcek() {
  let p1 = document.getElementById('password1').value;
  let p2 = document.getElementById('password2').value;
  
  if(p1.length < 6) {
          alert('입력한 글자가 6글자 이상이어야 합니다.');
          return false;
      }
      
      if( p1 != p2 ) {
        alert("비밀번호불일치");
        return false;
      } else{
        alert("비밀번호가 일치합니다");
        return true;
      }
}
