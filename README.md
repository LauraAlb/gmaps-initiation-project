# gmaps-initiation-project

* npm install - to install all the npm modules

* grunt dev - to create a dist and keep watching for changes. The app is running in port 4443.


The starter code provided already loads a map and all libraries.

### Exercise 1

In this exercise you will work with GEOCODING: https://developers.google.com/maps/documentation/geocoding/intro

1.  Create a function in a service to create and place markers on the map given its location. 

2. Add an event listener to detect mouse clicks on the map.

	* As the user clicks on the map, change the position of the marker to that of the event's latLng and set the center of the map to that location.
	* Preview your map to make sure the marker moves as you click around the map

3. Modify the listener event handler function to reverse geocode the latLng to get a textual address.

	* Add a Geocoder object in the init function and modify the event handler function to use the geocode method to reverse geocode the event.latLng. Show the address in a infoWindow associated to the marker.

4. When the directive is destroyed, remember to remove the event handler (we don't want that behaviour when we click on the map for the next exercises). 

### Exercise 2

In this exercise you will work with DIRECTIONS: https://developers.google.com/maps/documentation/javascript/directions

1. Create a new module called 'exerciseTwo' with a directive, controller, etc. to show a panel when clicking on Exercise 2 button (as we do with the Exercise 1 button). In this panel, create a form with:

	* two inputs: origin and destination
	* a select with three options (walking, driving and public transport) for the travel mode
	* a submit button
	* a panel to show the steps directions

2. Include a Place Autocomplete for both inputs Origin and Destination. https://developers.google.com/maps/documentation/javascript/places-autocomplete#introduction

3. Create a Directions service object using the constructor class: google.maps.DirectionsService();

4. The DirectionsResult contains the result of the directions query, which you may either handle yourself, or pass to a DirectionsRenderer object, which can automatically handle displaying the result on the map. To display a DirectionsResult using a DirectionsRenderer, you simply need to do the following:

	* Create a DirectionsRenderer object.
	* Use setMap() on the renderer to bind it to the map.
	* Use setPanel() on the renderer to indicate where to print the step by step directions.
	
5. Use the route method of the directions service to calculate directions, passing the response in callback function to the setDirections() method of the renderer to handle to display of steps and polyline.


### Exercise 3

1. Create a panel with the following input elements (origin1, origin2, destinationA, destinationB) where users can enter the origins and destinations and a select with the options (miles, kilometers) to choose the metric.

2. To use the Distance Matrix service in JS v3 API: https://developers.google.com/maps/documentation/distance-matrix/intro

	* First, in the init function, create a Distance Matrix service object using the constructor class: google.maps.DistanceMatrixService()
	* Next, use the getDistanceMatrix() method to initiate a request to the Distance Matrix service, passing it an object literal containing the origins, destinations, and travel mode, as well as a callback method to execute upon receipt of the response.
	* Accessing the Distance Matrix service is asynchronous, since the Google Maps API needs to make a call to an external server. For that reason, you need to pass a callback method (like you did in previous step) to process the results. Create a marker for the origin and destination (previously you have to delete the markers if there are some on the map) and show the info given by the response in this format 'from ORIGIN to DESTINATION xxxkm in xxh xxmin'.


