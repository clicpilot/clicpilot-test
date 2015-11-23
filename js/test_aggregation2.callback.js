function Default_QueryEntAggr2Aggr_AfterRun(ctx) {

	var obj = ctx.get("_Out");
	var data = obj.get("data");
	if(data!=null) {
		for(var i=0;i<data.length;i++) {
			if(data[i].get("AVGProp2")!=null) {
				data[i].put("AVGProp2", Math.round(data[i].get("AVGProp2")));
			}
			if(data[i].get("SUMProp2")!=null) {
				data[i].put("SUMProp2", Math.round(data[i].get("SUMProp2")));
			}
		}
	}
	

}
