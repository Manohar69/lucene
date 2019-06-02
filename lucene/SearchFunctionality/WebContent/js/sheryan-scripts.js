// JavaScript Document

/* Home Page Video Full Screen Code Start */
$(document).ready(function() {
/* Custom Datepicker2 (Beatpicker) code Starts */	
$('.static .beatpicker-input').hide();
$('.beatpicker .header .prev').text("");
$('.beatpicker .header .next').text("");
$('.beatpicker .header .prev').addClass("icon-Arrowleft");
$('.beatpicker .header .next').addClass("icon-Arrowright");
/* Custom Datepicker2 (Beatpicker) code Ends */ 

/* Selectmenu script starts */
$('.customSelect').selectmenu();
/* Selectmenu script ends */

/*
Search ICD by value and populate selected ICD start
*/
/* $('#searchICD').click(function(){
	var option = '';
	// make call to the service to obtain the values for the search and populate it 
	var val = ['1','2','3','4','5'];
	for (var i = 0; i<val.length; i++){
	option ='<option>'+val[i]+'</option>';
	$('#icd_SearchResult').append(option);
	}
});


$('#add').click(function(){
		var p = $("#searchdiv").find("#icd_SearchResult option:selected");
        p.clone().appendTo("#icd_selectedSearch");
        p.remove();
});



$('#remove').click(function(){
	    var p = $('#selecteddiv').find("#icd_selectedSearch option:selected");
        p.clone().appendTo("#icd_SearchResult");
        p.remove();
});
 */
/*
Search ICD by value and populate selected ICD end
*/


 
/* Mobile Nav Icon trigger code Start */ 
$('.mobileNav').click(function(){
	$('#navBar').toggleClass('navShow');
	if ($('#navBar').hasClass('navShow')){
        $('.mobileNav').removeClass('icon-Mobilemenu').addClass('icon-Delete'); 
    } else {
        $('.mobileNav').removeClass('icon-Delete').addClass('icon-Mobilemenu');
		$('body').css('overflow-y', 'auto');
      }
});
/* Mobile Nav Icon trigger code Ends */ 
 
/* Accessibility dropdown trigger code Starts */ 
var modal = document.getElementById('searchInput');

	window.onclick = function(event) {
		console.log('test');
		
		console.log(event);
		if (event.target == modal) {
			$('#searchInput').hide();
		}
	}

$(".accessibility a").click(function(){
    if($('.accessibility-dropdown').hasClass('accHide')){
      $('.accessibility-dropdown').removeClass('accHide');
      $('.accessibility-dropdown').addClass('accShow');
	  $('.accessibility').addClass('accessibility-pointer');
    }
});	
	
$("a.accessibilityClose").click(function(){
    if($('.accessibility-dropdown').hasClass('accShow')){
      $('.accessibility-dropdown').removeClass('accShow');
      $('.accessibility-dropdown').addClass('accHide');	  
	  $('.accessibility').removeClass('accessibility-pointer');
    }
});

$(".search a").click(function(){
    if($('.search-dropdown').hasClass('searchHide')){
      $('.search-dropdown').removeClass('searchHide');
      $('.search-dropdown').addClass('searchShow');
	  $('.search').addClass('search-pointer');
    }
});	
	
$("a.searchClose").click(function(){
    if($('.search-dropdown').hasClass('searchShow')){
      $('.search-dropdown').removeClass('searchShow');
      $('.search-dropdown').addClass('searchHide');	  
	  $('.search').removeClass('search-pointer');
    }
});
/* Accessibility dropdown trigger code Ends */ 

/* PhotoCropper and Zoomer code Starts */ 
$('#rotator').cropImage("rotate","image");
$('#zoomer').cropImage("zoom","image");
/* PhotoCropper and Zoomer code Ends */


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
	
	$('#smd-table').DataTable( {
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
	
	
    $('#circular-table').DataTable( {
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
	
	
	
	
    $('#faq-table').DataTable( {
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
			"sSearchPlaceholder": "Search to filter"
        },
		"language": {
            "lengthMenu": "Items per page: _MENU_",
            "zeroRecords": "Nothing found - sorry",
            "info": "_PAGE_ - _PAGES_ of _MAX_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    });	
	
	
	
    $('#fines-table').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom"i>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "Showing all _TOTAL_ outstanding fines",
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
	
	$('#finesHistory-table').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom"i>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "Showing all _TOTAL_ outstanding fines",
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
	
	$('#applicationsActive-table').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom"i>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "Showing all _TOTAL_ active applications",
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
	
	$('#applicationsComplete-table').DataTable( {
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
			"sInfo": "Showing all _TOTAL_ items",
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
	
	$('#facilityFines-table').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom"i>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "Showing all _TOTAL_ outstanding fines",
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
	
	$('#facilityFinesHistory-table').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom"i>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "Showing all _TOTAL_ fines",
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
	
	$('#applications-table').DataTable( {
		"aaSorting": [],
        "pagingType": "full_numbers",
		"ordering": true,
		columnDefs: [{
		  orderable: false,
		  targets: "no-sort"
		}],
		"dom": '<"top"f>rt<"bottom"i>',
		"oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
			"sInfo": "Showing all _TOTAL_ active applications",
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
	
	$('#applicationsHistory-table').DataTable( {
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
			"sInfo": "Showing all _TOTAL_ items",
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
	
	$('#sickLeave-table').DataTable( {
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
			"sInfo": "_START_-_END_ of _TOTAL_ items",
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
	
	
	
	$('#sickleaveHistory-table').DataTable( {
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
			"sInfo": "_START_-_END_ of _TOTAL_ items",
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
	
	$('#cmdoctorHistory-table').DataTable( {
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
			"sInfo": "_START_-_END_ of _TOTAL_ items",
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
	
	$('#cmpharmacyHistory-table').DataTable( {
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
			"sInfo": "_START_-_END_ of _TOTAL_ items",
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
	
	$('#inspectionsHistory-table').DataTable( {
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
			"sInfo": "_START_-_END_ of _TOTAL_ items",
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
	
	$('#medicalDirectory-table').DataTable( {
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
			"sInfo": "_START_-_END_ of _TOTAL_",
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
	
	
/* Data Tables Code Starts */


/* jquery comboBox script starts */
	$( function() {
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
 
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "drop" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            classes: {
              "ui-tooltip": "ui-state-highlight"
            }
          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .on( "mousedown", function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on( "click", function() {
            input.trigger( "focus" );
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
 
    $( "#combobox" ).combobox();
   
  } );
/* jquery comboBox script ends */ 



});



/* Happiness Meter Code Start */
var prev_id;
$( window ).scroll(function() {
var element_position = $("#happiness-box").offset().top;
var scroll_position = $(window).scrollTop();
var viewport_height = $(window).height();
if((scroll_position + viewport_height) > element_position){
  $(".happiness-meter").css({position: 'relative'});
} else{
    $(".happiness-meter").css({position: 'fixed'});
}
});
/* Happiness Meter Code Ends */


/* Form Enter Code Start */
function handleEnter(e,loc){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
 //window.open(loc)
 window.location=loc    
    }
}
/* Form Enter Code Start */


/* Header Scroll Code Start */
var lastScrollTop =0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   var sticky = $('.breadcrumb-section')
   if (st > lastScrollTop){
    // downscroll code
    sticky = $('.breadcrumb-section')
    scroll = $(window).scrollTop();
    if (scroll >= 144){
		sticky.addClass('fixed');
	}else{
		sticky.removeClass('fixed');
	}   lastScrollTop = st;
    }else {
    // upscroll code
	sticky.removeClass('fixed');
	sticky = $('#bluehead'),
	scroll = $(window).scrollTop();

	if (scroll >= 144){
		sticky.addClass('fixed');
	}else{
		sticky.removeClass('fixed');
		lastScrollTop =0;
	}
   }
});
/* Header Scroll Code Start */


/* Form Accordion Code Start */
$('.section-container').click(function(e) {
   e.preventDefault();
  
	var $this = $(this);
  
	if ($this.next().hasClass('show')) {
		
		$this.next().removeClass('show');
		$this.removeClass('expand active');
		$this.next().slideUp(350);			
		if ($('.section-container h4 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').removeClass('rotate');
		}			
	} else {
		$this.parent().parent().find('div.accordion-group .section-container').removeClass('expand active');	    
		$this.parent().parent().find('div.accordion-group .section-container h4 span').removeClass('rotate');
		
		$this.addClass('expand active');
		$this.find('a').css('display','table');
		
		if ($('.section-container h4 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').addClass('rotate');
		}
		
		$this.parent().parent().find('div.accordion-group .form-container').removeClass('show');
		$this.parent().parent().find('div.accordion-group .form-container').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(150);
		
	}
});
	
//$('.innerAccordian-group .form-group-container').click(function(e) {
$(document).on('click','.innerAccordian-group .form-group-container', function(e) {
   e.preventDefault();
  
	var $this = $(this);
  
	if ($this.next().hasClass('show')) {
		
		$this.next().removeClass('show');
		$this.removeClass('expand');
		$this.next().slideUp(350);			
		if ($('.form-group-container h4 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').removeClass('rotate');
		}			
	} else {
		$this.parent().parent().find('div.innerAccordian-group .form-group-container').removeClass('expand');	    
		$this.parent().parent().find('div.innerAccordian-group .form-group-container h4 span').removeClass('rotate');
		
		$this.addClass('expand');
		
		if ($('.form-group-container h4 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').addClass('rotate');
		}
		
		$this.parent().parent().find('div.innerAccordian-group .innerAccordian-content').removeClass('show');
		$this.parent().parent().find('div.innerAccordian-group .innerAccordian-content').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(150);
		
	}
});	
/* Form Accordion Code End */


/* FAQ Accordion Code Start */
$('.faq-heading-outer').click(function(e) {
   e.preventDefault();
  
	var $this = $(this);
  
	if ($this.next().hasClass('show')) {
		
		$this.next().removeClass('show');
		$this.removeClass(' ');
		$this.next().slideUp(350);			
		if ($('.faq-heading-outer h3 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').removeClass('rotate');
		}			
	} else {
		$this.parent().parent().find('div.faq-grp-outer .faq-heading-outer').removeClass(' ');	    
		$this.parent().parent().find('div.faq-grp-outer .faq-heading-outer h3 span').removeClass('rotate');
		
		$this.addClass(' ');
		$this.find('a').css('display','table');
		
		if ($('.faq-heading-outer h3 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').addClass('rotate');
		}
		
		$this.parent().parent().find('div.faq-grp-outer .faq-content-outer').removeClass('show');
		$this.parent().parent().find('div.faq-grp-outer .faq-content-outer').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(150);
		
	}
});

$('.faq-grp-inner .faq-heading-inner').click(function(e) {
   e.preventDefault();
  
	var $this = $(this);
  
	if ($this.next().hasClass('show')) {
		
		$this.next().removeClass('show');
		$this.removeClass('expand');
		$this.next().slideUp(350);			
		if ($('.faq-heading-inner h4 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').removeClass('rotate');
		}			
	} else {
		$this.parent().parent().find('div.faq-grp-inner .faq-heading-inner').removeClass('expand');	    
		$this.parent().parent().find('div.faq-grp-inner .faq-heading-inner h4 span').removeClass('rotate');
		
		$this.addClass('expand');
		
		if ($('.faq-heading-inner h4 span').hasClass('arrow-right')){
			$(this).find('.arrow-right').addClass('rotate');
		}
		
		$this.parent().parent().find('div.faq-grp-inner .faq-content-inner').removeClass('show');
		$this.parent().parent().find('div.faq-grp-inner .faq-content-inner').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(150);
		
	}
});	
/* FAQ Accordion Code End */


/* Skrollr Responsive trigger starts */	
$(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 1023) {
    skrollr.init();
  }
  // disable skrollr if the window is resized below 768px wide
  $(window).on('resize', function () {
    if ($(window).width() <= 1023) {
      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
    }
  });
});
/* Skrollr Responsive trigger Ends */	

/* Homepage Nav sticky trigger Starts */	
$(window).scroll(function(){
    if ($(window).scrollTop() >= 80) {
       $('.top-section.home').addClass('fixed-header');
    }
    else {
       $('.top-section.home').removeClass('fixed-header');
    }
});
/* Homepage Nav sticky trigger Ends */	

/* File Upload Script Starts*/
(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);
/* File Upload Script Ends*/

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

/* DASHBOARD CHART and Bar Code Starts */

//VARIABLES
//REGISTRATION WIDGET
// For changing License Validity for Registration Widget
var licenseMonth = 8 ;
var ftLicense = "Full Time License";
var expdate = "16 Dec 2018";
var fontSize = 'xx-large';
var monthColor = "#FFBF58";
var datPrint = "Month";
var expireItem1 = "Consultant Cardiologist";
var expireItem2 = "Consultant Pediatric Neurologist";
var divId = ["first","second","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];

var colorClasses= ["red-common","gold-common","yellow-light-common","yellow-light-common","skyblue","skyblue","skyblue","lightskyblue","lightblue","lightblue","powderblue","limegreen"];

var colorCodes = ["#d1132a","#eba75c","#eacb16","#eacb16","#87ceeb","#87ceeb","#87ceeb","#87cefa","#add8e6","#add8e6","#b0e0e6","#32CD32"]


//SICK LEAVE WIDGET
var pending_approval = "0000";
var issued_permonth = "0000";
//For change of progress value in Sick Leave Widget
var current_progress = 90; 
var statusRed = "Danger";
var statusYellow = "Running Low";
var statusBlue = "Almost full";
var redColor = "red";
var yellowColor = "#e3be42";
var blueColor = "skyblue";
var dangerValue = 10;
var warningValue = 30;
var successValue = 100;

//CPD POINTS WIDGET
// For CPD points (Yellow,Blue and white value)
var cpdBluePoints = 85;
var cpdYellowPoints = 5;
var cpdWhitePoints = 10;
var date = "15 Dec 2018";
var points = "7.5";


//REGISTRATION WIDGET

$(function() {
  //For Licensed Expiring items 
  $( "#expireLbl1" ).html(expireItem1 );
  $( "#expireLbl2" ).html(expireItem2);
  $("#ftLicense").html(ftLicense);
// For Expiration Date
  $( "#expdate" ).html( expdate )
   $( "#expdate" ).css('color',"#1e90ff")
   
  if (licenseMonth == 1){
    dataPrint = licenseMonth + " Month"  
  } else {
    dataPrint = licenseMonth + " Months"  
  }  
  
  //For License Validation Month
    $( "#licenseMonth" ).html( dataPrint );
      $( "#licenseMonth" ).css('color', monthColor);
    $( "#licenseMonth" ).css('font-size', fontSize);      
  var j = -1;
 for (i = 0; i < licenseMonth; i++) {
 var selectedClass = (colorClasses[i]).toString();
var id = "#" + (divId[i]).toString();
   $(id).addClass(selectedClass);
   j = i;
   var index = licenseMonth - 1; 
  $( "#licenseMonth, #expdate, #facilityName, #ftLicense").css('color', ((colorCodes[index]).toString()))
 }
var id = "#" + (divId[j]).toString();
   $(id).addClass('item1Extended');
  
});




//SICK LEAVE
//For Progress bar , numeric status label and status label
$(function() {
   $( "#lblVal, #lblVal1, #lblVal2" ).html( current_progress );
   $( "#pending_approval" ).html(pending_approval); 
   $( "#issued_permonth" ).html( issued_permonth );
   $("#dynamic, #dynamic1, #dynamic2").css("width", current_progress + "%").attr("aria-valuenow", current_progress);
  if(current_progress<= dangerValue){
    $("#dynamic, #dynamic1, #dynamic2").attr("class","progressBar red-common");
    $( "#lblVal, #lblVal1, #lblVal2, #status, #status1, #status2" ).addClass('red-text');
    $( "#status, #status1, #status2" ).html( statusRed );
  }
  else if(current_progress>dangerValue && current_progress<=warningValue){
    $("#dynamic, #dynamic1, #dynamic2").attr("class","progressBar gold-common");    
    $( "#lblVal, #lblVal1, #lblVal2, #status, #status1, #status2" ).addClass('gold-text');
    $( "#status, #status1, #status2" ).html( statusYellow ) ;
  }
  else if(current_progress>warningValue && current_progress<=successValue){
    $("#dynamic, #dynamic1, #dynamic2").attr("class","progressBar blue"); 
    $( "#lblVal, #lblVal1, #lblVal2, #status, #status1, #status2" ).addClass('blue-text');
    $( "#status, #status1, #status2" ).html( statusBlue );
  }
  
});




var draw = Chart.controllers.doughnut.prototype.draw;
Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
draw: function() {
	draw.apply(this, arguments);
	let ctx = this.chart.chart.ctx;
	let _fill = ctx.fill;
	ctx.fill = function() {
		ctx.save();
		ctx.shadowColor = '#cacaca';
		ctx.shadowBlur = 30;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 10;
		_fill.apply(this, arguments)
		ctx.restore();
	}
}
});
  

var data = {
  labels: [
    "Approved",
    "Pending",
    "Balance Points"
  ],
  datasets: [
    {
      data: [cpdBluePoints,cpdYellowPoints,cpdWhitePoints],
      backgroundColor: [
        "#008b99",
        "#FF6600",
        "#ffffff"
      ],
      hoverBackgroundColor: [
        "#008b99",
        "#FF6600",
         "#ffffff",
       ],
       borderColor: [
                    "#008b99",
        "#FF6600",
         "#ffffff",
                ],
                borderWidth: [1, 1, 1]
       
    }]
};
    
var promisedDeliveryChart = new Chart($('#myChart'), {
  type: 'doughnut',
  data: data,
  options: {
    layout: {
      padding:{
      top: 20,
      bottom:25,
      left:0,
      right:0
      }
    },
    segmentShowStroke: false,
  	responsive: true,
    cutoutPercentage:80,
    legend: {
      display: false
    }
  }
});

//For Doughnut chart for filling number in center
Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = "32.5" ,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});


//For Date in CDP Points
$(function() {
  $( "#date" ).html( date);
  $( "#date" ).css('color','#1e90ff');
 
  });
// For points in CDP Points
$(function() {
  
$( "#points" ).html( points )
     $( "#points" ).css('color','#1e90ff'); 
});




var canvas = document.getElementById("canvas");
var tooltipCanvas = document.getElementById("tooltip-canvas");

var gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientBlue.addColorStop(0, '#5555FF');
gradientBlue.addColorStop(1, '#9787FF');

var gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientRed.addColorStop(0, '#FF55B8');
gradientRed.addColorStop(1, '#FF8787');

var gradientGrey = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientGrey.addColorStop(0, '#888888');
gradientGrey.addColorStop(1, '#AAAAAA');

window.arcSpacing = 0;
window.segmentHovered = false;

function textInCenter(value, label) {
  var ctx = tooltipCanvas.getContext('2d');
  ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height)
  
	ctx.restore();
    
  // Draw value
  ctx.fillStyle = '#333333';
  ctx.font = '24px sans-serif';
  ctx.textBaseline = 'middle';

  // Define text position
  var textPosition = {
    x: Math.round((tooltipCanvas.width - ctx.measureText(value).width) / 2),
    y: tooltipCanvas.height / 2,
  };

  ctx.fillText(value, textPosition.x, textPosition.y);

  // Draw label
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '8px sans-serif';

  // Define text position
  var labelTextPosition = {
    x: Math.round((tooltipCanvas.width - ctx.measureText(label).width) / 2),
    y: tooltipCanvas.height / 2,
  };

  ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
  ctx.save();
}

Chart.elements.Arc.prototype.draw = function() {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var sA = vm.startAngle;
  var eA = vm.endAngle;

  ctx.beginPath();
  ctx.arc(vm.x, vm.y, vm.outerRadius, sA + window.arcSpacing, eA - window.arcSpacing);
  ctx.strokeStyle = vm.backgroundColor;
  ctx.lineWidth = vm.borderWidth;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();
};

var config = {
    type: 'doughnut',
    data: {
        labels: ['Pink', 'Grey'],
        datasets: [
          {
              data: [50, 30],
              backgroundColor: [
              	gradientRed,
                gradientGrey
              ],
          }
        ]
    },
    options: {
    		cutoutPercentage: 80,
    		elements: {
        	arc: {
          	borderWidth: 20,
          },
        },
        legend: {
        	display: false,
        },
        animation: {
        	onComplete: function(animation) {
          	if (!window.segmentHovered) {
              var value = this.config.data.datasets[0].data.reduce(function(a, b) { 
                return a + b;
              }, 0);
              var label = 'T O T A L';

              textInCenter(value, label);
            }
          },
        },
        tooltips: {
        	enabled: false,
        	custom: function(tooltip) {
          	if (tooltip.body) {
              var line = tooltip.body[0].lines[0],
              	parts = line.split(': ');
              textInCenter(parts[1], parts[0].split('').join(' ').toUpperCase());
              window.segmentHovered = true;
            } else {
            	window.segmentHovered = false;
            }
          },
        },
    },
};

window.chart = new Chart(canvas, config);

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

document.getElementById('reload').addEventListener('click', function() {
	addData(window.chart, 'TEST', 300);
});


        Chart.pluginService.register({
            afterUpdate: function (chart) {
                    var a=chart.config.data.datasets.length -1;
                    for (let i in chart.config.data.datasets) {
                        for(var j = chart.config.data.datasets[i].data.length - 1; j>= 0;--j) { 
                            if (Number(j) == (chart.config.data.datasets[i].data.length - 1))
                                continue;
                            var arc = chart.getDatasetMeta(i).data[j];
                            arc.round = {
                                x: (chart.chartArea.left + chart.chartArea.right) / 2,
                                y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                                radius: chart.innerRadius + chart.radiusLength / 2 + (a * chart.radiusLength),
                                thickness: chart.radiusLength / 2 - 1,
                                backgroundColor: arc._model.backgroundColor
                            }
                        }
                        a--;
                    }
            },

            afterDraw: function (chart) {
                    var ctx = chart.chart.ctx;
                    for (let i in chart.config.data.datasets) {
                        for(var j = chart.config.data.datasets[i].data.length - 1; j>= 0;--j) { 
                            if (Number(j) == (chart.config.data.datasets[i].data.length - 1))
                                continue;
                            var arc = chart.getDatasetMeta(i).data[j];
                            var startAngle = Math.PI / 2 - arc._view.startAngle;
                            var endAngle = Math.PI / 2 - arc._view.endAngle;

                            ctx.save();
                            ctx.translate(arc.round.x, arc.round.y);
                            console.log(arc.round.startAngle)
                            ctx.fillStyle = arc.round.backgroundColor;
                            ctx.beginPath();
                            ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
                            ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                            ctx.closePath();
                            ctx.fill();
                            ctx.restore();
                        }
                    }
            },
        });

	// write text plugin
	Chart.pluginService.register({
		afterUpdate: function (chart) {
			if (chart.config.options.elements.center) {
				var helpers = Chart.helpers;
				var centerConfig = chart.config.options.elements.center;
				var globalConfig = Chart.defaults.global;
				var ctx = chart.chart.ctx;

				var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
				var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

				if (centerConfig.fontSize)
					var fontSize = centerConfig.fontSize;
					// figure out the best font size, if one is not specified
				else {
					ctx.save();
					var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
					var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
					var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);

					do {
						ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
						var textWidth = ctx.measureText(maxText).width;

						// check if it fits, is within configured limits and that we are not simply toggling back and forth
						if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
							fontSize += 1;
						else {
							// reverse last step
							fontSize -= 1;
							break;
						}
					} while (true)
					ctx.restore();
				}

				// save properties
				chart.center = {
					font: helpers.fontString(fontSize, fontStyle, fontFamily),
					fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
				};
			}
		},
		afterDraw: function (chart) {
			if (chart.center) {
				var centerConfig = chart.config.options.elements.center;
				var ctx = chart.chart.ctx;

				ctx.save();
				ctx.font = chart.center.font;
				ctx.fillStyle = chart.center.fillStyle;
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
				var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
				ctx.fillText(centerConfig.text, centerX, centerY);
				ctx.restore();
			}
		},
	})
	
	var config = {
		type: 'doughnut',
		data: {
			labels: [
				"Red",
				"Gray"
			],
			datasets: [
      {
				data: [80,10,20],
				backgroundColor: [
					"#08909C",
					"#F2963F",
					"#FFF"
				],
				hoverBackgroundColor: [
					"#08909C",
					"#F2963F",
					"#FFF"
				]
			}]
		},
		options: {
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100',
					text: '32.5',
					fontColor: '#08909C',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					fontSize: 18,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
				
			},
      legend : false,
		}
	};


		var ctx = document.getElementById("myChart").getContext("2d");
		var myChart = new Chart(ctx, config);
/* DASHBOARD CHART and Bar Code Ends */






