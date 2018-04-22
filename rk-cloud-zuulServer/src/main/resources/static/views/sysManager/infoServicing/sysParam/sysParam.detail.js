require(['jquery','bootstrap',rkjsPath+'rkUtil.js',rkjsPath+'rkStore.js',rkjsPath+'rkTags.js',rkjsPath+'rkFormUtil.js',rkjsPath+'rkAlert.sweet.js',rkjsPath+'rkWin.js'], function($,bt,rkUtil,rkStore,rkTags,rkFormUtil,rkAlert,rkWin) {
	'use strict'
	//初始化表单
	rkFormUtil.initForm($("#sysParamForm"));
	var btns=rkTags.btn.saveCloseBtn("sysParamBtn", false, 
	function(){
		//保存
		rkFormUtil.submitForm("sysParamForm", "/rk/admin/core/sys/param/save", function(data){
			rkAlert.succAlertMsg(data.msg);
			//关闭窗口
			parent.closeWin(true);
		});
	}, 
	function(){//关闭
		parent.closeWin(false);
	});
	
});

