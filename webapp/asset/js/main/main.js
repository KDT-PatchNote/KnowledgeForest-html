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
      turning: function (event, page, view) {
        if (page === 1 || page === totalPages) {
          //책이 덮였을 때 -> 메뉴 이름 숨김 (포스트잇만 유지)
          $(".main-nav-menuwrap").removeClass("open");
          $(".li-menu").css("transform", `translateX(-100px)`);
        } else {
          // 책이 펼쳐졌을 때 -> 메뉴 이름 표시
          $(".main-nav-menuwrap").addClass("open");
          $(".li-menu").css("transform", `translateX(0px)`);
        }
        // 예시: 페이지 4에서 서브페이지로 비동기적으로 이동
        if (page === 4 || page === 5) {
          console.log("서브페이지로 비동기적으로 이동합니다.");
          loadSubPage(); // 비동기 콘텐츠 로딩 함수 호출
        }
      },
    },
  });

  //클릭한 위치에 따라 페이지 이동 (왼쪽=이전, 오른쪽=다음)
  // $("#DIV-FLIPBOOK").on("click", function (event) {
  //   let bookWidth = $(this).width(); // 책의 너비 가져오기
  //   let clickX = event.pageX - $(this).offset().left; // 클릭한 X 좌표
  //   let currentPage = $(this).turn("page"); // 현재 페이지

  //   if (clickX < bookWidth / 2) {
  //     // 📌 왼쪽 클릭 → 이전 페이지
  //     $(this).turn("previous");
  //   } else {
  //     // 📌 오른쪽 클릭 → 다음 페이지 (마지막 페이지에서는 막기)
  //     if (currentPage < totalPages) {
  //       $(this).turn("next");
  //     } else {
  //       return false;
  //     }
  //   }
  // });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.getElementById("loginModal");
  const openLoginBtn = document.getElementById("openLoginModal");
  const closeLoginBtn = document.getElementById("closeLoginModal");

  // 로그인 버튼 클릭 시 모달 열기
  openLoginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loginModal.style.display = "flex";
  });

  // 닫기 버튼 클릭 시 모달 닫기
  closeLoginBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  // 모달 배경 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
});

// 비동기적으로 서브페이지에서 특정 부분만 로드하는 함수
function loadSubPage() {
  // fetch를 사용하여 tempo.html을 불러오기
  fetch("./tempo.html") // tempo.html의 경로
    .then((response) => response.text()) // 서버 응답을 텍스트로 처리
    .then((data) => {
      console.log("서브페이지 로드 완료:", data);

      // 'tempo.html'에서 원하는 부분만 추출
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");

      // tempo.html에서 원하는 부분을 선택
      const newContent = doc.querySelector("#STUDYLIST-DIV-PAGE");

      // 해당 요소를 #DIV-FLIPBOOK의 page4에 삽입
      const page3 = document.querySelector(".div-page.page4"); // page3 선택
      if (page3) {
        page3.innerHTML = ""; // 기존 내용 제거
        page3.appendChild(newContent); // 새 콘텐츠 삽입

        const script = document.createElement("script");
        script.src = "../../asset/js/main/tempo.js"; // tempo.js의 실제 경로로 변경 필요
        document.body.appendChild(script);

        // tempo.html에 포함된 CSS 로드 (링크 태그)
        const cssLinks = doc.querySelectorAll("link[rel='stylesheet']");
        cssLinks.forEach((link) => {
          const newLink = document.createElement("link");
          newLink.rel = "stylesheet";
          newLink.href = link.href; // 경로가 올바른지 확인할 것
          document.head.appendChild(newLink);
        });
      }
    })
    .catch((error) => {
      console.error("서브페이지 로드 실패:", error);
    });
}
