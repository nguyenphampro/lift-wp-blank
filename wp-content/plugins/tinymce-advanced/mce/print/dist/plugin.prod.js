"use strict";!function(){var t,n,i,e;t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.Env"),i=function(t){t.addCommand("mcePrint",function(){n.ie&&n.ie<=11?t.getDoc().execCommand("print",!1,null):t.getWin().print()})},e=function(t){t.addButton("print",{title:"Print",cmd:"mcePrint"}),t.addMenuItem("print",{text:"Print",cmd:"mcePrint",icon:"print"})},t.add("print",function(t){i(t),e(t),t.addShortcut("Meta+P","","mcePrint")})}();