// 배너

// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelectorAll(".main-div-banner img");
//   let currentIndex = 0;

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.classList.remove("main-div-banneractive");
//       if (i === index) {
//         slide.classList.add("main-div-banneractive");
//       }
//     });
//   }

//   showSlide(currentIndex);

//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }, 3500);
// });


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
    console.log("현재 배너 인덱스:", index); // 현재 보여지는 배너 인덱스 확인
  }

  showSlide(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    console.log("변경된 배너 인덱스:", currentIndex); // 배너가 변경되는지 확인
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
  alert("로그인 후 이용바랍니다.");
  location.href = "./../login/login.html";
}

/**
 * @feature 로그인 된 상태에서 스터디 항목을 클릭했을때, 그 상세 항목으로 이동합니다.
 * @see   notLogin();
 * @author 강후현
 * @since 20250114
 * @param {string} param - 상세 페이지 id
 */

function goPage(param) {
  location.href = "./../study/studylist-detail.html"; //<----이 링크는 추후 변경될 수 있습니다.
}

// 📌 jQuery 실행
$(document).ready(function () {
  console.log("turn.js 실행됨!"); // 실행 확인용

  let totalPages = $("#DIV-FLIPBOOK").children(".div-page").length; // 실제 콘텐츠 페이지 개수 계산

  // turn.js 초기화
  $("#DIV-FLIPBOOK").turn({
    autoCenter: true,
    pages: totalPages, // 정확한 페이지 수 설정
    when: {
      turned: function (event, page, view) {
        console.log("현재 페이지:", page);
        if (page === 1 || page === totalPages) {
          // 📌 책이 덮였을 때 -> 메뉴 이름 숨김 (포스트잇만 유지)
          $(".main-nav-menuwrap").removeClass("open");
        } else {
          // 📌 책이 펼쳐졌을 때 -> 메뉴 이름 표시
          $(".main-nav-menuwrap").addClass("open");
        }
      },
    },
  });

  // 📌 클릭한 위치에 따라 페이지 이동 (왼쪽=이전, 오른쪽=다음)
  $("#DIV-FLIPBOOK").on("click", function (event) {
    let bookWidth = $(this).width(); // 책의 너비 가져오기
    let clickX = event.pageX - $(this).offset().left; // 클릭한 X 좌표
    let currentPage = $(this).turn("page"); // 현재 페이지

    if (clickX < bookWidth / 2) {
      // 📌 왼쪽 클릭 → 이전 페이지
      $(this).turn("previous");
    } else {
      // 📌 오른쪽 클릭 → 다음 페이지 (마지막 페이지에서는 막기)
      if (currentPage < totalPages) {
        $(this).turn("next");
      } else {
        console.log("마지막 페이지라서 더 이상 넘어가지 않음.");
        return false;
      }
    }
  });
});

