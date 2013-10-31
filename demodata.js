var page = $(location).attr('href').slice(  $(location).attr('href').lastIndexOf('/')+1  );

if( page==="create-edit_facilities-park.html?id=central_park"){
$('#place-name').val("Central Park");
$('#place-phone').val("123-456-7890");
$('#place-hours').val("6:00am - 1:00am");
$('#place-parking').val("Available at the southern entrance");
$('#place-street').val("1000 5th Avenue");
$('#place-city').val("New York");
$('#place-zip').val("10028");
$('#place-state').val("NY");
$('#place-type').val("park");
$('#place-description').val("Central Park is a public park at the center of Manhattan in New York City. The park initially opened in 1857, on 778 acres of city-owned land (it is 840 acres today). In 1858, Frederick Law Olmsted and Calvert Vaux won a design competition to improve and expand the park with a plan they entitled the Greensward Plan. Construction began the same year, continued during the American Civil War, and was completed in 1873. Central Park is the most visited urban park in the United States. Designated a National Historic Landmark in 1962, the park is currently managed by the Central Park Conservancy under contract with the city government.");
$('#place-url').val("http://www.centralparknyc.org/");

var attributes = ["Bocce_Ball", "Bicycle_Trail", "Hiking_trail", "Concessions", "Restroom", "Conservation_Area", "Picnic_Area"]
$.each(attributes, function(index, atr) {
$(':checkbox[value="' +atr + '"]').prop('checked', true);
});

	var imageList = ["img/central_park/fountain.jpg", "img/central_park/main_path.png", "img/central_park/skyline.jpg"]
	$.each(imageList, function(i, url) {
	  var $listItem = $('<li class="list-group-item"></li>')
	  var $deleteButton = $('<button type="button" class="btn btn-danger">delete</button>')
	  var $fileName = $('<span class="filename"></span>').text( url.slice(  url.lastIndexOf('/')+1) );
	  var $image = $('<img />').attr('src', url);
	  $listItem.append([$image,$fileName,$deleteButton]).appendTo('ul.list-group');
	});
};

