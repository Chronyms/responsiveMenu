/*
//Responsive Menu version 1.1, 26.11.2015, Chronym -> http://chronyms.ch / https://github.com/Chronyms/responsiveMenu
*/
$(document).ready(function(){
	if(jQuery.browser.mobile)
	{
		console.log("Mobile");
		clickDropDown();
	}
	else
	{
		console.log("Desktop");
		hoverDropDown();
	}
	$('nav').addClass('js');
});

function hoverDropDown()
{
	$("nav ul li").hoverIntent(function(e)
	{
		$(this).find('>ul').slideDown('fast');
	},
	function(e)
	{
		$(this).find('ul').slideUp('fast');
	});
};

function clickDropDown()
{
	$("li").click(function()
	{
		$('li > ul').not($(this).children("ul")).slideUp();
        $(this).children("ul").slideToggle();
	});
};