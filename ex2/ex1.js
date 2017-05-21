var DOC = document;
var SS = DOC.styleSheets;
var remove = '.yel'
for(var i = 0; i < SS.length; i++){
	var SSCSS = SS[i].cssRules;

	for(var j = 0; j < SSCSS.length; j++){
		if(SSCSS[j].selectorText === remove){
			SS[i].deleteRule(j);
		}
		// SSCSSdec = SSCSS[j].style;
		// for(var k = 0; k < SSCSSdec.length; k++){
		// 	console.log(SSCSSdec[k])
		// }
	}
}