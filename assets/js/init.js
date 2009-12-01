jQuery(document).ready(function() {
  
  //alert($('textarea.code:first:visible').length);
  if (jQuery('textarea.code:first:visible').length == 1) {
    
	 jQuery('textarea.code:first:visible').attr('id', 'code');
  	 
	 var editor = CodeMirror.fromTextArea('code', {
      height: "600px",
      parserfile: "parsexml.js",
      stylesheet: Symphony.WEBSITE + "/extensions/codemirror/assets/css/xmlcolors.css",
      path: Symphony.WEBSITE + "/extensions/codemirror/assets/js/",
      continuousScanning: 500,
      lineNumbers: true 
    });
	 
  }
  
}); 