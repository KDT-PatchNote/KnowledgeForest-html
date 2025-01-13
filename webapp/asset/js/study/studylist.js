const searchInput = document.querySelector(".studylist-input-search");
const wrapper = document.querySelector(".studylist-div-wrapper");

// input이 포커스 될 때 wrapper에 클래스 추가
searchInput.addEventListener("focus", () => {
  wrapper.classList.add("focused");
});

// input이 포커스 해제될 때 wrapper에서 클래스 제거
searchInput.addEventListener("blur", () => {
  wrapper.classList.remove("focused");
});

// 카테고리 선택시 selected 클래스 추가
const categoryWrapper = document.querySelector(
  ".studylist-div-categoryWrapper"
); // 상위 컨테이너 선택
const categoryList = document.querySelectorAll(".studylist-div-category"); // 모든 카테고리 요소 선택
categoryList.forEach((item) => {
  item.addEventListener("click", () => {
    // 현재 선택된 항목에서 selected 제거
    categoryWrapper.querySelector(".selected").classList.remove("selected");

    // 클릭된 항목에 selected 추가
    item.classList.add("selected");
  });
});

//
//스터디 리스트에서 스터디를 선택하면
//해당 스터디 상세로 이동시키는 함수
  const studyList = document.querySelectorAll(".studylist-div-group");
  studyList.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "studylist-detail.html"; // 이동
    });
  });

  //메인으로 가기 버튼을 눌렀을때 메인으로 이동시키는 함수
  function registerStudy(){
    window.location.href="./studylist-write.html";
  }

