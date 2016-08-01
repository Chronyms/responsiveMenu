<!--
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
-->
<!-- Defines the file as HTML-file -->
<!DOCTYPE html>
<!-- Open the HTML-section and defines the language as german -->
<html lang="de">
	<head>
		<!-- Defines the charset as UTF 8 -->
		<meta charset="utf-8">
		<!-- Defines the viewport which is required for the responsive design -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- Defines the title of the page -->
		<title>Dropdown Menu Test</title>
		
		<!-- Links the main css-file to the page -->
		<link rel="stylesheet" type="text/css" href="css/mainCss.css" />
	</head>
	<body>
		<!-- Creates a container for the navigation -->
		<nav>
			<!-- Creates a unordered list in the nav -->
			<ul>
				<!-- Creates a unordered list-point with a local link -->
				<li><a href="#"><p>Home</p></a></li>
				<!-- Creates a unordered list-point with a local link -->
				<li><a href="#"><p>Punkt 1</p></a>
					<!-- Creates a unordered list in an unordered list -->
					<ul>
						<!-- Creates a unordered list-point with a local link -->
						<li><a href="#"><p>Unterpunkt 1</p></p></a></li>
						<!-- Creates a unordered list-point with a local link -->
						<li><a href="#"><p>Unterpunkt 2</p></a></li>
						<!-- Creates a unordered list-point with a local link -->
						<li><a href="#"><p>Unterpunkt 3</p></a></li>
					<!-- Close the unordered list in the unordered list -->
					</ul>
				</li>
				<!-- Creates a unordered list-point with a local link -->
				<li><a href="#"><p>Punkt 2</p></a></li>
				<!-- Creates a unordered list-point with a local link -->
				<li><a href="#"><p>Punkt 3</p></a>
					<!-- Creates a unordered list in an unordered list -->
					<ul>
						<!-- Creates a unordered list-point with a local link -->
						<li><a href="#"><p>Unterpunkt 1</p></a></li>
						<!-- Creates a unordered list-point with a local link -->
						<li><a href="#"><p>Unterpunkt 2</p></a></li>
						<!-- Close the unordered list in the unordered list -->
					</ul>
				</li>
				<!-- Creates a unordered list-point with a local link -->
				<li><a href="#"><p>Punkt 4</p></a></li>
				<!-- Close the unordered list -->
			</ul>
		<!-- Close the navigation container -->
		</nav>
		
		<!--Add the jQuary framework -->
		<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
		<!--Add the hoverIntent plugin -->
		<script type="text/javascript" src="js/hoverIntent.js"></script>
		<!--Add the detectMobileBrowser plugin -->
		<script type="text/javascript" src="js/detectMobileBrowser.js"></script>
		<!--Add the main javascript -->
		<script type="text/javascript" src="js/mainJs.js"></script>
	</body>
</html>