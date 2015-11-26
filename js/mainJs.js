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