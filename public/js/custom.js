
!function ($) {
    $(document).on("click","ul.nav li.parent > a ", function(){          
        $(this).find('em').toggleClass("fa-minus");      
    }); 
    $(".sidebar span.icon").find('em:first').addClass("fa-plus");
}

(window.jQuery);
	$(window).on('resize', function () {
  if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
})
$(window).on('resize', function () {
  if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
})

$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('em').removeClass('fa-toggle-up').addClass('fa-toggle-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('em').removeClass('fa-toggle-down').addClass('fa-toggle-up');
	}
})


var currentSelection = "#X1";

function showContent(id) {
	
   $(currentSelection).addClass("hidden");
	 $(id).removeClass("hidden");
	 currentSelection = id;
}

$(document).ready(function() {

	// the basics
	// ----------

	var substringMatcher = function (strs) {
		return function findMatches(q, cb) {
			var matches, substringRegex;

			// an array that will be populated with substring matches
			matches = [];

			// regex used to determine if a string contains the substring `q`
			substrRegex = new RegExp(q, 'i');

			// iterate through the pool of strings and for any string that
			// contains the substring `q`, add it to the `matches` array
			$.each(strs, function (i, str) {
				if (substrRegex.test(str)) {
					matches.push(str);
				}
			});

			cb(matches);
		};
	};

	var options = ['CRISPR','Ethereum','Bitcoin', "AI", "Yemen"];

	$('#the-basics .typeahead').typeahead({
			hint: true,
			highlight: false,
			minLength: 1.0
		},
		{
			name: 'options',
			source: substringMatcher(options)
		});
})

// server side call

function getSearchResult(e) {
	if(event.keyCode == 13) {
		var sq = e.value;
		window.location.href="/resources?q=" + sq;

	}


}

