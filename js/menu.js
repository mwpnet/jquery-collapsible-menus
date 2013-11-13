(function($) {
	$.fn.treeMenu = function() {

		var colapseMenuDataHoldeer = "colapseMenuItemObject";
		var menuItemObj = function() {
			var that=this;
			
			this.subList=Array();

			this.openButton = $(document.createElement("span"))
					.addClass("open")
					.html("&rarr;")
					.click( function() {that.openSubList() } );
			this.closeButton = $(document.createElement("span"))
					.addClass("close")
					.html("&darr;")
					.click( function() {that.closeSubList() } );
				
			this.open=false;
			this.openSubList = function(){
				this.open=true;
				this.openButton.hide();
				this.closeButton.show();
				
				for(var i=0; i<this.subList.length; i++){
					$(this.subList[i]).slideDown();
				}
			};
			this.closeSubList = function() {
				this.open=false;
				this.openButton.show();
				this.closeButton.hide();
				
				for(var i=0; i<this.subList.length; i++){
					$(this.subList[i]).slideUp();
				}
			};
	
		};
		
		////////////////////////////////////
		this.find("ul").each(
				function(index,sublist){
					var listItemElem = $(sublist).closest("li");
					var listItemObj = listItemElem.data(colapseMenuDataHoldeer);
					if( listItemObj ==null){
						listItemObj = new menuItemObj();
						listItemElem.prepend( listItemObj.openButton, listItemObj.closeButton );
						listItemElem.data(colapseMenuDataHoldeer,listItemObj);
					}
					
					listItemObj.subList.push(sublist);
					listItemObj.closeSubList();
				}
				);
		return this;

	}
	
}(jQuery));

