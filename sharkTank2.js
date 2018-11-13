// JavaScript Document
$(document).ready(function(){
	$("#slideImg2").hide();
	$("#slideImg3").hide();
	
	var slideIndex = 1;
	showSlide(slideIndex);
	
	function plusDivs(n){
		showSlide(slideIndex += n);
	}
	
function showSlide(n) {
	var x = document.getElementsByClassName("mySlides");
	if(n > x.length) {slideIndex = 1}
	if( n<1) {slideIndex = x.length}
	for (var i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}	
	
});

	var slideIndex = 1;
	showSlide(slideIndex);
	
	function plusDivs(n){
		showSlide(slideIndex += n);
	}
	
function showSlide(n) {
	var x = document.getElementsByClassName("mySlides");
	if(n > x.length) {slideIndex = 1}
	if( n<1) {slideIndex = x.length}
	for (var i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}	