// writeInput이라는 변수 선언 후 .bord..div-wr..를 불러옴옴
const deletebtn = document.querySelector(".boardlistdetail-btn-editdelete");
//writeInput에 이벤트를 클릭으로 주고  alret창을 띄움 그리고 로그인화면으로 이동
deletebtn.addEventListener("click", function(){
  if( confirm("게시글을 삭제하시겠습니까?")){
    alert("삭제완료")
  }else{
    
  }
 
});