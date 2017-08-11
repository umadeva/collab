sap.ui.jsview("collabtest.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function() {
		return "collabtest.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function(oController) {
		var displayLabel = new sap.m.Label("idLabel", {
			width: "100%",
			text: "Hi text from javascript",
			textAlign: sap.ui.core.TextAlign.Left
		});
		var oPage = new sap.m.Page({
			title: "{i18n>title}",

			content: [displayLabel]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});