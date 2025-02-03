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

/**
 * @feature 로그아웃 된 상태에서 스터디 항목을 클릭했을때, 로그인 페이지로 이동시킵니다.
 * @see   goPage();
 * @author 강후현
 * @since 20250114
 *  매개변수는 없고, 항목을 클릭했을때 실행되는 함수
 */

// 스터디 글 클릭시 로그인 여부 확인 후 링크 이동
function notLogin() {
  // 비로그인일 때 스터디 글 클릭시
  alert("로그인 후 이용바랍니다.");

  // 비로그인 상태일때 로그인 페이지로 이동
  location.href = "./../login/login.html";
}

/**
 * @feature 로그인 된 상태에서 스터디 항목을 클릭했을때, 그 상세 항목으로 이동합니다.
 * @see   notLogin();
 * @author 강후현
 * @since 20250114
 * @param {
 *
 * } param
 *
 * 매개 변수로 상세 페이지 id를 받습니다.
 *
 */

function goPage(param) {
  //  로그인 상태일때 스터디 상세페이지로 이동

  location.href = "./../study/studylist-detail.html"; //<----이 링크는 추후 변경 될 수 있습니다.
}

$(document).ready(function () {
  console.log("turn.js 실행됨!"); // 실행 확인용

  // turn.js 초기화
  $("#DIV-FLIPBOOK").turn({
    autoCenter: true,
  });

  // 📌 클릭한 위치에 따라 페이지 이동 (왼쪽=이전, 오른쪽=다음)
  $("#DIV-FLIPBOOK").on("click", function (event) {
    let bookWidth = $(this).width(); // 책의 너비 가져오기
    let clickX = event.pageX - $(this).offset().left; // 클릭한 X 좌표

    if (clickX < bookWidth / 2) {
      // 📌 왼쪽 클릭 → 이전 페이지
      $(this).turn("previous");
    } else {
      // 📌 오른쪽 클릭 → 다음 페이지
      $(this).turn("next");
    }
  });
});
