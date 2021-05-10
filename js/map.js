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


	var styles = [
			{
				"featureType": "administrative",
				"elementType": "all",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"lightness": -100
					},
					{
						"visibility": "off"
					},
					{
						"saturation": "-77"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#848ea4"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"saturation": "-70"
					},
					{
						"lightness": "0"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"hue": "#0050ff"
					},
					{
						"saturation": "0"
					},
					{
						"lightness": "0"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "labels",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"saturation": "-80"
					},
					{
						"lightness": "-90"
					},
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"saturation": "-80"
					},
					{
						"lightness": "-70"
					},
					{
						"visibility": "off"
					},
					{
						"gamma": "1"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"saturation": "-85"
					},
					{
						"lightness": "60"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"saturation": "-70"
					},
					{
						"lightness": "50"
					},
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "all",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"saturation": "0"
					},
					{
						"lightness": "-11"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "simplified"
					},
					{
						"hue": "#0060ff"
					},
					{
						"lightness": "0"
					},
					{
						"saturation": "0"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels",
				"stylers": [
					{
						"hue": "#0060ff"
					},
					{
						"lightness": -100
					},
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"hue": "#0066ff"
					},
					{
						"saturation": "0"
					},
					{
						"lightness": 100
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [
					{
						"hue": "#000000"
					},
					{
						"saturation": -100
					},
					{
						"lightness": -100
					},
					{
						"visibility": "off"
					}
				]
			}
		]
	;
	map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);
