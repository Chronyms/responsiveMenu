/*
 * ----------------------------------------------------------------------------------
 * This is the "DIFFERENT-BEER-WARE LICENSE" -> (v0.1):
 * I (Chronyms / <chronyms@outlook.com>) wrote this Licence-File on the Basement of
 * "THE BEER-WARE LICENSE" (Revision 42). Based on the Sense of "THE BEER-WARE LICENSE",
 * can you do whatever you want with this stuff, as long as you didn't remove the 
 * Licence-File / Licence-Section.
 * The only condition is, that you say thank you, to the creator. You can therefore send
 * a E-Mail with some nice words, send a Letter with some words and images or buy me a
 * Beer, if we meet someday.
 * And btw., please do crazy stuff.
 * -----------------------------------------------------------------------------------
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