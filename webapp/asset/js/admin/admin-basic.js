// --------------- 검색 ---------------
// 검색칸
const searchInput = document.querySelector(".admin-input-search");
const wrapper = document.querySelector(".admin-div-wrapper");

// input이 포커스 될 때 wrapper에 클래스 추가
searchInput.addEventListener("focus", () => {
  wrapper.classList.add("focused");
});

// input이 포커스 해제될 때 wrapper에서 클래스 제거
searchInput.addEventListener("blur", () => {
  wrapper.classList.remove("focused");
});
// ------------------------------------

// 클릭한 사이드 메뉴에 마우스 오버 효과 별도로 줌
const menuOverOut = document.querySelector('.admin-li-menuactive');
menuOver.addEventListener("mouseover", function() {
  menuOver.style.cssText  = 'background-color: #ddd; color:#003161;';
});