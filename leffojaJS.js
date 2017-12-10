// JavaScript Document

function vaihdaTausta() {
			var bg = 'film.jpg';
			$('body').css('background','#000 url('+bg+') no-repeat center center fixed');
		}

		function loadXMLDoc(selectObject) {
	var value = selectObject.value;
    var url = "";
	if (value == "Helsinki: Kinopalatsi") {
		url = "https://www.finnkino.fi/xml/Events/?area=1031";
	} else if (value == "Helsinki: Tennispalatsi") {
		url = "https://www.finnkino.fi/xml/Events/?area=1033";
	} else if (value == "Espoo: Omena") {
		url = "https://www.finnkino.fi/xml/Events/?area=1039";
	} else if (value == "Espoo: Sello") {
		url = "https://www.finnkino.fi/xml/Events/?area=1038";
	} else if (value == "Vantaa") {
		url = "https://www.finnkino.fi/xml/Events/?area=1013";
	} else if (value == "Jyväskylä") {
		url = "https://www.finnkino.fi/xml/Events/?area=1015";
	} else if (value == "Kuopio") {
		url = "https://www.finnkino.fi/xml/Events/?area=1016";
	} else if (value == "Lahti") {
		url = "https://www.finnkino.fi/xml/Events/?area=1017";
	} else if (value == "Lappeenranta") {
		url = "https://www.finnkino.fi/xml/Events/?area=1041";
	} else if (value == "Oulu") {
		url = "https://www.finnkino.fi/xml/Events/?area=1018";
	} else if (value == "Pori") {
		url = "https://www.finnkino.fi/xml/Events/?area=1019";
	} else if (value == "Tampere: Cine Atlas") {
		url = "https://www.finnkino.fi/xml/Events/?area=1034";
	} else if (value == "Tampere: Plevna") {
		url = "https://www.finnkino.fi/xml/Events/?area=1035";
	} else if (value == "Turku") {
		url = "https://www.finnkino.fi/xml/Events/?area=1022";
	} else {
		url = "";
	}
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var out = '<table class="table table-hover table-bordered">';
			var vastaus = xmlhttp.responseXML;
			var titles = vastaus.getElementsByTagName("OriginalTitle");
			var kuvaparent = vastaus.getElementsByTagName("Images");
			var genres = vastaus.getElementsByTagName("Genres");
			var synopsis = vastaus.getElementsByTagName("ShortSynopsis");
			var julkaisuv = vastaus.getElementsByTagName("ProductionYear");
			var linkit = vastaus.getElementsByTagName("EventURL");
			
			console.log(kuvaparent);
			console.log(titles);
			console.log(linkit);
			out += '<thead class="thead-light">';
			out += '<tr>';
			out += '<th>' + 'Elokuvan nimi' + '</th>';
			out += '<th>' + 'Finnkinon linkki elokuvaan' + '</th>';
			out += '<th>' + 'Kuva elokuvasta' + '</th>';
			out += '<th>' + 'Kategoria' + '</th>';
			out += '<th>' + 'Lyhyt synopsis' + '</th>';
			out += '<th>' + 'Julkaisuvuosi' + '</th>';
			out += '</tr>';
			out += '</thead>';
			out += '<tbody>';
			for (i=0; i < titles.length; i++) {
				out += '<tr>';
				out += '<td>' + titles[i].innerHTML + '</td>';
				out += '<td>' + '<a href="' + linkit[i].innerHTML + '">' + 'Siirry elokuvan tietoihin' + '</></td>';
				out += '<td><img src="' + kuvaparent[i].childNodes[1].innerHTML + '"</td>';
				out += '<td>' + genres[i].innerHTML + '</td>';
				out += '<td>' + synopsis[i].innerHTML + '</td>';
				out += '<td>' + julkaisuv[i].innerHTML + '</td>';
				out += '</tr>';
			}
			
			out += "</tbody>";
			out += "</table>";
			
			document.getElementById("tabledata").innerHTML = out;
		}
	}
}
		
		function searchMovieData() {
			var value2 = document.getElementById("query").value;
			var url = "";
	if (value2 == "Kinopalatsi") {
		url = "https://www.finnkino.fi/xml/Events/?area=1031";
	} else if (value2 == "Tennispalatsi") {
		url = "https://www.finnkino.fi/xml/Events/?area=1033";
	} else if (value2 == "Espoo") {
		url = "https://www.finnkino.fi/xml/Events/?area=1012";
	} else if (value2 == "Helsinki") {
		url = "https://www.finnkino.fi/xml/Events/?area=1002";
	} else if (value2 == "Omena") {
		url = "https://www.finnkino.fi/xml/Events/?area=1039";
	} else if (value2 == "Sello") {
		url = "https://www.finnkino.fi/xml/Events/?area=1038";
	} else if (value2 == "Vantaa") {
		url = "https://www.finnkino.fi/xml/Events/?area=1013";
	} else if (value2 == "Jyväskylä") {
		url = "https://www.finnkino.fi/xml/Events/?area=1015";
	} else if (value2 == "Kuopio") {
		url = "https://www.finnkino.fi/xml/Events/?area=1016";
	} else if (value2 == "Lahti") {
		url = "https://www.finnkino.fi/xml/Events/?area=1017";
	} else if (value2 == "Lappeenranta") {
		url = "https://www.finnkino.fi/xml/Events/?area=1041";
	} else if (value2 == "Oulu") {
		url = "https://www.finnkino.fi/xml/Events/?area=1018";
	} else if (value2 == "Pori") {
		url = "https://www.finnkino.fi/xml/Events/?area=1019";
	} else if (value2 == "Cine Atlas") {
		url = "https://www.finnkino.fi/xml/Events/?area=1034";
	} else if (value2 == "Plevna") {
		url = "https://www.finnkino.fi/xml/Events/?area=1035";
	} else if (value2 == "Tampere") {
		url = "https://www.finnkino.fi/xml/Events/?area=1021";
	} else if (value2 == "Turku") {
		url = "https://www.finnkino.fi/xml/Events/?area=1022";
	} else {
		url = "";
	}
			
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var out = '<table class="table table-hover table-bordered">';
			var kuvat = "";
			var vastaus = xmlhttp.responseXML;
			var titles = vastaus.getElementsByTagName("OriginalTitle");
			var kuvat = vastaus.getElementsByTagName("EventLargeImagePortrait");
			var kuvaparent = vastaus.getElementsByTagName("Images");
			var genres = vastaus.getElementsByTagName("Genres");
			var synopsis = vastaus.getElementsByTagName("ShortSynopsis");
			var julkaisuv = vastaus.getElementsByTagName("ProductionYear");
			
			console.log(kuvat);
			console.log(kuvaparent);
			console.log(titles);
			out += '<thead class="thead-dark">';
			out += '<tr>';
			out += '<th>' + 'Elokuvan nimi' + '</th>';
			out += '<th>' + 'Kuva elokuvasta' + '</th>';
			out += '<th>' + 'Kategoria' + '</th>';
			out += '<th>' + 'Lyhyt synopsis' + '</th>';
			out += '<th>' + 'Julkaisuvuosi' + '</th>';
			out += '</tr>';
			out += '</thead>';
			out += '<tbody>';
			for (i=0; i < titles.length; i++) {
				out += '<tr>';
				out += '<td>' + titles[i].innerHTML + '</td>';
				out += '<td><img src="' + kuvaparent[i].childNodes[1].innerHTML + '"</td>';
				out += '<td>' + genres[i].innerHTML + '</td>';
				out += '<td>' + synopsis[i].innerHTML + '</td>';
				out += '<td>' + julkaisuv[i].innerHTML + '</td>';
				out += '</tr>';
			}
			
			out += "</tbody>";
			out += "</table>";
			
			document.getElementById("tabledata").innerHTML = out;
		}
	}
}