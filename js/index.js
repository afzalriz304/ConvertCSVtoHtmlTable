var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope){
  $scope.fileNameChanged = function (event) {
		var input = event.target;

		var reader = new FileReader();
		reader.onload = function(){
		  var text = reader.result;
		  console.log(reader.result);
		  var fileTxt=reader.result;
		  $scope.createTable(fileTxt);
		};
		reader.readAsText(input.files[0]);
	};
		
	$scope.createTable=function(file){
		var i=0;
		var row=file.split("\n");
		row.forEach(function(r,i){
			var cells=r.split(",");
			console.log("cell",i,cells);
			if(i==0){
				$("#importData").append("<thead id='tableHd'></thead>")
				$("#tableHd").append("<tr id='title'></tr>");
				cells.forEach(function(c){
					$("#title").append("<th style='color:black;'>"+c.replace(/\"/g,'')+"</th>");
				})
			}
			else{
				var id="tbody"+i;
				$("#importData").append("<tr id="+id+"></tr>");
				cells.forEach(function(c){
					$("#"+id).append("<td>"+c.replace(/\"/g,'')+"</td>");
				})
			}
		})
	}
	
	$scope.visibility=true;
	
	$scope.showHomePage=function(tab){
		$scope.visibility=true;
	}
	
	$scope.showMyProfile=function(tab){
		$scope.visibility=false;
	}
})
