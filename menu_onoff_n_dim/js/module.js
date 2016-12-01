/* ---------------------------------------
 * 	Infinite Scroll(무한 스크롤)
 *
 * 	2016.11.29
 * 	@eunju.K
 * 	-- 수정해야 함 **
 * ------------------------------------ */
 // function infiniteScroll() {
 // 	// jQuery
 // 	$(window).scroll(function(){
 // 		var documentHeight = $(document).height();
 // 		var currentScroll = $(window).scrollTop() + $(window).height();

 // 		// currentScroll 값과 documentHeight 값이 같아졌을 때, 
 // 		// 즉, scroll의 top 높이와 window의 높이값을 더한 값이 html 문서 높이와 같아졌을 때,
 // 		// if(currentScroll == documentHeight) {
 // 		// documentHeight 값이 현재 scroll 위치값에 100을 더한 값보다 작을 때 아래 코드 실행
 // 		// 참고: http://webisfree.com/blog/?titlequery=jquery-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0--%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-scroll-
 // 		// 사용자가 최하단이 아닌 하단보다 조금 위에 위치했더라도 미리 새로운 콘텐츠가 추가되기 위함.
	// 	if(documentHeight <= currentScroll + 100) {
	//  		// 아래 코드가 성공할 경우,
	//  		// 해당하는 콘텐츠 영역에 불러온 새로운 글을 추가
 // 			for( var i = 0; i < 10; i++ ) {
 // 				$('<h1>scroll</h1>').appendTo('body');
 // 			}
 // 		}
 // 	});
 // }

/* ---------------------------------------
 * 	dim 처리
 *
 * 	2016.11.30
 * 	@eunju.K
 * ------------------------------------ */
function wrapWindowByMask() {
	// 화면의 높이와 너비 구하기
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	// 마스크의 높이와 너비를 화면 것으로 만들어 전체 화면 채우기
	$('#mask').css({
		'width' : maskWidth,
		'height' : maskHeight
	});

	// 애니메이션 효과 : 1초동안 까맣게 됐다가 80% 불투명도로 감
	$('#mask').fadeTo("slow", 0.8);

	// 윈도우 같은 거 띄움
	$('.window').show();
}


/* ---------------------------------------
 * 	menu slide (메뉴 on/off)
 *
 * 	2016.11.30
 * 	@eunju.K
 * ------------------------------------ */
// 함수형
// function menuSlide() {	
	// $("#btn_open").on('click', function(){
	// 		if( $("#effect").hasClass('menu-active') ){
	// 			console.log($("#effect").hasClass('menu-active'));

	// 			$("#effect").removeClass('menu-active');
	// 			$("#effect").animate({left: '-200px'}, 500);
	// 			$("#button").css({"background" : "url(images/btn_right.gif)"});
	// 			console.log($("#effect").hasClass('menu-active'));
	// 		} else {
	// 			console.log($("#effect").hasClass('menu-active'));
				
	// 			$("#effect").addClass('menu-active');
	// 			$("#effect").animate({left: 0}, 500);
	// 			$("#button").css({"background" : "url(images/btn_left.gif"});
	// 			console.log($("#effect").hasClass('menu-active'));
	// 		}
	// 	}
	// );
// }
// menuSlide();

(function(global, $) {
	'use strict';

	$("#btn_open").on('click', function(e) {
		// 검은 막 띄우기
		e.preventDefault();
		wrapWindowByMask();
		// 메뉴 펼치기
		$("#effect").animate({left: 0}, 500);
	});

	// 닫기 버튼 눌렀을 때
	$("#btn_close").on("click", function(e) {
		// 링크 기본동작은 작동하지 않도록 함
		e.preventDefault();
		// 검은막 제거
		$('#mask').hide();
		// 메뉴 숨김
		$("#effect").animate({left: '-250px'}, 500);
	});

	// 검은 막을 눌렀을 때
	$('#mask').click(function() {
		$(this).hide();
		$("#effect").animate({left: '-250px'}, 500);
	});
})(this, this.jQuery);


/* ---------------------------------------
 * 	text align (글 정렬)
 *
 * 	2016.12.01
 * 	@eunju.K
 * ------------------------------------ */
 function textAlignCss(align) {
 	var textBox = $('.textBox');

 	// console.log(align);
 	textBox.css({
		'text-align' : align
	});
 }

 (function(global, $) {
	'use strict';

	var left = $('.align-left');
	var center = $('.align-center');
	
	left.on('click', function(){
		textAlignCss('left');
	});

	center.on('click', function() {
		textAlignCss('center');
	});	
})(this, this.jQuery);