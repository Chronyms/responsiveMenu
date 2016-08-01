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

 // Execute the script while the page loads
$(document).ready(function(){
	// Check for mobile browsers
	if(jQuery.browser.mobile)
	{
		// If mobile, return "Mobile"
		console.log("Mobile");
		// Execute mobile dropdown
		clickDropDown();
	}
	else
	{
		// If not mobile, return "Desktop"
		console.log("Desktop");
		// Execute Desktop dropdown
		hoverDropDown();
	}
	// Add class "js" to "nav"-container
	$('nav').addClass('js');
});

// Desktop dropdown function
function hoverDropDown()
{
	// Detect hovers of the curser
	$("nav ul li").hoverIntent(function(e)
	{
		// Slide down the next "ul"
		$(this).find('>ul').slideDown('fast');
	},
	// After hover
	function(e)
	{
		// Slide up the next "ul"
		$(this).find('ul').slideUp('fast');
	});
};

// Mobile dropdown function
function clickDropDown()
{
	// If click on "li"
	$("li").click(function()
	{
		// Slide Up exept the children of ul
		$('li > ul').not($(this).children("ul")).slideUp();
		// Show / Hide the dropdown
        $(this).children("ul").slideToggle();
	});
};