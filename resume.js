const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.close_btn');
const profile = document.querySelector('.action-btn');

profile.addEventListener('click', function() {
	window.open("https://github.com/juseojo");
});
//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click', function() {
    //display 속성을 block로 변경
	setTimeout(function() {
		modal.style.display = 'block';
	}, 100);
});

//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
   //display 속성을 none으로 변경
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
	if (modal.style.display == "block" && event.target === modal)
	{
		modal.style.display = 'none';
	}
 });

function adjustBodyHeight() {
	const container = document.querySelector('.container');
	document.documentElement.style.height = `${container.scrollHeight}px`;
	document.body.style.height = `${container.scrollHeight}px`;
	modal.style.height = `${container.scrollHeight}px`
}

  // 초기 높이 설정 및 윈도우 크기 조정 시 업데이트
adjustBodyHeight();
window.addEventListener('resize', adjustBodyHeight);
