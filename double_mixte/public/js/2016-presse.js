function showPresse2016() {
	var idfond='fondpresse2016',
		idcrayon='crayonpresse2016',
		idtitre='titrepresse2016',
		idtexte='textepresse2016',
		iddate='datepresse2016';
	var widthfond='20.5vw',
		heightfond='24vh',
		widthcrayon='10%',
		heightcrayon='10%',
		sizetext='1.1vw';
		var svgcrayon='<svg version="1.1" id="'+idcrayon+'svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="'+widthcrayon+'" height="'+heightcrayon+'" viewBox="0 0 25 25.667" enable-background="new 0 0 25 25.667" xml:space="preserve"><g><g><path fill="#D03D00" d="M24.781,5.217c-0.033,1.229-0.447,2.287-1.313,3.154C18.745,13.1,14.022,17.82,9.292,22.537c-0.184,0.184-0.438,0.326-0.686,0.404c-2.391,0.748-4.787,1.473-7.178,2.215c-0.361,0.113-0.695,0.152-0.98-0.133C0.144,24.721,0.2,24.369,0.335,24c0.965-2.637,1.916-5.275,2.893-7.906c0.111-0.305,0.304-0.605,0.531-0.832c4.365-4.357,8.767-8.684,13.107-13.064c2.309-2.334,5.787-1.781,7.271,0.701C24.566,3.615,24.769,4.395,24.781,5.217z M9.959,19.631c0.123-0.074,0.183-0.1,0.224-0.139c3.063-3.063,6.123-6.127,9.182-9.189c0.035-0.033,0.064-0.07,0.096-0.107c0.775-0.936,0.883-2.314,0.271-3.365c-0.951-1.639-3.258-2.086-4.873-0.459C11.987,9.262,9.087,12.123,6.2,15c-0.07,0.068-0.119,0.156-0.207,0.277c0.385,0,0.703-0.006,1.023,0.002c0.586,0.014,0.867,0.299,0.877,0.895c0.006,0.459,0,0.916,0,1.406c0.485,0,0.916-0.002,1.344,0c0.742,0.008,1.051,0.387,0.904,1.102C10.08,18.973,10.029,19.266,9.959,19.631z M6.357,16.813c-0.406,0-0.775,0.041-1.132-0.01c-0.51-0.072-0.719,0.146-0.866,0.607c-0.326,1.006-0.707,1.994-1.07,3.002c0.881,0.453,1.496,1.092,1.817,2.006c0.927-0.281,1.791-0.543,2.652-0.82c0.098-0.031,0.209-0.152,0.232-0.252c0.17-0.727,0.32-1.457,0.488-2.23c-0.438,0-0.834,0.006-1.232-0.002c-0.592-0.01-0.879-0.291-0.889-0.879C6.351,17.775,6.357,17.316,6.357,16.813z M17.515,3.795c2.412,0.395,3.776,1.773,4.164,4.156c1.055-0.852,1.764-1.834,1.518-3.227c-0.219-1.244-0.975-2.068-2.199-2.391C19.509,1.945,18.445,2.658,17.515,3.795z"/><path fill="#D03D00" d="M18.744,7.557c-0.178,0.291-0.269,0.52-0.426,0.682c-2.49,2.504-4.986,5-7.488,7.494c-0.399,0.396-0.858,0.414-1.187,0.076c-0.313-0.326-0.297-0.771,0.084-1.15c2.504-2.514,5.013-5.02,7.523-7.525c0.252-0.252,0.57-0.426,0.9-0.215C18.384,7.063,18.537,7.326,18.744,7.557z"/></g></g></svg>',
		text='<div id="'+idtexte+'">&laquo; Le Voyage à Nantes est super : j\'y habite et je découvre encore de superbes choses ! Continuez comme ça, j\'adore !!! &raquo;</div>',
		titre='<div id="'+idtitre+'">Emma C. '+svgcrayon+'</br><div id="'+iddate+'">20 Juillet 2016</div></div>';
	
	d3.select('#presse2016').style('width',widthfond).style('height',heightfond).html(text+""+titre);
	setTimeout(function(){ $("#presse2016").css("display", "block"); }, 1000);
}
function hidePresse2016() {
	$("#presse2016").css("display", "none");
}
