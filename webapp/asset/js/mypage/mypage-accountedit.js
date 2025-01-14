//닉네임 유효성 변수
const nicknameInput = document.getElementById('nickname');
const nicknameError = document.getElementById('nickname-error');
const identifyBtn = document.querySelector('.mypage-btn-nickname');

//비밀번호 유효성 변수
const passwordInput = document.getElementById('password');
const passwordchkInput = document.getElementById('passwordchk');
const passwordError = document.getElementById('password-error');
const passwordchkError = document.getElementById('passwordchk-error')

//핸드폰 번호 변수
const phoneNumInput = document.getElementById('phoneNum');
const phoneNumchkInput = document.getElementById('phoneNumchk');
const sendButton = document.querySelector('.mypage-btn-phoneNum-send');

//저장 버튼
const saveButton = document.querySelector('.mypage-btn-edit');


// 닉네임 유효성 검사 함수
function validateNickname() {
  const nickname = nicknameInput.value;
  const regex = /^[a-zA-Z가-힣][a-zA-Z가-힣0-9]{0,14}$/; // 첫 글자는 문자만 허용, 최대 15자

  if (!regex.test(nickname)) {
    nicknameError.textContent =
      '닉네임은 첫 글자가 숫자가 될 수 없으며, 한글, 영어, 숫자만 사용할 수 있습니다. 최대 15자까지 입력 가능합니다.';
    nicknameError.style.color = 'red'; // 오류 메시지 빨간색
    nicknameInput.style.borderColor = 'red'; // 입력 필드 테두리 빨간색
  } else {
    nicknameError.textContent = '사용 가능한 닉네임입니다.';
    nicknameError.style.color = 'green'; // 메시지 초록색
    nicknameInput.style.borderColor = 'green'; // 입력 필드 테두리 초록색
  }
}

//닉네임 중복 여부
function duplicateNickname() {
  const duplicatebtn = identifyBtn.value;
  if(true) {
    alert("사용할 수 있는 닉네임 입니다.");
  }else{
    alert("중복된 닉네임이 있습니다.");
  }
};

// 전송 버튼 클릭 이벤트 리스너
identifyBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  duplicateNickname();
});


// 입력 이벤트 리스너
nicknameInput.addEventListener('input', validateNickname);

//닉네임 끝


//비밀번호 시작
// 실시간 유효성 검사 함수
function validatePasswordLive() {
  const password = passwordInput.value;
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  if (!regex.test(password)) {
    if (password.length < 8) {
      passwordError.textContent = '비밀번호는 최소 8자 이상이어야 합니다.';
    } else if (password.length > 20) {
      passwordError.textContent = '비밀번호는 최대 20자까지 입력 가능합니다.';
    } else if (!/[A-Z]/.test(password)) {
      passwordError.textContent = '비밀번호에는 최소 하나의 대문자가 포함되어야 합니다.';
    } else if (!/[a-z]/.test(password)) {
      passwordError.textContent = '비밀번호에는 최소 하나의 소문자가 포함되어야 합니다.';
    } else if (!/\d/.test(password)) {
      passwordError.textContent = '비밀번호에는 최소 하나의 숫자가 포함되어야 합니다.';
    } else if (!/[@$!%*?&]/.test(password)) {
      passwordError.textContent = '비밀번호에는 최소 하나의 특수문자가 포함되어야 합니다.';
    } else {
      passwordError.textContent = '알 수 없는 오류가 발생했습니다.';
    }
    passwordInput.style.borderColor = 'red'; // 입력 필드에 빨간 테두리 추가
  } else {
    passwordError.textContent = '사용 가능한 비밀번호입니다.';
    passwordError.style.color = 'green'; // 메시지 색상을 초록색으로 변경
    passwordInput.style.borderColor = 'green'; // 입력 필드에 초록색 테두리 추가
  }
}

