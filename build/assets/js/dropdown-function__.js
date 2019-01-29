dojo.ready(function(){
	dojo.query(".lista").connect("onclick", function(){
		var text = this.innerHTML;
		var node = dojo.byId("dropdown-seleccion");
		node.innerHTML = text;
		dojo.toggleClass("dropdown-lista", "show");
	});
});

dojo.require("dijit.form.Button");

	function toggleDropdown() {
	    dojo.toggleClass("dropdown-lista", "show");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("dropdown-btn"), "onclick", toggleDropdown);
	});
	
	var odds = dojo.query(".odd");
