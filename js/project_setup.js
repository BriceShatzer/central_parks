$(function(){ 
//$('input[name="news-data_input"][value="feed"]').is(':checked') controlled 
var controlledElements = [ $('#news_feed_setup').parents('.col-md-4'), $('#events_feed_setup').parents('.col-md-4'), $('#events_feed_setup .define_feed_location'), $('#news_feed_setup .define_feed_location') ];
$.each(controlledElements, function() { $(this).hide();});

$('#news_feed_setup').click(function(){
	if ($(this).find('input:checked').val() == "feed")
		{$('#news_feed_setup .define_feed_location').slideDown()}
	else{$('#news_feed_setup .define_feed_location').slideUp()}

});
$('#events_feed_setup').click(function(){
	if ($(this).find('input:checked').val() == "feed")
		{$('#events_feed_setup .define_feed_location').slideDown()}
	else{$('#events_feed_setup .define_feed_location').slideUp()}

});

$('#define_functionality-news').click(function() {
	if( $(this).is(':checked') )
		{$('#news_feed_setup').parents('.col-md-4').fadeIn()}
	else{$('#news_feed_setup').parents('.col-md-4').fadeOut('fast')}
});

$('#define_functionality-events').click(function() {
	if( $(this).is(':checked') )
		{$('#events_feed_setup').parents('.col-md-4').fadeIn()}
	else{$('#events_feed_setup').parents('.col-md-4').fadeOut('fast')}
});


});