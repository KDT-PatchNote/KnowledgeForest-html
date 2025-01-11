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
