// // modal.js

// document.addEventListener("DOMContentLoaded", () => {
//     const loginModal = document.getElementById("loginModal");
//     const openLoginBtn = document.getElementById("openLoginModal");
//     const closeLoginBtn = document.getElementById("closeLoginModal");

//     // 로그인 버튼 클릭 시 모달 열기
//     openLoginBtn.addEventListener("click", (event) => {
//         event.preventDefault(); // 기본 링크 동작 방지
//         loginModal.style.display = "flex";
//     });

//     // 닫기 버튼 클릭 시 모달 닫기
//     closeLoginBtn.addEventListener("click", () => {
//         loginModal.style.display = "none";
//     });

//     // 모달 배경 클릭 시 닫기
//     window.addEventListener("click", (event) => {
//         if (event.target === loginModal) {
//             loginModal.style.display = "none";
//         }
//     });

//     console.log("모달 스크립트 로드 완료 ✅");
// });

