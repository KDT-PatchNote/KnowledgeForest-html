
//파일 첨부시 파일명 표시
const fileInput = document.querySelector("input[name='file']");
const fileLabel = document.querySelector("#STUDYLIST-INPUT-FILELABEL");

fileInput.addEventListener("change", (e) => {
  const filename = e.target.files[0].name;
  fileLabel.textContent = filename;
});

//뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동
function goBack() {
  window.history.back();
}

// 글 등록을 눌렀을 때  alert, 스터디 목록 페이지로 이동
function updateBoard() {
  if (confirm("게시글을 등록하시겠습니까?")) {
    alert("스터디가 등록되었습니다.");
    location.href = "./boardlist.html";
  }
}