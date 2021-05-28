define("CalculationIndicator-BootstrapModules", ["ext-base", "BootstrapModules"], function(Ext, BootstrapModules) {
	return Ext.apply(BootstrapModules || {}, {
		"DFCalculationIndicatorDesigner": {},
		"DFCalculationIndicatorEnum": {},
		"DFDashboardDesigner": {},
	});
});