var page = $(location).attr('href').slice(  $(location).attr('href').lastIndexOf('/')+1  );

if( page==="create-edit_facilities-park.html?id=central_park"){
	
	var attributes = ["Bocce_Ball", "Bicycle_Trail", "Hiking_trail", "Concessions", "Restroom", "Conservation_Area", "Picnic_Area"]
	var imageList = ["img/central_park/fountain.jpg", "img/central_park/main_path.png", "img/central_park/skyline.jpg"]
	
	$('#place-name').val("Central Park");
	$('#place-phone').val("123-456-7890");
	$('#place-hours').val("6:00am - 1:00am");
	$('#place-parking').val("Available at the southern entrance");
	$('#place-street').val("1000 5th Avenue");
	$('#place-city').val("New York");
	$('#place-zip').val("10028");
	$('#place-state').val("NY");
	$('#place-type').val("park");
	$('#place-active').attr('checked', true);
	$('#place-description').val("Central Park is a public park at the center of Manhattan in New York City. The park initially opened in 1857, on 778 acres of city-owned land (it is 840 acres today). In 1858, Frederick Law Olmsted and Calvert Vaux won a design competition to improve and expand the park with a plan they entitled the Greensward Plan. Construction began the same year, continued during the American Civil War, and was completed in 1873. Central Park is the most visited urban park in the United States. Designated a National Historic Landmark in 1962, the park is currently managed by the Central Park Conservancy under contract with the city government.");
	$('#place-url').val("http://www.centralparknyc.org/");
	
	$.each(attributes, function(index, atr) {
		$(':checkbox[value="' +atr + '"]').prop('checked', true);
	});
	
	$.each(imageList, function(i, url) {
		var $listItem = $('<li class="list-group-item"></li>')
		var $deleteButton = $('<button type="button" class="btn btn-danger">delete</button>')
		var $fileName = $('<span class="filename"></span>').text( url.slice(  url.lastIndexOf('/')+1) );
		var $image = $('<img />').attr('src', url);
		$listItem.append([$image,$fileName,$deleteButton]).appendTo('ul.list-group');
	});
};

if( page==="create-edit_contact.html?id=office_of_park_services"){
	$('#contact-name').val("Office of Park Services");
	$('#contact-active').attr('checked', true);
	$('#contact-phone').val("123-456-7890");
	$('#contact-email').val("parks@parkdistrict.com");
	$('#contact-street').val("987 6th Street");
	$('#contact-city').val("Chicago");
	$('#contact-zip').val("60601");
	$('#contact-state').val("IL");
};

if( page==="create-edit_news.html?id=fall_food_drive_was_a_huge_success"){
	$('#news-headline').val("Fall Food Drive Was A Huge Success!");
	$('#news-publish_date').val("9-12-13");
	$('#news-expire_date').val("12-1-13");
	$('#news-active').attr('checked', true);
	$('#news-featured').attr('checked', true);
	$('#news-body_content').val('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse est tellus, tristique a enim nec, vestibulum accumsan libero. Etiam iaculis libero orci, vel malesuada magna luctus quis. Nam accumsan mauris eu nulla varius, nec elementum risus viverra. Curabitur non dictum ligula, ac convallis eros. Quisque eget velit sem. Maecenas non arcu magna. Sed gravida eleifend mi, quis placerat felis facilisis id. Quisque non mi sapien. Proin neque lacus, placerat vitae sem quis, pellentesque consectetur quam.</p><p>Proin faucibus adipiscing lorem, quis varius nibh viverra eu. Pellentesque consectetur congue tortor sed fermentum. Nulla vitae nisi a est facilisis mollis. Integer lacinia posuere elit, pulvinar consectetur ante tincidunt ac. Etiam semper est eu massa ornare dictum. Ut feugiat laoreet libero, quis faucibus tellus vehicula quis. Nam dictum tortor quis rhoncus tristique. Suspendisse potenti. Aenean a dolor lacinia, ornare augue eget, adipiscing orci. Nunc non convallis sapien. Praesent venenatis bibendum porttitor. Nullam in nisi cursus, rhoncus augue ut, suscipit ligula. Praesent tellus sem, consequat nec condimentum id, semper eu nisi. Vivamus tincidunt pharetra tellus, laoreet ultrices nibh bibendum nec.</p>')
	$('#news-more_info_url').val("http://www.park.gov/news/fall_food_drive_was_a_huge_success");
};
