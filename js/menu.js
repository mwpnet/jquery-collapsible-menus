// Many things are hard coded in here 
// that should be options in later 
// versions. All the ones marked with 
// an XXX should be turned into an 
// option

(function($) {
	$.fn.treeMenu = function() {
		// the label the data container
		// needs to long so there's no chance of conflicting with other data entries.
		var colapseMenuDataHolderId = "colapseMenuItemObject";
		
		// basic object that holds all 
		// the element referenced in 
		// each menu so it doesn't have
		// to be searched for every 
		// single time
		var menuItemObj = function() {
			var that=this; // avoiding complicated scoping of 'this'
			
			this.subList=Array();
			// creates the open and close buttons
			this.openButton = $(document.createElement("span"))
					.addClass("openButton")
					.html("&rarr;") // XXX
					.click( function() {that.openSubList() } );
			this.closeButton = $(document.createElement("span"))
					.addClass("closeButton")
					.html("&darr;") // XXX
					.click( function() {that.closeSubList() } );
				
			// the methodes called to open and close the immediate sub-menu
			this.open=false;
			this.openSubList = function(){
				this.open=true;
				this.openButton.hide();
				this.closeButton.show();
				
				for(var i=0; i<this.subList.length; i++){
					$(this.subList[i]).slideDown(); // XXX
				}
			};
			this.closeSubList = function() {
				this.open=false;
				this.openButton.show();
				this.closeButton.hide();
				
				for(var i=0; i<this.subList.length; i++){
					$(this.subList[i]).slideUp(); // XXX
				}
			};
	
		};
		
		////////////////////////////////////
		// find each sub-menu, and adds
		// it to the list of sub-menus 
		// that will be opened and 
		// closed, creating the 
		// relevant object if necessary
		this.find("ul").each( // XXX
				function(index,sublist){
					var listItemElem = $(sublist).closest("li"); // XXX
					var listItemObj = listItemElem.data(colapseMenuDataHolderId);
					
					if( listItemObj ==null){
						// if no existing data entry, create a new one
						listItemObj = new menuItemObj();
						listItemElem.prepend( listItemObj.openButton, listItemObj.closeButton );
						listItemElem.data(colapseMenuDataHolderId,listItemObj);
					}
					
					listItemObj.subList.push(sublist);
					listItemObj.closeSubList();
				}
				);
		return this;

	}
	
}(jQuery));

