
/* Examaple to call Internationl telephone field */ 
$("#phone1, #phone2, #phone3, #phone4").intlTelInput({
	initialCountry: "ae",
	onlyCountries: [],
	preferredCountries: [ "ae", "in" ],
	separateDialCode: true,
	utilsScript: "utils.js"
});

/* Custom Datepicker1 (old picker) */
$( "#datepicker, #datepicker-1, #datepicker-2, #baseEduCertIssueDate, #baseEduCertExpiryDate, #baseEduDegreeStudyFrom, #baseEduDegreeStudyTo, #baseEduDegreeIssueDate, #baseEduDegreeExpectedIssueDate").datepicker({
 	dateFormat: "dd/mm/yy",
 	changeMonth: true,
    changeYear: true
});

/* jquery select menu trigger */ 
$( "#option, #Speciality, #commpref, #country, #pofb, #baseEduDegreeCountry, #baseEduDegreeMode, #baseEduCertCountry, #Select-authority, #role" ).selectmenu();




/* Data Tables Code Starts */
    $('#table').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"dom": '<"top"f>rt<"bottom"lip>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "_START_ - _END_ of _TOTAL_ items",
			"sSearch": "",
			"sSearchPlaceholder": "Type to filter"
        },
		"language": {
            "lengthMenu": "Items per page: _MENU_",
            "zeroRecords": "Nothing found - sorry",
            "info": "_PAGE_ - _PAGES_ of _MAX_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    });
	
	$('#table-smd').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"dom": '<"top"f>rt<"bottom"i>',
		"oLanguage": {
			"sInfo": "Showing all _TOTAL_ professionals in this facility",
			"sSearch": "",
			"sSearchPlaceholder": "Type to filter"
        },
		"language": {
            "lengthMenu": "Items per page: _MENU_",
            "zeroRecords": "Nothing found - sorry",
            "info": "_PAGE_ - _PAGES_ of _MAX_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    });
	
	
    $('#table-circular').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom"lip>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "_START_ - _END_ of _TOTAL_ items",
			"sSearch": "",
			"sSearchPlaceholder": "Search circulars"
        },
		"language": {
            "lengthMenu": "Items per page: _MENU_",
            "zeroRecords": "Nothing found - sorry",
            "info": "_PAGE_ - _PAGES_ of _MAX_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    });	
	
	
	
	
    $('#faq-circular').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom" >',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "_START_ - _END_ of _TOTAL_ items",
			"sSearch": "",
			"sSearchPlaceholder": "Search circulars"
        },
		"language": {
            "lengthMenu": "Items per page: _MENU_",
            "zeroRecords": "Nothing found - sorry",
            "info": "_PAGE_ - _PAGES_ of _MAX_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    });	
	
/* Data Tables Code Starts */


/* Multiselect dropdown Code Starts */
// Events
$('.dropdown-container')
	.on('click', '.dropdown-button', function() {
    	$('.dropdown-list').toggle();
	})
	.on('input', '.dropdown-search', function() {
    	var target = $(this);
    	var search = target.val().toLowerCase();
    
    	if (!search) {
            $('li').show();
            return false;
        }
    
    	$('li').each(function() {
        	var text = $(this).text().toLowerCase();
            var match = text.indexOf(search) > -1;
            $(this).toggle(match);
        });
	})
	.on('change', '[type="checkbox"]', function() {
    	var numChecked = $('[type="checkbox"]:checked').length;
    	$('.quantity').text(numChecked || '');
	});

// JSON of States for demo purposes
var usStates = [];

// <li> template
var stateTemplate = _.template(
  //  '<li>' + '<input name="<%= abbreviation %>" type="checkbox">' + '<label for="<%= abbreviation %>"><%= capName %></label>' + '</li>'
    '<li>' + '<div class="container-check-tabled pull-right">' + '<div class="left-sm checkbox-sm"><input name="<%= abbreviation %>" id="<%= abbreviation %>" type="checkbox"><label for="<%= abbreviation %>"></label></div>' + '<div for="<%= abbreviation %>" class="right-sm"><%= capName %></div></div>' + '</li>'
);

// Populate list with states
_.each(usStates, function(s) {
    s.capName = _.startCase(s.name.toLowerCase());
    $('.dropdown-container ul').append(stateTemplate(s));
});
/* Multiselect dropdown Code Ends */




 
 /*function setHeight() {
    windowHeight = $(window).innerHeight();
	headerHeight =(document.getElementById('branding-section').offsetHeight);
 	windowHeight = windowHeight-headerHeight;
   $('.video-bar').css('max-height', windowHeight);
   $('.video-bar').css('min-height', windowHeight);
 //$('.video-bar').css('height', windowHeight);
   $('.video-bar').css('width', '100%');
 };
  setHeight();
 $(window).resize(function() {
	setHeight();
 });  */
/* Home Page Video Full Screen Code End */




/* Custom Datepicker2 (Beatpicker) Options code Starts */
customOptions = {
	view : {
		alwaysVisible:true,
		position:["bottom" , "left"],
	},
	modules: {
		header: true,
		footer: false,
		daysOfTheWeek: true,
		navBar: true,
		today: true,
		gotoDate: true,
		icon: false,
		clear: false
	},
	selectionRule: {
		single: true,
		range: false,
		rangeDisableSelect: false
	},
	labels: {
    today: "Today",
	}
}
/* Custom Datepicker2 (Beatpicker) Options code Ends */


/* PQR Base Education Code Starts */
$("#degreeFields").hide();
$("#certificateFields").hide();

   
$("#eduInfo").selectmenu({
  change: function(event, ui) {
	$("#degreeFields").hide();
	$("#certificateFields").hide();
    var selected = ui.item.value;
	if(selected=='degree'){	
		$("#degreeFields").show();
	}
	if(selected=='certificate'){
		$("#certificateFields").show();
	}
  }
});
/* PQR Base Education Code Ends */