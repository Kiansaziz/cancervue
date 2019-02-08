'use strict';

app.factory('memberService', function($http){
	return{
		read: function(){
			var read = $http.get('api/read.php');
			return read;
		},
		readTbl:function(){
			var readTbl = $http.get('api/readTbl.php');
			return readTbl;
		},
		create: function(member){
			var add = $http.post('api/add.php', member);
			return add;
		},
		createOne : function(member){
			var addOne = $http.post('api/add.php', member);
			return addOne;
		},
		update: function(member){
			var edit = $http.post('api/edit.php', member);
			return edit;
		},
		updateOne: function(member){
			var updateOne = $http.post('api/edit.php', member);
			return updateOne;
		},
		delete: function(member){
			var del = $http.post('api/delete.php', member);
			return del;
		}
	}
});