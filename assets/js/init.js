jQuery(document).ready(function () {

	var $textarea = jQuery('textarea.code:first:visible');

	if ($textarea.length == 1) {
		$textarea.attr('id', 'code');

		// Set up a function for the fold functionality.
		var foldFunction = CodeMirror.newFoldFunction(CodeMirror.tagRangeFinder);

		// Start up the editor with the proper configuration options.
		var editor = CodeMirror.fromTextArea($textarea[0], {

			// Having this can highlight both HTML and XML.
			mode: 'htmlmixed',

			// This is a good theme.
			theme: 'elegant',

			// Some stuff to do with the keyboard shortcuts.
			extraKeys: {
				// The following closes the tag when '>' or '/' are pressed.
				"'>'": function (cm) {
					cm.closeTag(cm, '>');
				},
				"'/'": function (cm) {
					cm.closeTag(cm, '/');
				},
				// Trigger the fold action via shortcut.
				"Ctrl-Q": function (cm) {
					foldFunction(cm, cm.getCursor().line);
				},
				// TODO: Maybe. Attach the Ctrl+S shortcut to form submission.
				//"Ctrl-S": function(cm) { cm.save(); console.log(cm.getTextArea()); }
			},

			// Empty lines are wiped off their whitespace.
			autoClearEmptyLines: true,
			// Show line numbers.
			lineNumbers: true,
			// Autofocus the editor on load.
			autofocus: true,
			// Various things we are going to be doing on cursor activity event.
			onCursorActivity: function () {

				editor.setLineClass(hlLine, null, null);
				hlLine = editor.setLineClass(editor.getCursor().line, null, "activeline");

				// Set the class for the line highlighting.
				editor.matchHighlight("CodeMirror-matchhighlight");
			},

			// Trigger the fold action when clicking on gutter.
			onGutterClick: foldFunction,

		});
		
		// Highlight the first line since the editor is set to autofocus on load.
		hlLine = editor.setLineClass(0, null, "activeline");
	}

});