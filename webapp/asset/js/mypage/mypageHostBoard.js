// 찜 아이콘 변수
const likeIcon = document.querySelector('.mypage-img-like');
const noLikeIcon = document.querySelector('.mypage-img-nolike');

// 초기 상태 설정 (like 활성화, no-like 비활성화)
likeIcon.style.display = 'inline-block';
noLikeIcon.style.display = 'none';

// 클릭 이벤트 추가
likeIcon.addEventListener('click', () => {
  likeIcon.style.display = 'none'; // like 비활성화
  noLikeIcon.style.display = 'inline-block'; // no-like 활성화
});

noLikeIcon.addEventListener('click', () => {
  noLikeIcon.style.display = 'none'; // no-like 비활성화
  likeIcon.style.display = 'inline-block'; // like 활성화
});



document.addEventListener("click", function (event) {
  // 모달 리스트를 닫기
  const modal = document.getElementById("modal-list");
  if (!modal.contains(event.target) && event.target.className !== "mypage-div-morebtn") {
    closeModal();
  }
});

function openModal(element) {
  const modal = document.getElementById("modal-list");
  const rect = element.getBoundingClientRect();

  // 모달 위치를 클릭된 img 버튼 근처로 설정
  modal.style.left = `${rect.left}px`;
  modal.style.top = `${rect.bottom + window.scrollY}px`;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal-list");
  modal.style.display = "none";
}

function handleModalAction(action) {
  alert(`${action} go`);
  closeModal(); 
}


// 신청자 모달 열기
function openApplicantModal() {
  document.getElementById("REQUEST-LIST-MODAL").classList.remove("hidden");
}

// 신청자 모달 닫기
function closeApplicantModal() {
  document.getElementById("REQUEST-LIST-MODAL").classList.add("hidden");
}

// 드롭다운 토글
function toggleDropdown(button) {
  const body = button.parentElement.nextElementSibling;
  body.classList.toggle("hidden");

  // 버튼 텍스트 변경
  button.textContent = body.classList.contains("hidden") ? "⬇" : "⬆";
}

// 수락 버튼 동작
function acceptApplicant(name) {
  alert(`${name}님의 신청을 수락했습니다.`);
}

// 거절 버튼 동작
function rejectApplicant(name) {
  alert(`${name}님의 신청을 거절했습니다.`);
}