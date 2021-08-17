function initialize() {
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(55.742871, 37.586416),
		scrollwheel: false,
		panControl: false,
		zoomControl: true,
		draggable: false,
		disableDefaultUI: true,
	}

	map = new google.maps.Map(document.getElementById("map"), myOptions);

	var image = 'images/ico-marker.svg';

	myLatLng=[];
	function point(pointX, pointY){
		var x = myLatLng.length;
		myLatLng[x] = new google.maps.LatLng(pointX, pointY);
		if (document.getElementById('marker-'+x) != null)
			document.getElementById('marker-'+x).onclick = function(){map.panTo(myLatLng[x]); this.classList.add("active");}
	}

	point(55.742871, 37.586416);

	for (i = 0; i < myLatLng.length; ++i) {
		var beachMarker = new google.maps.Marker({
			position: myLatLng[i],
			map: map,
			icon: image
		});
	}
}
google.maps.event.addDomListener(window, 'load', initialize);
