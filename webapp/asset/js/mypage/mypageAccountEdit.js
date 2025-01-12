//닉네임 유효성 변수
const nicknameInput = document.getElementById('nickname');
const saveButton = document.querySelector('.mypage-btn-nickname');

//비밀번호 유효성 변수
const passwordInput = document.getElementById('password');
const passwordchkInput = document.getElementById('passwordchk');
const passwordError = document.getElementById('password-error');
const passwordchkError = document.getElementById('passwordchk-error')

//닉네임 시작
function validateNickname() {
  const nickname = nicknameInput.value;
  const errorMessageElement = document.getElementById('nickname-error'); // 오류 메시지 출력 요소
  const regex = /^[a-zA-Z가-힣][a-zA-Z가-힣0-9]{0,9}$/; // 첫 글자는 문자만 허용, 나머지는 문자/숫자 허용

  if (!regex.test(nickname)) {
    errorMessageElement.textContent =
      '닉네임은 첫 글자가 숫자가 될 수 없으며, 한글, 영어, 숫자만 사용할 수 있습니다. 최대 10자까지 입력 가능합니다.';
    nicknameInput.style.borderColor = 'red'; // 입력 필드에 빨간 테두리 추가
    return false;
  }

  errorMessageElement.textContent = ''; // 오류 메시지 초기화
  nicknameInput.style.borderColor = ''; // 입력 필드 테두리 초기화
  return true;
}

// 닉네임 수정 버튼 클릭 시 유효성 검사 실행
saveButton.addEventListener('click', (event) => {
  event.preventDefault(); // 기본 동작 방지
  if (validateNickname()) {
    // 닉네임 수정 로직 추가 

    alert('닉네임이 성공적으로 수정되었습니다.');
  }
});


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


//비밀번호 일치(진행중)
function equalPassword() {
  const password = passwordInput.value;
  const passwordchk = passwordchkInput.value;

  if(passwordchk.equals(password)) {
    passwordchkError.textContent = '비밀번호가 일치하지 않습니다.';
    passwordInput.style.borderColor = 'red';
  } else {
    passwordchkError.textContent = '비밀번호가 일치합니다.';
    passwordchkError.style.color = 'green'; // 메시지 색상을 초록색으로 변경
    passwordchkInput.style.borderColor = 'green'; // 입력 필드에 초록색 테두리 추가

  }
}

// 비밀번호 입력 이벤트
passwordInput.addEventListener('input', validatePasswordLive);

passwordchkInput.addEventListener('input', equalPassword);
//비밀번호 끝