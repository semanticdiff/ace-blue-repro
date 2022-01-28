var editor = ace.edit("editor");
editor.setTheme("ace/theme/sqlserver");
editor.session.setMode("ace/mode/javascript");
let value = String.raw`
All the text in this editor instance is now blue
function foo(items) {
    var x = "All this is syntax highlighted";
    return x;`;

editor.setValue(value);