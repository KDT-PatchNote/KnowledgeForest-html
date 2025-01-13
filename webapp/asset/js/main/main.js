// 배너
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".main-div-banner img");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("main-div-banneractive");
      if (i === index) {
        slide.classList.add("main-div-banneractive");
      }
    });
  }

  showSlide(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3500);
});


// 스터디 글 클릭시 로그인 여부 확인 후 링크 이동
function notLogin(num) {
  // 비로그인일 때 스터디 글 클릭시
  alert("로그인 후 이용바랍니다.");

  // 비로그인 상태일때 로그인 페이지로 이동
  location.href = "./../login/login.html";

  //  로그인 상태일때 스터디 상세페이지로 이동
  // location.href ="./../study/studylist-detail.html";
}
