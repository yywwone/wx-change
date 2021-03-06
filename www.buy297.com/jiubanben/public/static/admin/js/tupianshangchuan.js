// JavaScript Document
$(function() {
		$("#pic").click(function () {
			$("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
			$("#upload").on("change",function(){
				var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
				if (objUrl) {
				$("#pic").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
				}
			});
		});
		$("#pic1").click(function () {
				$("#upload1").click(); //隐藏了input:file样式后，点击头像就可以本地上传
				$("#upload1").on("change",function(){
					var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
					if (objUrl) {
					$("#pic1").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
					}
				});
			});
		$("#pic2").click(function () {
				$("#upload2").click(); //隐藏了input:file样式后，点击头像就可以本地上传
				$("#upload2").on("change",function(){
					var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
					if (objUrl) {
					$("#pic2").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
					}
				});
			});
		$("#pic3").click(function () {
				$("#upload3").click(); //隐藏了input:file样式后，点击头像就可以本地上传
				$("#upload3").on("change",function(){
					var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
					if (objUrl) {
					$("#pic3").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
					}
				});
			});
		$("#pic4").click(function () {
				$("#upload4").click(); //隐藏了input:file样式后，点击头像就可以本地上传
				$("#upload4").on("change",function(){
					var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
					if (objUrl) {
					$("#pic4").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
					}
				});
			});
		$("#pic5").click(function () {
				$("#upload5").click(); //隐藏了input:file样式后，点击头像就可以本地上传
				$("#upload5").on("change",function(){
					var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
					if (objUrl) {
					$("#pic5").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
					}
				});
			});
	
	});

	//建立一個可存取到該file的url
	function getObjectURL(file) {
		var url = null ;
		if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
		} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
		} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
		}
		return url ;
	}