// 스터디 상태 표시
$studymember = $(".studymember")
console.log($studymember);
let $currentMember = $studymember.find(".adminStudy-current");
let $limitMember = $studymember.find(".adminStudy-limit");
let $studystatus = $studymember.next('.studystatus')
console.log("!!! : " + $currentMember.text());
console.log("333 : " + $limitMember.text());


$studymember.each((item) => {
  console.log(item);
  let $currentMember = item.find(".adminStudy-current");
  let $limitMember = item.find(".adminStudy-limit");
  let $studystatus = item.next('.studystatus')
  console.log($currentMember.text());
  console.log($limitMember.text());
  
  if ($currentMember === $limitMember) {
    console.log("dd");
    $studystatus.addClass("lightdata");
    $studystatus.text("마감");
  }
});

// studyStatus.forEach((item) => {
//   console.log(item.nextSibling);

//   // item.nextSibling
// });