// 비밀번호 확인 입력칸
document.addEventListener('DOMContentLoaded', function () {
  const passwordField = document.getElementById('password');
  const passwordChkField = document.getElementById('passwordchk');
  const passwordChkError = document.getElementById('passwordchk-error');

  passwordChkField.addEventListener('input', function () {
    if (passwordChkField.value === '') {
      passwordChkError.textContent = ''; // 입력이 비어 있을 때 메시지 없음
    } else if (passwordChkField.value === passwordField.value) {
      passwordChkError.textContent = '동일한 비밀번호 입니다'; // 비밀번호가 동일
      passwordChkError.style.color = 'green';
    } else {
      passwordChkError.textContent = '비밀번호가 다릅니다'; // 비밀번호가 다름
      passwordChkError.style.color = 'red';
    }
  });
});

// 비밀번호 입력 이벤트
passwordInput.addEventListener('input', validatePasswordLive);
//비밀번호 끝


// 핸드폰 번호 시작
// 핸드폰 번호 자동 포맷팅 및 길이 제한
function formatPhoneNumber(event) {
  let phoneNum = phoneNumInput.value.replace(/[^\d]/g, ''); // 숫자만 칠수있게 하기

  if (phoneNum.length > 11) {
    phoneNum = phoneNum.slice(0, 11); // 11자리에서 넘어가면 타자못침
  }

  // '000-0000-0000' 형태로 변환
  if (phoneNum.length > 7) {
    phoneNum = phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (phoneNum.length > 3) {
    phoneNum = phoneNum.replace(/(\d{3})(\d{4})?/, '$1-$2');
  }

  phoneNumInput.value = phoneNum;
}

// 입력 이벤트: 사용자가 타자를 칠 때마다 호출
phoneNumInput.addEventListener('input', formatPhoneNumber);

//인증번호 확인
document.addEventListener('DOMContentLoaded', function () {
  const phoneNumChkField = document.getElementById('phoneNumchk');
  const phoneNumChkError = document.getElementById('phoneNumchk-error');
  const phoneNumChkButton = document.querySelector('.mypage-btn-phoneNum-check');

  phoneNumChkField.addEventListener('input', function () {
    // 현재 입력값에서 숫자가 아닌 문자를 제거
    phoneNumChkField.value = phoneNumChkField.value.replace(/[^0-9]/g, '');

    // 길이를 6자로 제한
    if (phoneNumChkField.value.length > 6) {
      phoneNumChkField.value = phoneNumChkField.value.slice(0, 6);
    }

    // 유효성 검사 메시지
    if (phoneNumChkField.value.length < 6) {
      phoneNumChkError.textContent = '6자리 숫자를 입력해주세요.';
      phoneNumChkError.style.color = 'red';
    } else {
      phoneNumChkError.textContent = '';
    }
  });

  phoneNumChkButton.addEventListener('click', function () {
    if (phoneNumChkField.value.length === 6) {
      alert('확인되었습니다');
    } else {
      alert('다시 입력하세요');
    }
  });
});




// 전송 버튼 클릭 이벤트
function validatePhoneNumber() {
  const phoneNum = phoneNumInput.value.replace(/[^\d]/g, ''); // 숫자만 남기기

  if (phoneNum.length !== 11) {
    alert('전화번호 양식이 아닙니다. 11자리를 입력해주세요.');
    return false;
  }

  alert('인증번호를 보냈습니다.');
  return true;
}


// 전송 버튼 클릭 이벤트 리스너
sendButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  validatePhoneNumber();
});

// 핸드폰 번호 끝





//수정버튼 클릭 시작
// 수정한 내용 저장 버튼 클릭시
saveButton.addEventListener("click", (e)=> {
  if(true){
    alert("회원정보가 수정되었습니다.");
    window.location.href="/webapp/html/main/main_logout.html";
  }else{
    alert("오류가 발생했습니다.");
  }
  console.log("test");
});
//수정버튼 클릭 끝