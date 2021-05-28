(function() {
	require.config({
		paths: {
			"CalculationIndicator-BootstrapModules": Terrasoft.getFileContentUrl("CalculationIndicator", "src/js/CalculationIndicator-BootstrapModules.js")
		},
		map: {
			"CalculationIndicator-BootstrapModules": {
				"BootstrapModules": "BootstrapModules"
			},
			"*": {
				"BootstrapModules": "CalculationIndicator-BootstrapModules"
			}
		}
	});
})();