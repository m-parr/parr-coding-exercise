
// add commas to mentions
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

awesomeBands = function () {
	var newPoll = new window.massrel.Poller({
	    frequency: 15,
	    limit: 5
	}, updateBands),
	
	// grab limit value for updateBands loop	
	bandDisplay = {
    	numOfBands : newPoll.config.limit
	};
  	
  	// access .start() to initialize awesomeBands() outside of function
	return {
		init: function () {
			newPoll.start();
		}
	};
  	
  	// update bands and add fade in (with CSS Transitions)
	function updateBands (data) {
		
		$('.band-row').remove();
		
		for (var i = 0; i < bandDisplay.numOfBands; i++) {
			$('#leaderboard').append('<div class="band-row"><p>' + data[i].name + '</p><span>' + addCommas(data[i].count) + '</span></div>');
		}
    	
    	setTimeout(function() {
    		$('.band-row').addClass('fade-in')
    	}, 300);
    
	}
	
}();

awesomeBands.init();




