// 찜 아이콘 변수
const likeIcon = document.querySelector('.mypage-img-like');
const noLikeIcon = document.querySelector('.mypage-img-nolike');

// 초기 상태 설정 (like 활성화, no-like 비활성화)
likeIcon.style.display = 'inline-block';
noLikeIcon.style.display = 'none';

// 클릭 이벤트 추가
likeIcon.addEventListener('click', () => {
  likeIcon.style.display = 'none'; // like 비활성화
  noLikeIcon.style.display = 'inline-block'; // no-like 활성화
});

noLikeIcon.addEventListener('click', () => {
  noLikeIcon.style.display = 'none'; // no-like 비활성화
  likeIcon.style.display = 'inline-block'; // like 활성화
});