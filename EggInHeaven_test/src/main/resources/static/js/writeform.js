$(document).ready(function(){
	
 
//submit 버튼 클릭할 때 이벤트 부분
	$("form[action=add]").submit(function(){
	
		if($.trim($("#commu_pass").val())==""){
			alert("비밀번호를 입력하세요");
			$("#commu_pass").focus();
			return false;
		}
		if($.trim($("#commu_subject").val())==""){
			alert("제목을 입력하세요");
			$("#commu_subject").focus();
			return false;
		}
		if($.trim($("textarea").val())==""){
			alert("내용을 입력하세요");
			$("textarea").focus();
			return false;
		}
	});
	
	$("#upfile").change(function(){
		console.log($(this).val()) // c:\fakepath\upload.png
	    var inputfile = $(this).val().split('\\');
		$('#filevalue').text(inputfile[inputfile.length -1]);
	});
	});
	

