// 해당 유저 클릭시 유저 상세 페이지로 이동
function moveDetail(e) {
  // location.href = "./admin-userdetail.html";
}

// 탈퇴 버튼 클릭시
function quitBtn(event) {
  console.log(event);
  event.stopPropagation();
}