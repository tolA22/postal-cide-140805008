function getState(o){
	var a = o.id;
	
	
	//document.write("<select><option value=\"Akika\">Akika</option><select>");
	switch(a){
		case "selectState":
			var getStates = document.getElementById(a).value;
			var getTown = document.getElementById('selectTown');
			getTown.style.display = "inline";
			switch(getStates ){
				case "select State":
					document.getElementById('selectTown').style.display="none";
					break; 
				case "Abia":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Abia.listofTowns.length; i++) {
						option+="<option value=\""+Abia.listofTowns[i].townname+"\">"+Abia.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Adamawa":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Adamawa.listofTowns.length; i++) {
						option+="<option value=\""+Adamawa.listofTowns[i].townname+"\">"+Adamawa.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "AkwaIbom":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < AkwaIbom.listofTowns.length; i++) {
						option+="<option value=\""+AkwaIbom.listofTowns[i].townname+"\">"+AkwaIbom.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Anambra":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Anambra.listofTowns.length; i++) {
						option+="<option value=\""+Anambra.listofTowns[i].townname+"\">"+Anambra.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Bauchi":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Bauchi.listofTowns.length; i++) {
						option+="<option value=\""+Bauchi.listofTowns[i].townname+"\">"+Bauchi.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Bayelsa":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Bayelsa.listofTowns.length; i++) {
						option+="<option value=\""+Bayelsa.listofTowns[i].townname+"\">"+Bayelsa.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Benue":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Benue.listofTowns.length; i++) {
						option+="<option value=\""+Benue.listofTowns[i].townname+"\">"+Benue.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Borno":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Borno.listofTowns.length; i++) {
						option+="<option value=\""+Borno.listofTowns[i].townname+"\">"+Borno.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "CrossRiver":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < CrossRiver.listofTowns.length; i++) {
						option+="<option value=\""+CrossRiver.listofTowns[i].townname+"\">"+CrossRiver.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Delta":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Delta.listofTowns.length; i++) {
						option+="<option value=\""+Delta.listofTowns[i].townname+"\">"+Delta.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Ebonyi":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Ebonyi.listofTowns.length; i++) {
						option+="<option value=\""+Ebonyi.listofTowns[i].townname+"\">"+Ebonyi.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Edo":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Edo.listofTowns.length; i++) {
						option+="<option value=\""+Edo.listofTowns[i].townname+"\">"+Edo.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Ekiti":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Ekiti.listofTowns.length; i++) {
						option+="<option value=\""+Ekiti.listofTowns[i].townname+"\">"+Ekiti.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Enugu":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Enugu.listofTowns.length; i++) {
						option+="<option value=\""+Enugu.listofTowns[i].townname+"\">"+Enugu.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "FCT":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < FCT.listofTowns.length; i++) {
						option+="<option value=\""+FCT.listofTowns[i].townname+"\">"+FCT.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Gombe":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Gombe.listofTowns.length; i++) {
						option+="<option value=\""+Gombe.listofTowns[i].townname+"\">"+Gombe.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Imo":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Imo.listofTowns.length; i++) {
						option+="<option value=\""+Imo.listofTowns[i].townname+"\">"+Imo.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Jigawa":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Jigawa.listofTowns.length; i++) {
						option+="<option value=\""+Jigawa.listofTowns[i].townname+"\">"+Jigawa.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Kaduna":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Kaduna.listofTowns.length; i++) {
						option+="<option value=\""+Kaduna.listofTowns[i].townname+"\">"+Kaduna.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Kano":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Kano.listofTowns.length; i++) {
						option+="<option value=\""+Kano.listofTowns[i].townname+"\">"+Kano.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Katsina":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Katsina.listofTowns.length; i++) {
						option+="<option value=\""+Katsina.listofTowns[i].townname+"\">"+Katsina.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Kebbi":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Kebbi.listofTowns.length; i++) {
						option+="<option value=\""+Kebbi.listofTowns[i].townname+"\">"+Kebbi.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Kogi":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Kogi.listofTowns.length; i++) {
						option+="<option value=\""+Kogi.listofTowns[i].townname+"\">"+Kogi.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Kwara":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Kwara.listofTowns.length; i++) {
						option+="<option value=\""+Kwara.listofTowns[i].townname+"\">"+Kwara.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Lagos":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Lagos.listofTowns.length; i++) {
						option+="<option value=\""+Lagos.listofTowns[i].townname+"\">"+Lagos.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Nasarawa":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Nasarawa.listofTowns.length; i++) {
						option+="<option value=\""+Nasarawa.listofTowns[i].townname+"\">"+Nasarawa.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Niger":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Niger.listofTowns.length; i++) {
						option+="<option value=\""+Niger.listofTowns[i].townname+"\">"+Niger.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Ogun":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Ogun.listofTowns.length; i++) {
						option+="<option value=\""+Ogun.listofTowns[i].townname+"\">"+Ogun.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Osun":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Osun.listofTowns.length; i++) {
						option+="<option value=\""+Osun.listofTowns[i].townname+"\">"+Osun.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Oyo":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Oyo.listofTowns.length; i++) {
						option+="<option value=\""+Oyo.listofTowns[i].townname+"\">"+Oyo.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;			
				case "Plateau":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Plateau.listofTowns.length; i++) {
						option+="<option value=\""+Plateau.listofTowns[i].townname+"\">"+Plateau.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Rivers":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Rivers.listofTowns.length; i++) {
						option+="<option value=\""+Rivers.listofTowns[i].townname+"\">"+Rivers.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;	
				case "Sokoto":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Sokoto.listofTowns.length; i++) {
						option+="<option value=\""+Sokoto.listofTowns[i].townname+"\">"+Sokoto.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Taraba":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Taraba.listofTowns.length; i++) {
						option+="<option value=\""+Taraba.listofTowns[i].townname+"\">"+Taraba.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Yobe":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Yobe.listofTowns.length; i++) {
						option+="<option value=\""+Yobe.listofTowns[i].townname+"\">"+Yobe.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;
				case "Zamfara":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Zamfara.listofTowns.length; i++) {
						option+="<option value=\""+Zamfara.listofTowns[i].townname+"\">"+Zamfara.listofTowns[i].townname+"</option>";
					}
					getTown.innerHTML = option;
					break;														
				default:
					break;	
			}
			break;
					
		case "selectTown":
			var getTown = document.getElementById(a).value;
			var getArea = document.getElementById('selectArea');
			getArea.style.display = "inline";
			
			switch(getTown ){
				case "SelectTown":
					getArea.style.display = "none"; 
				case "Umuahia":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Umuahia.listofArea.length; i++) {
						option+="<option value=\""+Umuahia.listofArea[i].areaname+"\">"+Umuahia.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Aba":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Aba.listofArea.length; i++) {
						option+="<option value=\""+Aba.listofArea[i].areaname+"\">"+Aba.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Jimeta":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Jimeta.listofArea.length; i++) {
						option+="<option value=\""+Jimeta.listofArea[i].areaname+"\">"+Jimeta.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Yola":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Yola.listofArea.length; i++) {
						option+="<option value=\""+Yola.listofArea[i].areaname+"\">"+Yola.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Mubi":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Mubi.listofArea.length; i++) {
						option+="<option value=\""+Mubi.listofArea[i].areaname+"\">"+Mubi.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Uyo":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Uyo.listofArea.length; i++) {
						option+="<option value=\""+Uyo.listofArea[i].areaname+"\">"+Uyo.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Awka":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Awka.listofArea.length; i++) {
						option+="<option value=\""+Awka.listofArea[i].areaname+"\">"+Awka.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Onitsha":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Onitsha.listofArea.length; i++) {
						option+="<option value=\""+Onitsha.listofArea[i].areaname+"\">"+Onitsha.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Bauchi":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < BauchiT.listofArea.length; i++) {
						option+="<option value=\""+BauchiT.listofArea[i].areaname+"\">"+BauchiT.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Makurdi":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Makurdi.listofArea.length; i++) {
						option+="<option value=\""+Makurdi.listofArea[i].areaname+"\">"+Makurdi.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Otukpo":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Otukpo.listofArea.length; i++) {
						option+="<option value=\""+Otukpo.listofArea[i].areaname+"\">"+Otukpo.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Maiduguri":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Maiduguri.listofArea.length; i++) {
						option+="<option value=\""+Maiduguri.listofArea[i].areaname+"\">"+Maiduguri.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Bama":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Bama.listofArea.length; i++) {
						option+="<option value=\""+Bama.listofArea[i].areaname+"\">"+Bama.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Biu":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Biu.listofArea.length; i++) {
						option+="<option value=\""+Biu.listofArea[i].areaname+"\">"+Biu.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Calabar":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Calabar.listofArea.length; i++) {
						option+="<option value=\""+Calabar.listofArea[i].areaname+"\">"+Calabar.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Ikom":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Ikom.listofArea.length; i++) {
						option+="<option value=\""+Ikom.listofArea[i].areaname+"\">"+Ikom.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Asaba":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Asaba.listofArea.length; i++) {
						option+="<option value=\""+Asaba.listofArea[i].areaname+"\">"+Asaba.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Agbor":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Agbor.listofArea.length; i++) {
						option+="<option value=\""+Agbor.listofArea[i].areaname+"\">"+Agbor.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Warri":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Warri.listofArea.length; i++) {
						option+="<option value=\""+Warri.listofArea[i].areaname+"\">"+Warri.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Sapele":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Sapele.listofArea.length; i++) {
						option+="<option value=\""+Sapele.listofArea[i].areaname+"\">"+Sapele.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Abakaliki":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Abakaliki.listofArea.length; i++) {
						option+="<option value=\""+Abakaliki.listofArea[i].areaname+"\">"+Abakaliki.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "BeninCity":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < BeninCity.listofArea.length; i++) {
						option+="<option value=\""+BeninCity.listofArea[i].areaname+"\">"+BeninCity.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Ubiaja":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Ubiaja.listofArea.length; i++) {
						option+="<option value=\""+Ubiaja.listofArea[i].areaname+"\">"+Ubiaja.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;		
				case "AdoEkiti":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < AdoEkiti.listofArea.length; i++) {
						option+="<option value=\""+AdoEkiti.listofArea[i].areaname+"\">"+AdoEkiti.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "IkoleEkiti":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < IkoleEkiti.listofArea.length; i++) {
						option+="<option value=\""+IkoleEkiti.listofArea[i].areaname+"\">"+IkoleEkiti.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "IkereEkiti":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < IkereEkiti.listofArea.length; i++) {
						option+="<option value=\""+IkereEkiti.listofArea[i].areaname+"\">"+IkereEkiti.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Enugu":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < EnuguT.listofArea.length; i++) {
						option+="<option value=\""+EnuguT.listofArea[i].areaname+"\">"+EnuguT.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Abuja":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Abuja.listofArea.length; i++) {
						option+="<option value=\""+Abuja.listofArea[i].areaname+"\">"+Abuja.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Gombe":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < GombeT.listofArea.length; i++) {
						option+="<option value=\""+GombeT.listofArea[i].areaname+"\">"+GombeT.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Owerri":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Owerri.listofArea.length; i++) {
						option+="<option value=\""+Owerri.listofArea[i].areaname+"\">"+Owerri.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Orlu":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Orlu.listofArea.length; i++) {
						option+="<option value=\""+Orlu.listofArea[i].areaname+"\">"+Orlu.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Okigwe":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Okigwe.listofArea.length; i++) {
						option+="<option value=\""+Okigwe.listofArea[i].areaname+"\">"+Okigwe.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Dutse":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Dutse.listofArea.length; i++) {
						option+="<option value=\""+Dutse.listofArea[i].areaname+"\">"+Dutse.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Hadejia":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Hadejia.listofArea.length; i++) {
						option+="<option value=\""+Hadejia.listofArea[i].areaname+"\">"+Hadejia.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "KadunaT":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < KadunaT.listofArea.length; i++) {
						option+="<option value=\""+KadunaT.listofArea[i].areaname+"\">"+KadunaT.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Zaria":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Zaria.listofArea.length; i++) {
						option+="<option value=\""+Zaria.listofArea[i].areaname+"\">"+Zaria.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Kano":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < KanoT.listofArea.length; i++) {
						option+="<option value=\""+KanoT.listofArea[i].areaname+"\">"+KanoT.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Wudil":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Wudil.listofArea.length; i++) {
						option+="<option value=\""+Wudil.listofArea[i].areaname+"\">"+Wudil.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Katsina":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < KatsinaT.listofArea.length; i++) {
						option+="<option value=\""+KatsinaT.listofArea[i].areaname+"\">"+KatsinaT.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Funtua":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Funtua.listofArea.length; i++) {
						option+="<option value=\""+Funtua.listofArea[i].areaname+"\">"+Funtua.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Daura":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Daura.listofArea.length; i++) {
						option+="<option value=\""+Daura.listofArea[i].areaname+"\">"+Daura.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "BirninKebbi":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < BirninKebbi.listofArea.length; i++) {
						option+="<option value=\""+BirninKebbi.listofArea[i].areaname+"\">"+BirninKebbi.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;		
				case "Argungu":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Argungu.listofArea.length; i++) {
						option+="<option value=\""+Argungu.listofArea[i].areaname+"\">"+Argungu.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Zuru":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Zuru.listofArea.length; i++) {
						option+="<option value=\""+Zuru.listofArea[i].areaname+"\">"+Zuru.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Yauri":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Yauri.listofArea.length; i++) {
						option+="<option value=\""+Yauri.listofArea[i].areaname+"\">"+Yauri.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Kabba":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Kabba.listofArea.length; i++) {
						option+="<option value=\""+Kabba.listofArea[i].areaname+"\">"+Kabba.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;
				case "Ilorin":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Ilorin.listofArea.length; i++) {
						option+="<option value=\""+Ilorin.listofArea[i].areaname+"\">"+Ilorin.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Lagos":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < LagosT.listofArea.length; i++) {
						option+="<option value=\""+LagosT.listofArea[i].areaname+"\">"+LagosT.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Badagry":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Badagry.listofArea.length; i++) {
						option+="<option value=\""+Badagry.listofArea[i].areaname+"\">"+Badagry.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Ikorodu":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Ikorodu.listofArea.length; i++) {
						option+="<option value=\""+Ikorodu.listofArea[i].areaname+"\">"+Ikorodu.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				case "Badagry":	
					
					option = "<option value=\"SelectStreet\">SelectStreet</option> ";
					for (var i = 0	; i < Badagry.listofArea.length; i++) {
						option+="<option value=\""+Badagry.listofArea[i].areaname+"\">"+Badagry.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;																		
				default:
					break;		

			}		
			break;
		case "selectArea":
			var getArea = document.getElementById(a).value;
			var getStreet = document.getElementById('selectStreet');
			getStreet.style.display = "inline";
			
			switch(getArea ){
				case "SelectStreet":
					getArea.style.display = "none"; 
				case "Umuahia":	
					
					/**option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Umuahia.listofArea.length; i++) {
						option+="<option value=\""+Umuahia.listofArea[i].areaname+"\">"+Umuahia.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	**/
				
				default:
					break;		

			}
			break;
			/**case "selectStreet":
			var getStreet = document.getElementById(a).value;
			var getCode = document.getElementById('selectStreet');
			getStreet.style.display = "inline";
			
			switch(getArea ){
				case "SelectStreet":
					getArea.style.display = "none"; 
				case "Umuahia":	
					
					option = "<option value=\"SelectTown\">SelectTown</option> ";
					for (var i = 0	; i < Umuahia.listofArea.length; i++) {
						option+="<option value=\""+Umuahia.listofArea[i].areaname+"\">"+Umuahia.listofArea[i].areaname+"</option>";
					}
					getArea.innerHTML = option;
					break;	
				
				default:
					break;		

			}	**/
		default:
			break;	
		

		}

		
	
}

function closeOthers(o){
	var getId = o.id;

	switch(getId){
		case "selectState":
			document.getElementById('selectTown').style.display ="none";
			document.getElementById('selectTown').innerHTML ="";
			document.getElementById('selectArea').style.display ="none";
			document.getElementById('selectArea').innerHTML =" ";
			document.getElementById('selectStreet').style.display ="none";
			document.getElementById('selectStreet').innerHTML ="<option value=\"SelectStreet\">SelectStreet</option> ";
			break;
		case "selectTown":
			document.getElementById('selectArea').style.display ="none";	
			document.getElementById('selectStreet').style.display ="none";
			break;
		case "selectArea":
			document.getElementById('selectStreet').style.display ="none";	
	}
}
var states = {
	listofTowns:[], 
	statenumber:0,
	statename:"name"

};

var town = {
	listofArea:[],
	townnumber:0,
	townname:"name"
};

var area={
	listofStreet:[],
	areanumber:0,
	areaname:"name"

};

var street = {
	streetnumber:0,
	streetname: "name"

};
//various states in nigeria(36)
var Abia = Object.create(states); Abia.statename = "Abia";
var Adamawa=Object.create(states);Adamawa.statename = "Adamawa";
var AkwaIbom=Object.create(states);AkwaIbom.statename = "AkwaIbom";
var Anambra=Object.create(states);Anambra.statename = "Anambra";
var Bauchi= Object.create(states);Bauchi.statename = "Bauchi";
var Bayelsa=Object.create(states);Bayelsa.statename = "Bayelsa";
var Benue=Object.create(states); Benue.statename = "Benue";
var Borno=Object.create(states); Borno.statename = "Borno";
var CrossRiver=Object.create(states); CrossRiver.statename= "CrossRiver";
var Delta=Object.create(states); Delta.statename = "Delta";
var Ebonyi=Object.create(states);Ebonyi.statename = "Ebonyi";
var Edo=Object.create(states);Edo.statename = "Edo";
var Ekiti=Object.create(states);Ekiti.statename = "Ekiti";
var Enugu=Object.create(states); Enugu.statename = "Enugu";
var FCT=Object.create(states); FCT.statename = "FCT";
var Gombe=Object.create(states);Gombe.statename = "Gombe";
var Imo=Object.create(states);Imo.statename = "Imo";
var Jigawa=Object.create(states);Jigawa.statename = "Jigawa";
var Kaduna=Object.create(states);Kaduna.statename = "Kaduna";
var Kano=Object.create(states); Kano.statename = "Kano";
var Katsina=Object.create(states); Katsina.statename = "Katsina";	
var Kebbi=Object.create(states); Kebbi.statename = "Kebbi";
var Kogi=Object.create(states); Kogi.statename = "Kogi";
var Kwara=Object.create(states); Kwara.statename = "Kwara";
var Lagos=Object.create(states); Lagos.statename = "Lagos";	
var Nasarawa=Object.create(states); Nasarawa.statename = "Nasarawa";
var Niger=Object.create(states); Niger.statename = "Niger";	
var Ogun=Object.create(states);  Ogun.statename = "Ogun";
var Ondo=Object.create(states);	 Ondo.statename = "Ondo";	
var Osun=Object.create(states);  Osun.statename = "Osun";
var Oyo=Object.create(states);   Oyo.statename = "Oyo";
var Plateau= Object.create(states); Plateau.statename = "Plateau";
var Rivers= Object.create(states); 	Rivers.statename= "Rivers";	
var Sokoto= Object.create(states);  Sokoto.statename = "Sokoto";
var Taraba=Object.create(states);	Taraba.statename = "Taraba";
var Yobe=Object.create(states);		Yobe.statename = "Yobe";
var Zamfara =Object.create(states);	Zamfara.statename = "Zamfara";

var listOfStates = [Abia,Adamawa,AkwaIbom,Anambra,Bauchi,Bayelsa,Benue,Borno,CrossRiver,Delta,Ebonyi,Edo,Ekiti,Enugu,FCT,Gombe,Imo,Jigawa,Kaduna,Kano,Katsina,Kebbi,Kogi,Kwara,Lagos,Nasarawa,Niger,Ogun,Ondo,Osun,Oyo,Plateau,Rivers,Sokoto,Taraba,Yobe,Zamfara];

//towns in each respective states
var Umuahia = Object.create(town); Umuahia.townname = "Umuahia";
var	Aba = Object.create(town); 		Aba.townname = "Aba";
var Jimeta	= Object.create(town);  Jimeta.townname = "Jimeta";
var Yola = Object.create(town);		Yola.townname = "Yola";
var Mubi = Object.create(town);		Mubi.townname	= "Mubi";
var Uyo = Object.create(town);		Uyo.townname = "Uyo";
var Awka = Object.create(town);		Awka.townname = "Awka";
var Onitsha = Object.create(town);	Onitsha.townname = "Onitsha";
var BauchiT = Object.create(town);	BauchiT.townname = "Bauchi";
var Yenagoa = Object.create(town);  Yenagoa.townname = "Yenagoa"; 
var Makurdi = Object.create(town);	Makurdi.townname = "Makurdi"; //benue
var Otukpo = Object.create(town);	Otukpo.townname = "Otukpo"; //benue
var	Maiduguri = Object.create(town); Maiduguri.townname = "Maiduguri";//borno
var Bama = Object.create(town); Bama.townname = "Bama";//borno
var Biu = Object.create(town);  Biu.townname = "Biu";//borno
var Calabar = Object.create(town); Calabar.townname = "Calabar" //crossriver
var Ikom = Object.create(town); Ikom.townname = "Ikom"; //crossriver
var Asaba = Object.create(town); Asaba.townname = "Asaba"; //delta
var Agbor = Object.create(town); Agbor.townname = "Agbor" ;//delta
var Warri= Object.create(town); Warri.townname = "Warri"; //delta
var Sapele = Object.create(town); Sapele.townname = "Sapele"; //detla	
var Abakaliki = Object.create(town); Abakaliki.townname = "Abakaliki";//Ebonyi
var BeninCity = Object.create(town); BeninCity.townname = "BeninCity";//Edo
var Ubiaja = Object.create(town); Ubiaja.townname = "Ubiaja";//Edo
var AdoEkiti = Object.create(town); AdoEkiti.townname = "AdoEkiti";//Ekiti
var IkoleEkiti = Object.create(town); IkoleEkiti.townname = "IkoleEkiti";//ekiti
var IkereEkiti = Object.create(town); IkereEkiti.townname =  "IkereEkiti";//ekiti
var EnuguT = Object.create(town); EnuguT.townname = "Enugu";//Enugu
var Abuja = Object.create(town); Abuja.townname = "Abuja"; //Abuja
var GombeT = Object.create(town); GombeT.townname = "Gombe";//Gombe
var Owerri = Object.create(town); Owerri.townname = "Owerri";//Imo
var Orlu = Object.create(town); Orlu.townname = "Orlu";//Imo
var Okigwe = Object.create(town); Okigwe.townname = "Okigwe";//Imo
var Dutse = Object.create(town); Dutse.townname = "Dutse";////JIgawa
var Hadejia =  Object.create(town); Hadejia.townname = "Hadejia";//Jigawa
var KadunaT = Object.create(town); KadunaT.townname = "Kaduna";//Kaduna	
var Zaria = Object.create(town); Zaria.townname = "Zaria";//kaduna
var KanoT = Object.create(town); KanoT.townname = "Kano";//kano
var Wudil = Object.create(town); Wudil.townname = "Wudil";//kano
var KatsinaT = Object.create(town); KatsinaT.townname = "Katsina";//katsina
var Funtua = Object.create(town); Funtua.townname = "Funtua";//Katsina
var Daura = Object.create(town); Daura.townname = "Daura"; //Katsina 	
var BirninKebbi = Object.create(town); BirninKebbi.townname = "BirninKebbi";//Kebbi
var Argungu = Object.create(town); Argungu.townname = "Argungu"; //kebbi
var Zuru = Object.create(town); Zuru.townname = "Zuru"; //Kebbi
var Yauri = Object.create(town); Yauri.townname = "Yauri"; //kebbi
var Kabba = Object.create(town); Kabba.townname = "Kabba"; //Kogi
var Ilorin = Object.create(town); Ilorin.townname = "Ilorin";//Kwara
var LagosT = Object.create(town); LagosT.townname = "Lagos";//Lagos
var Badagry= Object.create(town); Badagry.townname = "Badagry" ;//Lagos
var Ikorodu= Object.create(town); Ikorodu.townname = "Ikorodu";//Lagos	
var Lafia = Object.create(town); Lafia.townname = "Lafia"; //Nasarawa
var Minna = Object.create(town); Minna.townname = "Minna"; //Niger
var Bida  = Object.create(town); Bida.townname = "Bida"; //Niger
var Abeokuta = Object.create(town); Abeokuta.townname = "Abeokuta";//Ogun
var SangoOta = Object.create(town); SangoOta.townname = "SangoOta";//Ogun
var IjebuOde = Object.create(town); IjebuOde.townname = "IjebuOde";//Ogun
var Akure = Object.create(town); Akure.townname = "Akure";//Ondo
var IkareAkoko = Object.create(town); IkareAkoko.townname = "IkareAkoko";//Ondo
var Oshogbo = Object.create(town); Oshogbo.townname = "Oshogbo"; //Osun
var IfeCentral = Object.create(town); IfeCentral.townname = "IfeCentral";//oSUN
var Modakeke = Object.create(town); Modakeke.townname = "Modakeke";//Osun
var Ipetumodu = Object.create(town); Ipetumodu.townname = "Ipetumodu"; //Osun
var IjebuIjesa = Object.create(town); IjebuIjesa.townname = "IjebuIjesa";//Osun
var Ilesa = Object.create(town); Ilesa.townname = "Ilesa"; //Osun
var Ibadan = Object.create(town); Ibadan.townname = "Ibadan";//Oyo
var Ogbomoso = Object.create(town); Ogbomoso.townname = "Ogbomoso"; //oYO
var OyoT = Object.create(town); OyoT.townname = "Oyo";//Oyo
var Jos = Object.create(town); Jos.townname = "Jos";//Plateau
var BarkinLadi = Object.create(town); BarkinLadi.townname = "BarkinLadi" ;//plateau
var PortHarcourt = Object.create(town); PortHarcourt.townname = "PortHarcourt";//Rivers
var Ahoada = Object.create(town); Ahoada.townname = "Ahoada";//Rivers
var SokotoT = Object.create(town); SokotoT.townname = "Sokoto";//Sokoto
var Tambawal = Object.create(town); Tambawal.townname = "Tambawal";//Sokoto
var Jalingo = Object.create(town); Jalingo.townname = "Jalingo"; //Taraba
var Nguru = Object.create(town); Nguru.townname = "Nguru";//Yobe
var Damaturu = Object.create(town); Damaturu.townname = "Damaturu";//Yobe
var Gusau = Object.create(town); Gusau.townname = "Gusau";//Zamfara
var KauranNamoda = Object.create(town); KauranNamoda.townname = "KauranNamoda";//Zamfara			

//create area objects
var Afara = Object.create(area); Afara.areaname = "Afara"; //umuahia
var Amuzukwu = Object.create(area); Amuzukwu.areaname = "Amuzukwu";
var Ugwunchara = Object.create(area); Ugwunchara.areaname = "Ugwunchara";
var UmuahiaUrban3 = Object.create(area); UmuahiaUrban3.areaname = "Umuahia Urban III";
var UmuahiaUrban1 = Object.create(area); UmuahiaUrban1.areaname = "Umuahia Urban I";
var Ossah = Object.create(area); Ossah.areaname = "Ossah";
var WorldBank = Object.create(area); WorldBank.areaname = "World Bank"; //Umuahia
var AbaCentral = Object.create(area); AbaCentral.areaname = "Aba Central";//Aba
var EziamaLayout = Object.create(area); EziamaLayout.areaname = "Eziama-Layout";
var Ovom = Object.create(area); Ovom.areaname = "Ovom";
var IheorjiLayout = Object.create(area); IheorjiLayout.areaname = "Iheorji-Layout";
var Abaukwu = Object.create(area); Abaukwu.areaname = "Abaukwu";
var OhabiamLayout = Object.create(area); OhabiamLayout.areaname = "Ohabiam-Layout";
var Asaokpuja = Object.create(area); Asaokpuja.areaname="Asaokpuja";
var OsusuLayout = Object.create(area); OsusuLayout.areaname = "Osusu-Layout";
var Umungasi = Object.create(area); Umungasi.areaname = "Umungasi";//Aba
var Majalisa = Object.create(area); Majalisa.areaname = "Majalisa";//Jimeta
var Gwadabawa = Object.create(area); Gwadabawa.areaname = "Gwadabawa";
var OldGRA = Object.create(area);OldGRA.areaname = "Old G.R.A";
var Karewa = Object.create(area); Karewa.areaname = "Karewa";
var Damilo = Object.create(area); Damilo.areaname = "Damilo";
var Luggere = Object.create(area); Luggere.areaname = "Luggere";
var Demsawo = Object.create(area); Demsawo.areaname = "Demsawo";
var Jambutu = Object.create(area); Jambutu.areaname = "Jambutu";
var Dubeli = Object.create(area); Dubeli.areaname = "Dubeli";//Jimeta
var LamidoPalace = Object.create(area); LamidoPalace.areaname = "Lamido Palace";//Yola
var FederalHousing = Object.create(area); FederalHousing.areaname = "Federal Housing"; //yOLA
var ShuwareWard = Object.create(area); ShuwareWard.areaname = "Shuware Ward";//Mubi
var Airfield = Object.create(area); Airfield.areaname = "Airfield";
var Lukuwa = Object.create(area); Lukuwa.areaname = "Lukuwa";
var SchoolOfArts = Object.create(area); SchoolOfArts.areaname = "School Of Arts";
var WuroPatuji = Object.create(area); WuroPatuji.areaname = "Wuro Patuji";
var NasarawaA = Object.create(area); NasarawaA.areaname = "Nasarawa";
var WuroJibirward = Object.create(area); WuroJibirward.areaname = "Wuro Jibirward";
var Industrial = Object.create(area); Industrial.areaname = "Industrial";
var Ijari = Object.create(area); Ijari.areaname = "Ijari";
var YelwaWard = Object.create(area); YelwaWard.areaname = "Yelwa Ward";
var KochifaWard = Object.create(area); KochifaWard.areaname = "Kochifa Ward";
var WuroGudeWard = Object.create(area); WuroGudeWard.areaname = "Wuro Gude Ward"; //mubi
var FahaOkuAkpon = Object.create(area); FahaOkuAkpon.areaname = "Faha Oku Akpon";//uyo
var MilitaryOfficeIbaOku = Object.create(area); MilitaryOfficeIbaOku.areaname = "Military Office Iba Oku";
var CatholicSecretary = Object.create(area); CatholicSecretary.areaname ="Catholic Secretary";
var AkpanSt = Object.create(area); AkpanSt.areaname = "Akpan St.";
var HousingEstateEwet = Object.create(area); HousingEstateEwet.areaname = "Housing Estate Ewet";
var EwetVillage = Object.create(area); EwetVillage.areaname = "Ewet Village";
var ItiamIkotAbia = Object.create(area); ItiamIkotAbia.areaname = "Itiam Ikot Abia";
var UyoMarket = Object.create(area); UyoMarket.areaname = "Uyo Market";
var Iboko = Object.create(area); Iboko.areaname = "Iboko";
var SchoolOfArtAndScience = Object.create(area); SchoolOfArtAndScience.areaname = "School Of Art And Science";//Uyo
var HighCourt = Object.create(area); HighCourt.areaname="High Court";//Awka
var IndustrialLayout = Object.create(area); IndustrialLayout.areaname = "Industrial Layout";
var CemestryArea = Object.create(area);  CemestryArea.areaname = "Cemestry Area";
var ObunaguVill = Object.create(area); ObunaguVill.areaname = "Obunagu Vill";
var AsuTechArea = Object.create(area); AsuTechArea.areaname = "Asu Tech Area";
var IzuochaLayout = Object.create(area); IzuochaLayout.areaname = "Izuocha Layout";//Awka  
var AwkaRd = Object.create(area); AwkaRd.areaname = "AwkaRd";//Onitsha
var OnyeaboSt = Object.create(area); OnyeaboSt.areaname = "Onyeabo St";
var Obompa = Object.create(area); Obompa.areaname="Obompa";
var UperIweka = Object.create(area); UperIweka.areaname = "Uper Iweka";
var OmagbaLytPhase = Object.create(area); OmagbaLytPhase.areaname = "Omagba Lyt Phase I & II";
var NewMarketRd = Object.create(area); NewMarketRd.areaname = "New Market Rd";
var Odoakpu = Object.create(area); Odoakpu.areaname = "Odoakpu";
var OgutaRd = Object.create(area); OgutaRd.areaname = "OgutaRd";
var IwekaRd = 	Object.create(area); IwekaRd.areaname = "Iweka Rd";
var ZikA = Object.create(area); ZikA.areaname = "Zik A";
var NigerBridgeHeadRd = Object.create(area); NigerBridgeHeadRd.areaname = "Niger Bridge Head Rd";
var Ose1 = Object.create(area); Ose1.areaname = "Ose I";
var Ose2 = Object.create(area); Ose2.areaname = "Ose II";
var GRA1 = Object.create(area); GRA1.areaname = "GRA I";
var GRA2 = Object.create(area); GRA2.areaname = "GRA II";
var GRA3 = Object.create(area); GRA3.areaname = "GRA III";
var Ogidi = Object.create(area); Ogidi.areaname = "Ogidi";
var UmusiomeIbo = Object.create(area); UmusiomeIbo.areaname = "Umusiome Ibo";
var AkuzorRd = Object.create(area); AkuzorRd.areaname = "Akuzor Rd";
var Ububa = Object.create(area); Ububa.areaname = "Ububa";
var Amafor = Object.create(area); Amafor.areaname = "Amafor"; 
var NkporNewMkt = Object.create(area); NkporNewMkt.areaname = "Nkpor New Mkt";
var AguluA = Object.create(area); AguluA.areaname = "Agulu A" ;
var AkuzorVillage = Object.create(area); AkuzorVillage.areaname = "Akuzor Village";
var OdumeLayout1 = Object.create(area); OdumeLayout1.areaname = "Odume Layout I";
var OdumeLayout2 = Object.create(area); OdumeLayout2.areaname = "Odume Layout II";
var UruowuluVillage = Object.create(area); UruowuluVillage.areaname = "Uruowulu Village"; 
var Umuota = Object.create(area); Umuota.areaname = "Umuota";
var EjikemeQtrs = Object.create(area); EjikemeQtrs.areaname = "Ejikeme Qtrs";
var Aforadike = Object.create(area); Aforadike.areaname = "Aforadike"; //Onitsha
var KofarJahun = Object.create(area); KofarJahun.areaname = "Kofar Jahun";//BauchiT
var Bacas = Object.create(area); Bacas.areaname = "Bacas";
var TafawaBalewaHousingEstate = Object.create(area) ; TafawaBalewaHousingEstate.areaname = "Tafawa Balewa Housing Estate";
var KofarWasa = Object.create(area); KofarWasa.areaname = "Kofar Wasa";
var KofarWambai = Object.create(area); KofarWambai.areaname = "Kofar Wambai";
var GumiHill = Object.create(area); GumiHill.areaname = "Gumi Hill";
var RailwayStation = Object.create(area); RailwayStation.areaname = "Railway Station";
var TambarariVillage = Object.create(area); TambarariVillage.areaname = "Tambarari Village";
var AbubakarUmarStateSecretariat = Object.create(area); AbubakarUmarStateSecretariat.areaname = "Abubakar Umar State Secretariat";
var Lushi = Object.create(area); Lushi.areaname = "Lushi";
var GRABT = Object.create(area); GRABT.areaname = "G.R.A";
var AbubakarTafawaBalewaUniversity = Object.create(area); AbubakarTafawaBalewaUniversity.areaname = "Abubakar Tafawa Balewa University";
var ArmyBarracks = Object.create(area); ArmyBarracks.areaname = "ArmyBarracks";//Bauchi
var Ekeki = Object.create(area); Ekeki.areaname = "Ekeki";//Yenagoa
var Okaka = Object.create(area); Okaka.areaname = "Okaka";
var Kpansia = Object.create(area); Kpansia.areaname = "Kpansia";
var EdeEpe = Object.create(area); EdeEpe.areaname ="Ede-Epe";
var Imgbi = Object.create(area); Imgbi.areaname = "Imgbi";
var Swali = Object.create(area); Swali.areaname = "Swali";
var JuliusBerger = Object.create(area); JuliusBerger.areaname = "Julius Berger";
var AmarataEpie = Object.create(area); AmarataEpie.areaname = "Amarata Epie";
var NipostMakt = Object.create(area); NipostMakt.areaname = "Nipost Makt";
var Bebelebiri  = Object.create(area); Bebelebiri.areaname = "Bebelebiri 1 & 2";//Yenagoa
var GRAMT = Object.create(area); GRAMT.areaname = "G.R.A";//Makurdi
var ArmyBarracksMT = Object.create(area); ArmyBarracksMT.areaname = "Army Barracks";
var FederalHousingArea = Object.create(area); FederalHousingArea.areaname ="Federal Housing Area";
var HighLevelAssVill = Object.create(area); HighLevelAssVill.areaname = "High Level Ass Vill";
var Wurukum = Object.create(area); Wurukum.areaname = "Wurukum";
var UnijosCampus = Object.create(area); UnijosCampus.areaname = "Unijos Campus";
var HudcoQuarters = Object.create(area); HudcoQuarters.areaname = "Hudco Quarters";
var Wadata = Object.create(area); Wadata.areaname = "Wadata";
var Kokoroo = Object.create(area); Kokoroo.areaname = "Kokoroo";
var GeneralHospital = Object.create(area); GeneralHospital.areaname ="General Hospital";
var SabonGari = Object.create(area);SabonGari.areaname = "Sabon Gari";
var EupiNewLayout = Object.create(area); EupiNewLayout.areaname = "Eupi-New Layout";
var Eupi = Object.create(area); Eupi.areaname = "Eupi";
var FederalLow = Object.create(area); FederalLow.areaname = "Federal Low";//Makurdi
var OchidoPalace = Object.create(area); OchidoPalace.areaname = "Ochido's Palace";//Otukpo
var AhmaduBello = Object.create(area); AhmaduBello.areaname = "Ahmadu Bello";
var NewMarket = Object.create(area); NewMarket.areaname = "New Market";
var OOL = Object.create(area); OOL.areaname = "OOL";
var LocalGovernmentClinic = Object.create(area); LocalGovernmentClinic.areaname = "Local Government Clinic";
var EllaMarket = Object.create(area); EllaMarket.areaname = "Ella Market";
var NoCross = Object.create(area); NoCross.areaname = "No. Cross";
var UPURd = Object.create(area); UPURd.areaname = "UPU Rd.";
var GRAOT = Object.create(area); GRAOT.areaname = "G.R.A";
var PostOffice = Object.create(area); PostOffice.areaname = "Post Office";
var RailwayStationOT  = Object.create(area); RailwayStationOT.areaname = "Railway Station";
var MinistryOfWorks = Object.create(area); MinistryOfWorks.areaname = "Ministry Of Works";
var GeneralHospitalOT = Object.create(area); GeneralHospitalOT.areaname = "General Hospital";
var RiceMill = Object.create(area); RiceMill.areaname = "Rice Mill";
var SabonGariOT = Object.create(area); SabonGariOT.areaname = "Sabon Gari";
var Ogwonogba = Object.create(area); Ogwonogba.areaname = "Ogwonogba";//Otukpo
var PostOfficeMT = Object.create(area); PostOfficeMT.areaname = "PostOffice";//	Maiduguri
var ShehuPalace = Object.create(area); ShehuPalace.areaname = "Shehu's Palace";
var Lamisula = Object.create(area); Lamisula.areaname = "Lamisula / Mafoni";
var MaiduguriFlourMills = Object.create(area); MaiduguriFlourMills.areaname = "Maiduguri Flour Mills";
var StateLowCost = Object.create(area); StateLowCost.areaname = "State Low Cost";
var Bulabulin = Object.create(area); Bulabulin.areaname = "Bulabulin";
var Gamboru = Object.create(area); Gamboru.areaname = "Gamboru";
var CollegeOfAgric = Object.create(area); CollegeOfAgric.areaname = "College Of Agric";
var LondonCiki = Object.create(area); LondonCiki.areaname = "London Ciki";
var GovernmentHouse = Object.create(area); GovernmentHouse.areaname = "Government House";
var NewGRA = Object.create(area); NewGRA.areaname = "New G.R.A";
var Gwange = Object.create(area); Gwange.areaname = "Gwange";
var NursingHome = Object.create(area); NursingHome.areaname = "Nursing Home";
var GRAPoliceStation = Object.create(area); GRAPoliceStation.areaname = "G.R.A Police Station";
var NIPOSTHeadQuarters = Object.create(area); NIPOSTHeadQuarters.areaname = "NIPOST Head Quarters";
var MolaiGRA = Object.create(area); MolaiGRA.areaname = "Molai G.R.A";
var PoliceCollege = Object.create(area); PoliceCollege.areaname = "Police College";
var NNPCDepot = Object.create(area); NNPCDepot.areaname = "NNPC Depot";
var ElkanemiIslamicTheology = Object.create(area); ElkanemiIslamicTheology.areaname = "Elkanemi Islamic Theology";
var Stadium = Object.create(area); Stadium.areaname = "Stadium";
var PompamariIndustrial = Object.create(area); PompamariIndustrial.areaname = "Pompamari Industrial";
var CocacolaFactory = Object.create(area); CocacolaFactory.areaname = "Coca Cola Factory";
var Bolori = Object.create(area); Bolori.areaname = "Bolori";
var PompamariHousingEstate = Object.create(area); PompamariHousingEstate.areaname = "Pompamari Housing Estate";//Maiduguri
var Kasugula = Object.create(area); Kasugula.areaname = "Kasugula";//Bama
var Tandari = Object.create(area); Tandari.areaname = "Tandari";
var BulabulinBT = Object.create(area); BulabulinBT.areaname = "Bulabulin";
var Kangeleri = Object.create(area); Kangeleri.areaname = "Kangeleri";
var Makintari = Object.create(area); Makintari.areaname = "Makintari";
var Kidari = Object.create(area); Kidari.areaname = "Kidari";
var Yerimari = Object.create(area); Yerimari.areaname = "Yerimari";
var Kaigamari = Object.create(area); Kaigamari.areaname = "Kaigamari";
var Ajari = Object.create(area); Ajari.areaname = "Ajari";
var Zannari = Object.create(area); Zannari.areaname = "Zannari";//Bama Abuja???
var Dugja = Object.create(area); Dugja.areaname = "Dugja";//Biu
var MbulaMel = Object.create(area); MbulaMel.areaname = "Mbula Mel.";
var Zarawuyaku = Object.create(area); Zarawuyaku.areaname = "Zarawuyaku";
var Waka = Object.create(area); Waka.areaname = "Waka";
var MandaraAbdu = Object.create(area); MandaraAbdu.areaname = "Mandara Abdu";
var Garwashina = Object.create(area); Garwashina.areaname = "Garwashina";
var Galdimary = Object.create(area); Galdimary.areaname = "Galdimary";
var Birmajugwal = Object.create(area); Birmajugwal.areaname = "Birmajugwal";
var Tabra = Object.create(area); Tabra.areaname = "Tabra";//Biu
var Ediba = Object.create(area); Ediba.areaname = "Ediba";//Calabar
var IkotAnsa = Object.create(area); IkotAnsa.areaname = "Ikot Ansa";
var IkotOmin = Object.create(area); IkotOmin.areaname = "Ikot Omin";
var Airport = Object.create(area); Airport.areaname = "Airport";
var StateHousingEstate = Object.create(area); StateHousingEstate.areaname = "State Housing Estate";
var Bogobiri = Object.create(area); Bogobiri.areaname = "Bogobiri";
var EtaAgbor = Object.create(area); EtaAgbor.areaname = "Eta Agbor";
var Goldie = Object.create(area); Goldie.areaname = "Goldie";
var DanArchibon = Object.create(area); DanArchibon.areaname = "Dan Archibon";
var EkpoAbasi = Object.create(area); EkpoAbasi.areaname = "Ekpo Abasi";
var Uwanse = Object.create(area); Uwanse.areaname = "Uwanse";
var StadiumCT = Object.create(area); StadiumCT.areaname = "Stadium";
var Egerton = Object.create(area); Egerton.areaname = "Egerton";
var EgertonArea2 = Object.create(area); EgertonArea2.areaname = "Egerton Area II";
var EssienTown = Object.create(area); EssienTown.areaname = "EssienTown";
var Ikorinim = Object.create(area); Ikorinim.areaname = "Ikorinim";//Calabar
var BojorAchibong = Object.create(area); BojorAchibong.areaname = "BojorAchibong";//Ikom
var ScoutLane = Object.create(area); ScoutLane.areaname = "Scout Lane";
var ObuduRd = Object.create(area); ObuduRd.areaname = "Obudu Rd";
var CalabarRd = Object.create(area); CalabarRd.areaname = "Calabar Rd";
var OgjaRd = Object.create(area); OgjaRd.areaname = "Ogja Rd";
var OkimOsaborRd = Object.create(area); OkimOsaborRd.areaname = "Okim Osabor Rd";
var CommSecSch = Object.create(area); CommSecSch.areaname = "Comm. Sec. Sch.";
var PostOfficeForestry = Object.create(area); PostOfficeForestry.areaname = "Post Office Forestry";
var Bisiri = Object.create(area); Bisiri.areaname = "Bisiri";
var LocalGovtCouncil = Object.create(area); LocalGovtCouncil.areaname = "Local Govt. Council";
var Ukwel = Object.create(area); Ukwel.areaname = "Ukwel";
var UdamaUbug = Object.create(area); UdamaUbug.areaname = "Udama Ubug";
var MainMarket = Object.create(area); MainMarket.areaname = "Main Market";
var MissionRoad = Object.create(area); MissionRoad.areaname = "Mission Road";
var Abakpa = Object.create(area); Abakpa.areaname = "Abakpa";
var Ukelle = Object.create(area); Ukelle.areaname = "Ukelle";
var Ukamusha = Object.create(area); Ukamusha.areaname = "Ukamusha";
var Okuku = Object.create(area); Okuku.areaname = "Okuku";
var Biko = Object.create(area); Biko.areaname = "Biko";//Ikom 
var Umueze = Object.create(area); Umueze.areaname = "Umueze";//Asaba
var Ezenei = Object.create(area); Ezenei.areaname = "Ezenei";
var CablePoint = Object.create(area); CablePoint.areaname = "Cable Point";
var OverheadBridgeLayout = Object.create(area); OverheadBridgeLayout.areaname = "Overhead Bridge Layout";
var Umuonaje = Object.create(area); Umuonaje.areaname = "Umuonaje";
var Isieke = Object.create(area); Isieke.areaname = "Isieke";
var Umuagu = Object.create(area); Umuagu.areaname = "Umuagu";
var CentralCoreArea = Object.create(area); CentralCoreArea.areaname = "Central Core Area";
var OkpanamAsabaRd = Object.create(area); OkpanamAsabaRd.areaname = "Okpanam Asaba Rd.";//Asaba
var BojiBojiAgbor = Object.create(area); BojiBojiAgbor.areaname = "Boji-Boji Agbor";//Agbor
var BDPAArea = Object.create(area); BDPAArea.areaname = "B.D.P.A Area";
var OwaAleroRd = Object.create(area); OwaAleroRd.areaname = "Owa-Alero Rd.";
var BoliBojiOwa = Object.create(area); BoliBojiOwa.areaname = "Boli-Boji Owa";
var GRAAT = Object.create(area); GRAAT.areaname = "G.R.A";
var AlibubaQuarters = Object.create(area); AlibubaQuarters.areaname = "Alibuba Quarters";//Agbor
var OkuamagbaLayout = Object.create(area); OkuamagbaLayout.areaname = "Okuamagba Layout";//Warri
var Ugborikoko = Object.create(area); Ugborikoko.areaname = "Ugborikoko";
var WarriAirport = Object.create(area); WarriAirport.areaname = "Warri Airport";
var UpperErejuwa = Object.create(area); UpperErejuwa.areaname = "Upper Erejuwa";
var AldersTown = Object.create(area); AldersTown.areaname = "Alders Town";
var NBTC = Object.create(area); NBTC.areaname = "NBTC";
var GolfCourseRd = Object.create(area); GolfCourseRd.areaname = "Golf Course Rd.";
var BorrowPit = Object.create(area); BorrowPit.areaname = "Borrow Pit";
var EkpanTori = Object.create(area); EkpanTori.areaname = "Ekpan(Tori)";//Warri
var AyomanorRd = Object.create(area); AyomanorRd.areaname = "Ayomanor Rd.";//Sapele
var ChickesterRd = Object.create(area); ChickesterRd.areaname = "Chickester Rd.";
var AtufeRd = Object.create(area); AtufeRd.areaname = "Atufe Rd.";
var AgimeleVillage = Object.create(area); AgimeleVillage.areaname = "Agimele Village";
var OkpeRd = Object.create(area); OkpeRd.areaname = "Okpe Rd.";
var Ojolu = Object.create(area); Ojolu.areaname = "Ojolu/Ghana";
var ReclamationRd = Object.create(area); ReclamationRd.areaname = "Reclamation Rd.";
var CatholicMissionRd = Object.create(area); CatholicMissionRd.areaname = "Catholic Mission Rd.";//Sapele
var NteziAba = Object.create(area); NteziAba.areaname = "Ntezi Aba";//Abakaliki;
var Mbukobe = Object.create(area); Mbukobe.areaname = "Mbukobe";
var UdensiSt = Object.create(area); UdensiSt.areaname = "Udensi St";
var OgbagaRd = Object.create(area); OgbagaRd.areaname = "Ogbaga Rd";
var EnuguOgojaExpr = Object.create(area); EnuguOgojaExpr.areaname = "Enugu-Ogoja Expr.";
var PresscoJunction = Object.create(area); PresscoJunction.areaname = "Pressco Junction";
var OgojaRd = Object.create(area); 	OgojaRd.areaname = "Ogoja Rd.";
var EnuguExpRd = Object.create(area); EnuguExpRd.areaname = "Enugu Exp Rd.";
var AfikpoRd = Object.create(area); AfikpoRd.areaname = "Afikpo Rd.";
var NkalikiRd = Object.create(area); NkalikiRd.areaname = "Nkaliki Rd.";
var EnuguExpress = Object.create(area); EnuguExpress.areaname = "Enugu Express";
var Abakpa = Object.create(area); Abakpa.areaname = "Abakpa";
var Ndiaguo = Object.create(area); Ndiaguo.areaname = "Ndiaguo";
var GRAABT = Object.create(area); GRAABT.areaname = "G.R.A";
var NewLayout = Object.create(area); NewLayout.areaname = "New Layout";
var KpiriKpiri = Object.create(area); KpiriKpiri.areaname = "Kpiri-Kpiri";//Abakaliki
var Ikpoba = Object.create(area); Ikpoba.areaname = "Ikpoba";//Benincity
var Uselu = Object.create(area); Uselu.areaname = "Uselu";
var EkosodinVillage = Object.create(area); EkosodinVillage.areaname = "Ekosodin Village";
var Iwogban = Object.create(area); Iwogban.areaname = "Iwogban";
var Ohovbeokao = Object.create(area); Ohovbeokao.areaname = "Ohovbeokao";
var Uhumwuimwu = Object.create(area); Uhumwuimwu.areaname = "Uhumwuimwu";
var Oregbeni = Object.create(area); Oregbeni.areaname="Oregbeni";
var Ugbekun = Object.create(area); Ugbekun.areaname = "Ugbekun";
var Ogbelaka = Object.create(area); Ogbelaka.areaname = "Ogbelaka";
var GRABCT  = Object.create(area); GRABCT.areaname = "G.R.A";
var Etete = Object.create(area); Etete.areaname = "Etete";
var EwemadeVillage = Object.create(area); EwemadeVillage.areaname = "Ewemade Village";
var OgbaZoo = Object.create(area); OgbaZoo.areaname = "Ogba Zoo/Oba Akenzua II";
var Ekenhaun = Object.create(area); Ekenhaun.areaname = "Ekenhaun";
var Evbotube = Object.create(area); Evbotube.areaname = "Evbotube";
var Use = Object.create(area); Use.areaname = "Use";
var Ihogben  = Object.create(area); Ihogben.areaname = "Ihogben";
var Uwelu = Object.create(area); Uwelu.areaname = "Uwelu";
var Ugbowo = Object.create(area); Ugbowo.areaname = "Ugbowo";//BeninCity
var OldIlushi = Object.create(area); OldIlushi.areaname = "Old Ilushi";//Ubiaja
var EbhuruQuarters1 = Object.create(area); EbhuruQuarters1.areaname = "Ebhuru Quarters I";
var GRAUT = Object.create(area); GRAUT.areaname = "G.R.A";
var EbhuruQuarters2 = Object.create(area); EbhuruQuarters2.areaname = "Ebhuru Quarters II";
var Egbemije = Object.create(area); Egbemije.areaname = "Egbemije";
var OyomonQuarters = Object.create(area); OyomonQuarters.areaname = "Oyomon Quarters";
var UkpajaQuarters = Object.create(area); UkpajaQuarters.areaname = "Ukpaja Quarters";//Ubiaja
var StadiumAET = Object.create(area); StadiumAET.areaname = "Stadium";//AdoEkiti
var OloraPalaceArea = Object.create(area); OloraPalaceArea.areaname = "Olora's Palace Area";
var Ilokun = Object.create(area);Ilokun.areaname = "Ilokun";
var Idolofin = Object.create(area); Idolofin.areaname = "Idolofin";
var FederalPolytechnic = Object.create(area); FederalPolytechnic.areaname = "Federal Polytechnic";
var CocoaDevUnitArea = Object.create(area); CocoaDevUnitArea.areaname = "Cocoa Dev. Unit Area";
var FaleganEstate = Object.create(area); FaleganEstate.areaname = "Falegan Estate";
var GRAAET = Object.create(area); GRAAET.areaname = "G.R.A";
var Araromi = Object.create(area); Araromi.areaname = "Araromi";
var FehintolaEstate  = Object.create(area); FehintolaEstate.areaname = "Fehintola Estate";
var MineCampusEstate = Object.create(area); MineCampusEstate.areaname = "Mine-Campus Estate";//AdoEkiti
var ElekolePalace = Object.create(area); ElekolePalace.areaname = "Elekole's Palace"//IkoleEkiti
var Idemo = Object.create(area); Idemo.areaname = "Idemo";
var Isolo = Object.create(area); Isolo.areaname = "Isolo";
var Amuniklo = Object.create(area); Amuniklo.areaname = "Amuniklo";
var Omodowa = Object.create(area); Omodowa.areaname = "Omodowa";
var IbaleIkoyi = Object.create(area); IbaleIkoyi.areaname = "Ibale Ikoyi";
var Usin = Object.create(area); Usin.areaname = "Usin";
var Isaba = Object.create(area); Isaba.areaname = "Isaba";
var Otunja = Object.create(area); Otunja.areaname = "Otunja";
var Asin= Object.create(area); Asin.areaname = "Asin";
var Igbonna = Object.create(area); Igbonna.areaname = "Igbonna";
var Ilotin = Object.create(area); Ilotin.areaname = "Ilotin";
var IkoyiIkoro = Object.create(area); IkoyiIkoro.areaname = "Ikoyi Ikoro";
var Eruwa = Object.create(area); Eruwa.areaname = "Eruwa";
var Iloka = Object.create(area); Iloka.areaname = "Iloka";
var IkoleGeneralHospital = Object.create(area); IkoleGeneralHospital.areaname = "Ikole General Hospital";
var OkeIru = Object.create(area); OkeIru.areaname = "Oke Iru";
var Imikan = Object.create(area); Imikan.areaname = "Imikan";
var Orin = Object.create(area); Orin.areaname = "Orin";
var OkeIgbala = Object.create(area);OkeIgbala.areaname="Oke Igbala";
var StPeters = Object.create(area); StPeters.areaname = "St. Peters";//IkoleEkiti 
var KojolaQuarters = Object.create(area); KojolaQuarters.areaname = "Kojola Quarters";//IkereEkiti
var IjokaQuarters = Object.create(area); IjokaQuarters.areaname = "Ijoka Quarters";
var Anaye = Object.create(area); Anaye.areaname = "Anaye";
var Ikoyi1 = Object.create(area); Ikoyi1.areaname = "Ikoyi I";
var Ikoyi2 = Object.create(area); Ikoyi2.areaname = "Ikoyi II";
var OdoOja = Object.create(area); OdoOja.areaname = "Odo Oja";
var AmoyeGrammarSchool = Object.create(area); AmoyeGrammarSchool.areaname = "Amoye Grammar School";
var Okeosun = Object.create(area); Okeosun.areaname = "Okeosun";
var Onward = Object.create(area); Onward.areaname = "Onward";
var OdoIse = Object.create(area); OdoIse.areaname = "Odo Ise";
var AjogbejeQuarters = Object.create(area); AjogbejeQuarters.areaname = "Ajogbeje-Quarters";
var AraromiIET = Object.create(area); AraromiIET.areaname = "Araromi";
var Moshudi = Object.create(area); Moshudi.areaname = "Moshudi";
var HavanaQuarters = Object.create(area); HavanaQuarters.areaname = "Havana Quarters";
var OdoOro = Object.create(area); OdoOro.areaname = "Odo Oro";//IkereEkiti
var ChinaTown = Object.create(area); ChinaTown.areaname = "China Town";//EnuguT
var ArmyBarracksETT = Object.create(area); ArmyBarracksETT.areaname = "Army Barracks";
var AmaojiAguNike = Object.create(area); AmaojiAguNike.areaname = "Amaoji Agu Nike";
var NewHaven = Object.create(area); NewHaven.areaname = "New Haven";
var GabonVillage = Object.create(area); GabonVillage.areaname = "Gabon Village";
var AkpogaNike = Object.create(area); AkpogaNike.areaname = "Akpoga Nike";
var RepublicLayout = Object.create(area); RepublicLayout.areaname = "Republic Layout";
var UNN = Object.create(area); UNN.areaname = "UNN";
var Uwam = Object.create(area); Uwam.areaname = "Uwam";
var OgbeteLayout = Object.create(area); OgbeteLayout.areaname = "Ogbete Layout";
var IdawRiverLayout = Object.create(area); IdawRiverLayout.areaname = "Idaw River Layout";
var AzikweStadium = Object.create(area); 	AzikweStadium.areaname = "Azikwe Stadium";
var CollerySnrStaffQtrs = Object.create(area); CollerySnrStaffQtrs.areaname = "Collery Snr Staff Qtrs";
var IndependenceLayout = Object.create(area); IndependenceLayout.areaname = "Independence Layout";
var UgboOdogwu = Object.create(area); UgboOdogwu.areaname = "Ugbo Odogwu";//EnuguT
var CentralBusinessDistrict = Object.create(area); CentralBusinessDistrict.areaname = "Central Business District";//Abuja
var ThreeArmsZone = Object.create(area); ThreeArmsZone.areaname = "Three Arms Zone";
var Asokoro = Object.create(area); Asokoro.areaname = "Asokoro";
var GarkiArea1 = Object.create(area); GarkiArea1.areaname = "Garki Area 1";
var GarkiArea2  = Object.create(area); GarkiArea2.areaname = "Garki Area 2";
var GarkiArea3 = Object.create(area); GarkiArea3.areaname = "Garki Area 3";
var GarkiArea7 = Object.create(area); GarkiArea7.areaname = "Garki Area 7";
var GarkiArea8 = Object.create(area); GarkiArea8.areaname = "Garki Area 8";
var GarkiArea10 = Object.create(area); GarkiArea10.areaname = "Garki Area 10";
var GarkiArea11 = Object.create(area); GarkiArea11.areaname = "Garki Area 11";
var Maitama = Object.create(area); Maitama.areaname = "Maitama";
var WuseZone1 = Object.create(area); WuseZone1.areaname = "Wuse Zone 1";
var WuseZone2 = Object.create(area); WuseZone2.areaname = "Wuse Zone 2";
var WuseZone3 = Object.create(area); WuseZone3.areaname = "Wuse Zone 3";
var WuseZone4 = Object.create(area); WuseZone4.areaname = "Wuse Zone 4";
var WuseZone5 = Object.create(area); WuseZone5.areaname = "Wuse Zone 5";
var WuseZone6 = Object.create(area); WuseZone6.areaname = "Wuse Zone 6";
var WuseZone7 = Object.create(area); WuseZone7.areaname = "Wuse Zone 7";
var Wuse2 = Object.create(area); Wuse2.areaname = "Wuse II";//Abuja
var TudunHatsi = Object.create(area); TudunHatsi.areaname = "Tudun Hatsi";//Gombe
var Shamaki = Object.create(area); Shamaki.areaname = "Shamaki";
var EmirPalace = Object.create(area); EmirPalace.areaname = "Emir's Palace";
var TudunWada = Object.create(area); TudunWada.areaname = "Tudun Wada";
var HeroGana = Object.create(area); HeroGana.areaname = "Hero Gana";
var Bolori = Object.create(area); Bolori.areaname = "Bolori";
var KumbiyaKumbiya = Object.create(area); KumbiyaKumbiya.areaname = "Kumbiya Kumbiya";
var EmenekeBusStop = Object.create(area); EmenekeBusStop.areaname = "Emeneke Bus Stop";
var PoliceCID = Object.create(area); PoliceCID.areaname  = "Police C.I.D";
var Nassarawo  = Object.create(area); Nassarawo.areaname = "Nassarawo";
var GovernmentHouseGT = Object.create(area); GovernmentHouseGT.areaname = "Government House";
var JekaDaFari  =Object.create(area); JekaDaFari.areaname  = "Jeka Da Fari";
var GRAGT = Object.create(area); GRAGT.areaname  = "G.R.A";
var Pantami = Object.create(area); Pantami.areaname  = "Pantami";//Gombe  
var Amawon = Object.create(area); Amawon.areaname = "Amawon";//Owerri
var AladinmaEstate  = Object.create(area); AladinmaEstate.areaname = "Aladinma Estate";
var AladinmaNorthernExtention = Object.create(area); AladinmaNorthernExtention.areaname = "Aladinma Northern Extention";
var UziLayout  = Object.create(area); UziLayout.areaname  = "Uzi Layout";
var Umueche = Object.create(area); Umueche.areaname = "Umueche";
var IkenegbuLayout = Object.create(area); IkenegbuLayout.areaname = "Ikenegbu Layout";
var Umuodu = Object.create(area); Umuodu.areaname = "Umuodu";
var UmuoyimaEmmanuelCollegeLayout = Object.create(area); UmuoyimaEmmanuelCollegeLayout.areaname = "Umuoyima Emmanuel College Layout";
var Nekede = Object.create(area); Nekede.areaname = "Nekede";
var NewOwerri = Object.create(area); NewOwerri.areaname = "New Owerri"; 
var ArugoLayout = Object.create(area); ArugoLayout.areaname = "Arugo Layout";
var StateHighCourt = Object.create(area); StateHighCourt.areaname = "State High Court";
var ImoStateUniversity = Object.create(area); ImoStateUniversity.areaname = "Imo State University";
var UgwuOrji  = Object.create(area); UgwuOrji.areaname = "Ugwu Orji";
var WorksLayout  =Object.create(area); WorksLayout.areaname = "Works Layout";//Owerri
var LocalGovernmentHeadquarters = Object.create(area); LocalGovernmentHeadquarters.areaname = "Local Government Headquarters";//Orlu
var Umuna = Object.create(area); Umuna.areaname = "Umuna";
var GeneralHospitalOrluT  = Object.create(area); GeneralHospitalOrluT.areaname = "General Hospital";
var Umusasa = Object.create(area); Umusasa.areaname = "Umusasa";
var LowCost = Object.create(area); LowCost.areaname = "Low Cost";
var Amaifeke = Object.create(area); Amaifeke.areaname = "Amaifeke";
var Umuokwara = Object.create(area); Umuokwara.areaname = "Umuokwara";
var AmaojiOrluT = Object.create(area); AmaojiOrluT.areaname = "AmaojiOrluT";//orlu
var Agiriga = Object.create(area); Agiriga.areaname = "Agiriga";//Okigwe
var Ubahu = Object.create(area); Ubahu.areaname = "Ubahu";
var IndustrialArea = Object.create(area); IndustrialArea.areaname = "Industrial Area";
var RevMann = Object.create(area); RevMann.areaname = "Rev. Mann";
var GermanHill = Object.create(area); GermanHill.areaname = "German Hill";
var Ndiakwaeke = Object.create(area); Ndiakwaeke.areaname = "Ndiakwaeke";
var MechanicVillage = Object.create(area); MechanicVillage.areaname = "Mechanic Village";//Okigwe
var GovernmentHouseDT = Object.create(area); GovernmentHouseDT.areaname = "Government House";//Dutse
var Fagoji = Object.create(area); Fagoji.areaname = "Fagoji";
var Galdimawa = Object.create(area); Galdimawa.areaname = "Galdimawa";
var TakurQuarters = Object.create(area); TakurQuarters.areaname = "Takur Quarters";
var KalgoVillage = Object.create(area); KalgoVillage.areaname = "Kalgo Village";
var CentralMarket = Object.create(area); CentralMarket.areaname = "Central Market";
var SabuwarMarinjuwa = Object.create(area); SabuwarMarinjuwa.areaname = "Sabuwar Marinjuwa";
var SabonGarinZai = Object.create(area); SabonGarinZai.areaname = "Sabon Garin Zai";
var GRADT = Object.create(area); GRADT.areaname = "G.R.A";
var InternetArea = Object.create(area); InternetArea.areaname = "Internet Area";//Dutse
var Majema = Object.create(area); Majema.areaname = "Majema";//Hadejia
var KofarArewa = Object.create(area); KofarArewa.areaname = "Kofar Arewa";
var Gazulmari = Object.create(area); Gazulmari.areaname = "Gazulmari";
var KofarGabas = Object.create(area); KofarGabas.areaname = "Kofar Gabas";
var PoliceBarracks = Object.create(area); PoliceBarracks.areaname = "Police Barracks";
var GeneralHospitalHT = Object.create(area); GeneralHospitalHT.areaname = "General Hospital";
var Makwalla = Object.create(area); Makwalla.areaname = "Makwalla";
var Garko = Object.create(area); Garko.areaname = "Garko";
var Dabantu = Object.create(area); Dabantu.areaname = "Dabantu";
var HadejiaJama = Object.create(area); HadejiaJama.areaname = "Hadejia Jama'are";
var NewGRA = Object.create(area); NewGRA.areaname = "New G.R.A";
var PoliceHeadquarters = Object.create(area); PoliceHeadquarters.areaname = "Police Headquarters";//Hadejia
var JunctionRd = Object.create(area); JunctionRd.areaname = "Junction Rd."; //KadunaT
var AhmaduBelloWay = Object.create(area); AhmaduBelloWay.areaname = "Ahmadu Bello Way";
var Kawo = Object.create(area); Kawo.areaname = "Kawo";
var DalletBarracks = Object.create(area); DalletBarracks.areaname = "Dallet Barracks";
var GRAKT = Object.create(area); GRAKT.areaname = "G.R.A";
var AhmaduBelloStadium = Object.create(area); AhmaduBelloStadium.areaname = "Ahmadu Bello Stadium";
var BarnawaVillage = Object.create(area); BarnawaVillage.areaname = "Barnawa Village";
var BarnawaGRA = Object.create(area); BarnawaGRA.areaname = "Barnawa G.R.A";
var Narayi = Object.create(area); Narayi.areaname = "Narayi";
var Television = Object.create(area); Television.areaname = "Television";
var SabonTasha = Object.create(area); SabonTasha.areaname = "Sabon Tasha";  
var Chiyoda = Object.create(area); Chiyoda.areaname = "Chiyoda";
var Kakuri = Object.create(area); Kakuri.areaname = "Kakuri";
var GoniGora = Object.create(area); GoniGora.areaname = "Goni Gora";
var TudunNupawa = Object.create(area); TudunNupawa.areaname = "Tudun Nupawa";
var TudunWadaKT = Object.create(area); TudunWadaKT.areaname = "Tudun Wada";
var KabalaWest = Object.create(area); KabalaWest.areaname = "KabalaWest";
var UnguwarMa = Object.create(area); UnguwarMa.areaname = "Unguwar Ma'azu";
var RigasaVillage = Object.create(area); RigasaVillage.areaname = "Rigasa Village";
var RigasaNorth = Object.create(area); RigasaNorth.areaname = "Rigasa North";
var Badiko = Object.create(area); Badiko.areaname = "Badiko";
var KurmiMashi = Object.create(area); KurmiMashi.areaname = "Kurmi Mashi";
var UnguwanKanawa = Object.create(area); UnguwanKanawa.areaname = "Unguwan Kanawa";
var NDA = Object.create(area); NDA.areaname = "N.D.A";
var NigerianAirforceBase = Object.create(area); NigerianAirforceBase.areaname = "Nigerian Airforce Base";
var Mando = Object.create(area); Mando.areaname = "Mando";//KadunaT
var Hanwa = Object.create(area); Hanwa.areaname = "Hanwa";//Zaria
var Chikali = Object.create(area); Chikali.areaname = "Chikali";
var RailwayQuarters  = Object.create(area); RailwayQuarters.areaname = "Railway Quarters";
var SabonGariZT = Object.create(area); SabonGariZT.areaname = "Sabon Gari";
var UnguwarKanawa = Object.create(area);UnguwarKanawa.areaname = "Unguwar Kanawa";
var Marmara = Object.create(area); Marmara.areaname = "Marmara";
var Tsugugi = Object.create(area);Tsugugi.areaname = "Tsugugi";
var Gyallesu = Object.create(area); Gyallesu.areaname = "Gyallesu";
var TudunWadaZT = Object.create(area); TudunWadaZT.areaname = "Tudun Wada";
var Palace = Object.create(area); Palace.areaname = "Palace";
var GaskiyaCorporation = Object.create(area); GaskiyaCorporation.areaname = "Gaskiya Corporation";
var KofarJatau = Object.create(area); KofarJatau.areaname = "Kofar Jatau";
var KofarGaya = Object.create(area); KofarGaya.areaname = "Kofar Gaya";
var Kwangila = Object.create(area); Kwangila.areaname = "Kwangila";
var HayinDogo = Object.create(area); HayinDogo.areaname = "Hayin Dogo";//zaria 
var Fagge = Object.create(area); Fagge.areaname = "Fagge";//Kano
var EmirPalaceKanoT = Object.create(area); EmirPalaceKanoT.areaname = "Emir's Palace";
var KofarMata = Object.create(area); KofarMata.areaname = "Kofar Mata";
var RumfaCollege = Object.create(area); RumfaCollege.areaname = "Rumfa College";
var Naibawa = Object.create(area); Naibawa.areaname = "Naibawa";
var KwanarDiso = Object.create(area); KwanarDiso.areaname = "KWANAR DISO / KOFAR NA'ISA";
var KofarNaisa = Object.create(area); KofarNaisa.areaname = "Kofar Na'isa";
var GyadiGyadi = Object.create(area); GyadiGyadi.areaname = "Gyadi Gyadi";
var Sharada = Object.create(area); Sharada.areaname = "Sharada";
var Kabuga = Object.create(area); Kabuga.areaname = "Kabuga";
var Shahuchi = Object.create(area); Shahuchi.areaname = "Shahuchi";
var Dala = Object.create(area); Dala.areaname = "Dala";
var KofarNassarawa = Object.create(area); KofarNassarawa.areaname = "Kofar Nassarawa";
var Badawa = Object.create(area); Badawa.areaname = "Badawa";
var GovernmentHouseKT = Object.create(area); GovernmentHouseKT.areaname = "Government House";
var Hotoro = Object.create(area); Hotoro.areaname = "Hotoro";
var SabonGariKT = Object.create(area); SabonGariKT.areaname = "Sabon Gari";
var NassarawaKT = Object.create(area); NassarawaKT.areaname = "Nassarawa";
var Dakata = Object.create(area); Dakata.areaname = "Dakata";//Kano
var SabonGariWT = Object.create(area); SabonGariWT.areaname = "Sabon Gari";//Wudil
var PoliceBarracksWT = Object.create(area); PoliceBarracksWT.areaname = "Police Barracks";
var WudilComprehensiveHealth = Object.create(area); WudilComprehensiveHealth.areaname = "Wudil Comprehensive Health";
var ShagariQuarters = Object.create(area); ShagariQuarters.areaname = "Shagari Quarters";
var JigawaWT = Object.create(area); JigawaWT.areaname = "Jigawa";
var Katurje = Object.create(area); Katurje.areaname = "Katurje";
var LocalGovernmentSecretariat = Object.create(area); LocalGovernmentSecretariat.areaname = "Local Government Secretariat";
var KofarFada = Object.create(area); KofarFada.areaname = "Kofar Fada";
var Garindo = Object.create(area); Garindo.areaname = "Garindo";
var UnguwarFulani = Object.create(area); UnguwarFulani.areaname = "Unguwar Fulani";
var KanoStateUniversity = Object.create(area); KanoStateUniversity.areaname = "Kano State University";//Wudil
var FuskarGabas = Object.create(area); FuskarGabas.areaname = "Fuskar Gabas";//KatsinaT
var GRAKatsinaT = Object.create(area); GRAKatsinaT.areaname = "G.R.A";
var KofarSamriLayout = Object.create(area); KofarSamriLayout.areaname = "Kofar Samri Layout";
var KofarMarusa = Object.create(area); KofarMarusa.areaname = "Kofar Marusa";
var FuskarKusu = Object.create(area); FuskarKusu.areaname = "Fuskar Kusu";
var Batagarawa = Object.create(area); Batagarawa.areaname = "Batagarawa";
var FuskarYamma = Object.create(area); FuskarYamma.areaname = "Fuskar Yamma";
var PoliceBarracksKT = Object.create(area); PoliceBarracksKT.areaname = "PoliceBarracksKT";
var GarinTandu = Object.create(area); GarinTandu.areaname = "Garin Tandu";
var KatsinaRaceCourse = Object.create(area); KatsinaRaceCourse.areaname = "Katsina Race Course";//KatsinaT
var GRAFT = Object.create(area); GRAFT.areaname = "G.R.A";//Funtua
var BCJ = Object.create(area); BCJ.areaname = "BCJ";
var TudunWadaFT = Object.create(area); TudunWadaFT.areaname="Tudun Wada";
var LowCostFT = Object.create(area); LowCostFT.areaname = "Low Cost";
var SabonLayi = Object.create(area); SabonLayi.areaname = "Sabon Layi";
var NasarawaFT = Object.create(area);NasarawaFT.areaname = "Nassarawa";
var UnguwarDahiru = Object.create(area); UnguwarDahiru.areaname = "Unguwar Dahiru";
var UnguwarTukur = Object.create(area); UnguwarTukur.areaname = "Unguwar Tukur";
var Karofi = Object.create(area); Karofi.areaname = "Karofi";
var SabonbFegi = Object.create(area); SabonbFegi.areaname = "Sabonb Fegi";
var DanDutse = Object.create(area); DanDutse.areaname = "Dan Dutse";
var TudunIya = Object.create(area); TudunIya.areaname = "TudunIya";
var FilinKallo = Object.create(area); FilinKallo.areaname = "Filin Kallo";
var UnguwarMagina = Object.create(area); UnguwarMagina.areaname = "Unguwar Magina";
var UnguwarGangarenRafinKasa = Object.create(area); UnguwarGangarenRafinKasa.areaname = "Unguwar Gangaren Rafin Kasa";
var UnguwaruwarMatoya = Object.create(area); UnguwaruwarMatoya.areaname = "Unguwaruwar Matoya";
var UnguwaruwarMusa = Object.create(area); UnguwaruwarMusa.areaname = "Unguwaruwar Musa";
var Makera = Object.create(area); Makera.areaname = "Makera";
var Jabiri = Object.create(area); Jabiri.areaname = "Jabiri";
var DutsenReme = Object.create(area); DutsenReme.areaname = "Dutsen Reme";//Funtua 
var EmirPalaceDT = Object.create(area); EmirPalaceDT.areaname = "Emir's Palace";//Darua
var KusuguHall = Object.create(area); KusuguHall.areaname = "Kusugu Hall";
var ShagariQuartersDT = Object.create(area); ShagariQuartersDT.areaname = "Shagari Quarters";
var UnguwarTarnawa = Object.create(area); UnguwarTarnawa.areaname = "Unguwar Tarnawa";
var TudunWadaDT = Object.create(area); TudunWadaDT.areaname = "Tudun Wada";
var Kanti = Object.create(area); Kanti.areaname = "Kanti";
var SabanGari = Object.create(area); SabanGari.areaname = "Saban Gari";
var UnguwarDa = Object.create(area); UnguwarDa.areaname = "Unguwar Da'u";
var KofarBaru = Object.create(area); KofarBaru.areaname = "Kofar Baru";
var KofarArewa = Object.create(area); KofarArewa.areaname = "Kofar Arewa";
var Rahamaima = Object.create(area); Rahamaima.areaname = "Rahamaima";
var LGASecretariat = Object.create(area); LGASecretariat.areaname = "L.G.A Secretariat";//Daura 
var NewPrisonQuarters = Object.create(area); NewPrisonQuarters.areaname = "New Prison Quarters";//BirninKebbi
var Nasarawa1 = Object.create(area); Nasarawa1.areaname = "Nasarawa I";
var Nasarawa2 = Object.create(area); Nasarawa2.areaname = "Nasarawa II";
var RafinAtiku = Object.create(area); RafinAtiku.areaname = "RafinAtiku";
var MakeraGandu = Object.create(area); MakeraGandu.areaname = "Makera Gandu";
var PrisonService = Object.create(area); PrisonService.areaname = "Prison Service";
var EmirPalaceBKT = Object.create(area); EmirPalaceBKT.areaname = "Emir's Palace";
var GesseLowCost = Object.create(area); GesseLowCost.areaname = "Gesse Low Cost"; 
var DGQuarters = Object.create(area); DGQuarters.areaname = "DG's Quarters";
var ByPassRd = Object.create(area); ByPassRd.areaname="By Pass Rd.";//BirninKebbi
var KokaniSouth = Object.create(area); KokaniSouth.areaname = "Kokani South";//Argungu
var Gwange = Object.create(area); Gwange.areaname = "Gwange";
var KokaniNorth = Object.create(area); KokaniNorth.areaname = "Kokani North";
var MagajinRafi = Object.create(area); MagajinRafi.areaname = "Magajin Rafi";
var GarkarJatau = Object.create(area); GarkarJatau.areaname = "Garkar Jatau";
var Galadima = Object.create(area); Galadima.areaname = "Galadima";//Argungu
var ZuruFada = Object.create(area); ZuruFada.areaname = "Zuru Fada";//Zuru
var ZuruCentral = Object.create(area); ZuruCentral.areaname = "Zuru Central";
var ZuruJarkasaEast = Object.create(area); ZuruJarkasaEast.areaname = "Zuru Jarkasa East"; 
var ZuruJarkasaWest = Object.create(area); ZuruJarkasaWest.areaname = "Zuru Jarkasa West";
var TwinQuarters = Object.create(area); TwinQuarters.areaname = "Twin Quarters";
var GRAZT = Object.create(area); GRAZT.areaname = "G.R.A";
var ZuruTudunWada = Object.create(area); ZuruTudunWada.areaname = "Zuru Tudun Wada";
var UnguwarZuru = Object.create(area); UnguwarZuru.areaname = "Unguwar Zuru";
var ZuruZango = Object.create(area); ZuruZango.areaname = "Zuru Zango";
var Bomgogomo = Object.create(area); Bomgogomo.areaname = "Bomgogomo";
var ZuruEmirateCouncil = Object.create(area); ZuruEmirateCouncil.areaname = "Zuru Emirate Council"; //Zuru 
var EmirPalaceYT = Object.create(area); EmirPalaceYT.areaname = "Emir's Palace";//Yauri
var PoliceAreaCommand  = Object.create(area); PoliceAreaCommand.areaname="Police Area Command";
var MarketYT = Object.create(area); MarketYT.areaname = "Market";
var Hiluka = Object.create(area); Hiluka.areaname = "Hiluka";
var RimaQuarters = Object.create(area); RimaQuarters.areaname = "Rima Quarters";
var TasharGarkuwa = Object.create(area); TasharGarkuwa.areaname = "Tashar Garkuwa";
var NewMotorPark = Object.create(area); NewMotorPark.areaname = "New Motor Park";
var UnguwarWali = Object.create(area); UnguwarWali.areaname = "Unguwar Wali";//Yauri
var CollegeOfAgricKT = Object.create(area); CollegeOfAgricKT.areaname = "CollegeOfAgricKT";//Kabba
var GRAKabbaT = Object.create(area); GRAKabbaT.areaname = "G.R.A";
var GeneralHospitalKT = Object.create(area); GeneralHospitalKT.areaname = "Genral Hospital";
var LokojaByePass = Object.create(area); LokojaByePass.areaname = "Lokoja Bye Pass";
var SirJamesOloruntobaWay = Object.create(area); SirJamesOloruntobaWay.areaname = "Sir James Oloruntoba Way";
var KabbaTownHall = Object.create(area); KabbaTownHall.areaname = "Kabba Town Hall";
var LocalGovernmentSecretariatKT = Object.create(area); LocalGovernmentSecretariat.areaname = "Local Government Secretariat";//Kabba
var EmirPalaceIT = Object.create(area); EmirPalaceIT.areaname = "Emir's Palace";
var GRAIT = Object.create(area); GRAIT.areaname = "G.R.A";
var Kulende = Object.create(area); Kulende.areaname = "Kulende";
var NigerIT = Object.create(area); NigerIT.areaname = "Niger";
var GaaAkanbi = Object.create(area); GaaAkanbi.areaname = "Gaa Akanbi";
var MuritalaRd = Object.create(area); MuritalaRd.areaname = "Muritala Rd.";
var StadiumRdGbalasa = Object.create(area); StadiumRdGbalasa.areaname = "Stadium Rd. Gbalasa";
var OldYidi = Object.create(area); OldYidi.areaname = "Old Yidi";
var Taiwo = Object.create(area); Taiwo.areaname = "Taiwo";
var AbdulAzeez = Object.create(area); AbdulAzeez.areaname = "Abdul Azeez";
var AdewoleEstate = Object.create(area); AdewoleEstate.areaname = "Adewole Estate";
var Pakata = Object.create(area); Pakata.areaname = "Pakata";
var Edn = Object.create(area); Edn.areaname = "Edn";
var Okelele = Object.create(area); Okelele.areaname = "Okelele";
var Oloje = Object.create(area); Oloje.areaname = "Oloje";
var SabonLineAmilegbe = Object.create(area); SabonLineAmilegbe.areaname = "Sabon Line Amilegbe";//Ilorin
var Maryland = Object.create(area); Maryland.areaname = "Maryland";//LagosT
var Mende = Object.create(area); Mende.areaname = "Mende";
var Alausa = Object.create(area); Alausa.areaname = "Alausa";
var Oregun = Object.create(area); Oregun.areaname = "Oregun";
var OgbaAguda =Object.create(area); OgbaAguda.areaname = "Ogba Aguda";
var Ojodu = Object.create(area); Ojodu.areaname = "Ojodu";
var IsheriOke = Object.create(area); IsheriOke.areaname = "Isheri Oke";	
var IsheriOfin = Object.create(area); IsheriOfin.areaname = "Isheri Ofin";
var Olowoira = Object.create(area); Olowoira.areaname = "Olowoira";
var IfakoAgege = Object.create(area); IfakoAgege.areaname = "Ifako Agege";
var IjuWaterWorks = Object.create(area); IjuWaterWorks.areaname = "Iju Water Works";
var IjuIsaga = Object.create(area); IjuIsaga.areaname = "Iju Isaga";
var Oworosoki = Object.create(area); Oworosoki.areaname = "Oworosoki";
var OworosokiLAndK = Object.create(area); OworosokiLAndK.areaname = "Oworosoki L and K";
var AbuleOkuta = Object.create(area); AbuleOkuta.areaname = "Abule Okuta";
var ShomoluCentral = Object.create(area); ShomoluCentral.areaname = "Shomolu Central";
var Anthony = Object.create(area); Anthony.areaname = "Anthony";
var Obanikoro = Object.create(area); Obanikoro.areaname = "Obanikoro";
var ShomoluPedro = Object.create(area); ShomoluPedro.areaname = "Shomolu Pedro";
var Gbagada = Object.create(area); Gbagada.areaname = "Gbagada";
var AtunraseEstateGbagada = Object.create(area); AtunraseEstateGbagada.areaname = "Atunrase Estate Gbagada";
var Ojota = Object.create(area); Ojota.areaname = "Ojota";
var Ogudu = Object.create(area); Ogudu.areaname = "Ogudu";
var Ketu = Object.create(area); Ketu.areaname  = "Ketu";
var AlapereKetu = Object.create(area); AlapereKetu.areaname = "Alapere Ketu";
var KetuOrisigun = Object.create(area); KetuOrisigun.areaname =  "Ketu Orisigun";
var Ikosi = Object.create(area); Ikosi.areaname = "Ikosi";
var KetuMile12 = Object.create(area); KetuMile12.areaname = "Ketu Mile 12";
var Magodo = Object.create(area); Magodo.areaname = "Magodo";
var Sangisa = Object.create(area); Sangisa.areaname = "Sangisa";
var OremejiIfako = Object.create(area); OremejiIfako.areaname = "Oremeji Ifako";
var Onipanu = Object.create(area); Onipanu.areaname="Onipanu";
var Ilupeju = Object.create(area); Ilupeju.areaname = "Ilupeju";
var Fadeyi = Object.create(area); Fadeyi.areaname = "Fadeyi";
var Palmgrove = Object.create(area); Palmgrove.areaname = "Palmgrove";
var Jibowu = Object.create(area); Jibowu.areaname = "Jibowu";
var Mushin = Object.create(area); Mushin.areaname = "Mushin";
var Lawanson = Object.create(area); Lawanson.areaname = "Lawanson";
var IdiAraba = Object.create(area); IdiAraba.areaname = "Idi Araba";
var IdiOro = Object.create(area); IdiOro.areaname = "Idi Oro";
var Oshodi = Object.create(area); Oshodi.areaname = "Oshodi";
var Shogunle = Object.create(area); Shogunle.areaname = "Shogunle";
var Isolo = Object.create(area); Isolo.areaname =  "Isolo";
var AjaoEstate = Object.create(area); AjaoEstate.areaname = "Ajao Estate";
var Ilasamaja = Object.create(area); Ilasamaja.areaname = "Ilasamaja";
var IsagaTedo = Object.create(area); IsagaTedo.areaname = "Isaga Tedo";
var EjigboOrinleOwo = Object.create(area); EjigboOrinleOwo.areaname = "Ejigbo Orinle Owo";
var BungalowEstate = Object.create(area); BungalowEstate.areaname = "Bungalow Estate";
var OkeAfaJakande= Object.create(area); OkeAfaJakande.areaname = "Oke Afa Jakande";
var Ikotun = Object.create(area); Ikotun.areaname = "Ikotun";
var Egbe = Object.create(area); Egbe.areaname = "Egbe";
var Agodo = Object.create(area); Agodo.areaname = "Agodo";
var Ijegun = Object.create(area); Ijegun.areaname = "Ijegun";
var IsheriOsun = Object.create(area); IsheriOsun.areaname ="Isheri Osun";
var Igando = Object.create(area); Igando.areaname = "Igando";
var Balogun = Object.create(area); Balogun.areaname = "Balogun";
var Egan = Object.create(area); Egan.areaname = "Egan";
var Akesan =Object.create(area); Akesan.areaname = "Akesan";
var Badore = Object.create(area); Badore.areaname = "Badore";
var Abarenji = Object.create(area); Abarenji.areaname = "Abarenji";
var Ijedodo = Object.create(area); Ijedodo.areaname = "Ijedodo";
var Ijegemo = Object.create(area); Ijegemo.areaname = "Ijegemo";
var Idumu = Object.create(area); Idumu.areaname = "Idumu";
var Egbeda = Object.create(area); Egbeda.areaname = "Egbeda";
var Ikeja = Object.create(area); Ikeja.areaname = "Ikeja";
var GRALT = Object.create(area); GRALT.areaname = "G.R.A";
var MurtalaMuhammedAirport = Object.create(area); MurtalaMuhammedAirport.areaname = "Murtala Muhammed Airport";
var Dopemu = Object.create(area); Dopemu.areaname = "Dopemu";
var OyaEstate = Object.create(area); OyaEstate.areaname = "Oya Estate";
var Alimosho = Object.create(area); Alimosho.areaname = "Alimosho";
var AbuleEgba = Object.create(area); AbuleEgba.areaname = "Abule Egba";
var Ipaja = Object.create(area); Ipaja.areaname = "Ipaja";
var Allen = Object.create(area); Allen.areaname = "Allen";
var Opebi = Object.create(area); Opebi.areaname = "Opebi";
var IkejaObaAkran = Object.create(area); IkejaObaAkran.areaname = "Ikeja Oba Akran";
var Agege = Object.create(area); Agege.areaname = "Agege";
var OkoObaAgege = Object.create(area); OkoObaAgege.areaname = "Oko Oba Agege";
var Olota = Object.create(area); Olota.areaname = "Olota";
var Captain = Object.create(area); Captain.areaname = "Captain";
var Akintan = Object.create(area); Akintan.areaname = "Akintan";
var Jankara = Object.create(area); Jankara.areaname = "Jankara";
var Ojokoro = Object.create(area); Ojokoro.areaname = "Ojokoro";
var Alagbado = Object.create(area); Alagbado.areaname = "Alagbado";
var Ahmadiya = Object.create(area); Ahmadiya.areaname = "Ahmadiya";
var SuberuOje = Object.create(area); SuberuOje.areaname = "Suberu Oje";
var Meiran = Object.create(area); Meiran.areaname = "Meiran";
var Alakuko = Object.create(area); Alakuko.areaname = "Alakuko";
var Ijaye = Object.create(area); Ijaye.areaname = "Ijaye";
var Agbelekale = Object.create(area); Agbelekale.areaname = "Agbelekale";
var Aboru = Object.create(area); Aboru.areaname = "Aboru";
var OkeOdo = Object.create(area); OkeOdo.areaname = "OkeOdo";
var EbuteMetaWest = Object.create(area); EbuteMetaWest.areaname = "Ebute Meta West";
var BodeThomas = Object.create(area); BodeThomas.areaname = "Bode Thomas";
var AdeniranOgunsanya = Object.create(area); AdeniranOgunsanya.areaname = "Adeniran Ogunsanya";
var Tujusho = Object.create(area); Tujusho.areaname = "Tujusho";
var YabaEbuteMetaEast = Object.create(area); YabaEbuteMetaEast.areaname = "Yaba / Ebute Meta East";
var Onike = Object.create(area); Onike.areaname = "Onike";
var AbuleOja = Object.create(area); AbuleOja.areaname = "Abule Oja";
var AbuleIjesha = Object.create(area); AbuleIjesha.areaname = "Abule Ijesha";
var Iwaya = Object.create(area); Iwaya.areaname = "Iwaya";
var Makoko = Object.create(area); Makoko.areaname = "Makoko";
var Akoka = Object.create(area); Akoka.areaname = "Akoka";
var Balogun = Object.create(area); Balogun.areaname = "Balogun";
var BroadSt = Object.create(area); BroadSt.areaname = "Broad St.";
var Marina = Object.create(area); Marina.areaname = "Marina";
var DolphinEstate = Object.create(area); DolphinEstate.areaname = "Dolphin Estate";
var Lafiaji = Object.create(area); Lafiaji.areaname = "Lafiaji";
var Itafaji = Object.create(area); Itafaji.areaname = "Itafaji";
var Massy = Object.create(area); Massy.areaname = "Massy";
var IsaleEko = Object.create(area); IsaleEko.areaname = "IsaleEko";
var AdenijiAdele = Object.create(area); AdenijiAdele.areaname = "Adeniji Adele";
var OkeArin = Object.create(area); OkeArin.areaname = "Oke Arin";
var Offin = Object.create(area); Offin.areaname = "Offin";
var Idumota = Object.create(area); Idumota.areaname = "Idumota";
var Olowogbowo = Object.create(area); Olowogbowo.areaname = "Olowogbowo";
var EpeTedo = Object.create(area); EpeTedo.areaname = "Epe Tedo";
var Okepopo = Object.create(area); Okepopo.areaname = "Okepopo";
var Obalende = Object.create(area); Obalende.areaname = "Obalende";
var Keffi = Object.create(area); Keffi.areaname = "Keffi";
var Agarawu = Object.create(area); Agarawu.areaname = "Agarawu";
var Dosunmu = Object.create(area); Dosunmu.areaname = "Dosunmu";
var Idumagbo = Object.create(area); Idumagbo.areaname = "Idumagbo";
var Onikan = Object.create(area); Onikan.areaname = "Onikan";
var Gbosere = Object.create(area); Gbosere.areaname = "Gbosere";
var IkoyiLT = Object.create(area); IkoyiLT.areaname = "Ikoyi";
var VictoriaIsland = Object.create(area); VictoriaIsland.areaname = "Victoria Island";
var MakokoExtension = Object.create(area); MakokoExtension.areaname = "Makoka Extension";
var Ajah = Object.create(area); Ajah.areaname = "Ajah";
var ApapaCentral = Object.create(area); ApapaCentral.areaname = "Apapa Central";
var ApapaSouth = Object.create(area); ApapaSouth.areaname = "Apapa South";
var ApapaNorth = Object.create(area); ApapaNorth.areaname = "Apapa North";
var ApapaWest = Object.create(area); ApapaWest.areaname = "Apapa West";
var IjoraOloye = Object.create(area); IjoraOloye.areaname = "Ijora Oloye";
var OrileIgamu = Object.create(area); OrileIgamu.areaname = "Orile Igamu";
var Ikata = Object.create(area); Ikata.areaname = "Ikata";
var Itire = Object.create(area); Itire.areaname = "Itire";
var Ijeshatedo = Object.create(area); Ijeshatedo.areaname = "Ijesha Tedo";
var SurulereCentral = Object.create(area); SurulereCentral.areaname = "Surulere Central";
var AjegunleBoundry = Object.create(area); AjegunleBoundry.areaname = "Ajegunle Boundry";
var AmukokoAlabaOro = Object.create(area); AmukokoAlabaOro.areaname = "Amukoko Alaba Oro";
var AmukokoWest = Object.create(area); AmukokoWest.areaname = "Amukoko West";
var AmukokoEast = Object.create(area); AmukokoEast.areaname = "Amukoko East";
var AmukokoNorth = Object.create(area); AmukokoNorth.areaname = "Amukoko North";
var BakareFaro = Object.create(area); BakareFaro.areaname = "Bakare Faro";
var IjoraBadiaEast = Object.create(area); IjoraBadiaEast.areaname = "Ijora Badia East";
var IjoraBadiaCentral = Object.create(area); IjoraBadiaCentral.areaname = "Ijora Badia Central";
var IjoraBadiaWest = Object.create(area); IjoraBadiaWest.areaname = "Ijora Badia West";
var IjoraBadiaNorth = Object.create(area); IjoraBadiaNorth.areaname = "Ijora Badia North";
var CisariIganmuOrileSouth = Object.create(area); CisariIganmuOrileSouth.areaname = "Cisari Iganmu Orile South";
var CisariIganmuOrileNorth = Object.create(area); CisariIganmuOrileNorth.areaname = "Cisari Iganmu Orile North";
var OlodiApapa = Object.create(area); OlodiApapa.areaname = "Olodi Apapa";
var FestacCommunity1 = Object.create(area); FestacCommunity1.areaname = "Festac Community I";
var FestacCommunity2 = Object.create(area); FestacCommunity2.areaname = "Festac Community II";
var FestacCommunity3 = Object.create(area); FestacCommunity3.areaname = "Festac Community III";
var FestacCommunity4 = Object.create(area); FestacCommunity4.areaname = "Festac Community IV";
var OluteNavyTown = Object.create(area); OluteNavyTown.areaname = "Olute / Navy Town";
var SatelliteTown = Object.create(area); SatelliteTown.areaname = "Satellite Town";
var AlakijaOldOjo = Object.create(area); AlakijaOldOjo.areaname = "Alakija / Old Ojo";
var SiteC = Object.create(area); SiteC.areaname = "Site C";
var Ilaje = Object.create(area); Ilaje.areaname = "Ilaje";
var KirikiriPhase = Object.create(area); KirikiriPhase.areaname = "Kirikiri Phase";
var Kirikiri = Object.create(area); Kirikiri.areaname = "Kirikiri";
var KirikiriIndustrial = Object.create(area); KirikiriIndustrial.areaname = "Kirikiri Industrial";//LagosT
var AjaraAgamathemVetho = Object.create(area); AjaraAgamathemVetho.areaname = "AjaraAgamathemVetho / Ibereko";//Badagry
var AsagoSango = Object.create(area); AsagoSango.areaname = "Asago Sango";
var Bereks = Object.create(area); Bereks.areaname = "Bereks / Surulere";
var Ascon = Object.create(area); Ascon.areaname = "Ascon";
var SemeBadagry = Object.create(area); SemeBadagry.areaname = "Seme Badagry";//Badagry
var ObaAyangunrisPalace = Object.create(area); ObaAyangunrisPalace.areaname = "Oba Ayangunri's Palace";
var Isale1 = Object.create(area); Isale1.areaname = "Isale I";
var LowaEstate = Object.create(area); LowaEstate.areaname = "Lowa Estate";
var Ogolonta = Object.create(area); Ogolonta.areaname = "Ogolonta";
var Owutu = Object.create(area); Owutu.areaname = "Owutu";
var AbuleAbon = Object.create(area); AbuleAbon.areaname = "Abule Abon";
var OriOkuta  = Object.create(area); OriOkuta.areaname = "Ori Okuta";
var Isawo = Object.create(area); Isawo.areaname = "Isawo";
var Dagbolu = Object.create(area); Dagbolu.areaname = "Dagbolu";
var Eyita = Object.create(area); Eyita.areaname = "Eyita";
var LamboLasunwomVillage = Object.create(area); LamboLasunwomVillage.areaname = "Lambo Lasunwom Village";
var FederalLowcostHousingEstate = Object.create(area); FederalLowcostHousingEstate.areaname = "Federal Lowcost Housing Estate";






//mapping eah town to their respective states
Abia.listofTowns = [Umuahia,Aba];
Adamawa.listofTowns = [Jimeta,Yola,Mubi];
AkwaIbom.listofTowns = [Uyo];
Anambra.listofTowns = [Awka,Onitsha];
Bauchi.listofTowns = [BauchiT];
Bayelsa.listofTowns = [Yenagoa];
Benue.listofTowns = [Makurdi, Otukpo];
Borno.listofTowns = [Maiduguri, Bama, Biu];
CrossRiver.listofTowns = [Calabar,Ikom];
Delta.listofTowns = [Asaba,Agbor,Warri,Sapele];
Ebonyi.listofTowns = [Abakaliki];	
Edo.listofTowns = [BeninCity,Ubiaja];
Ekiti.listofTowns = [AdoEkiti,IkoleEkiti,IkereEkiti];
Enugu.listofTowns = [EnuguT];
FCT.listofTowns = [Abuja];
Gombe.listofTowns=[GombeT];
Imo.listofTowns = [Owerri,Orlu,Okigwe];
Jigawa.listofTowns = [Dutse,Hadejia];
Kaduna.listofTowns = [KadunaT,Zaria];
Kano.listofTowns = [KanoT,Wudil];
Katsina.listofTowns = [KatsinaT,Funtua,Daura];
Kebbi.listofTowns = [BirninKebbi,Argungu,Zuru,Yauri];
Kogi.listofTowns = [Kabba];
Kwara.listofTowns = [Ilorin];
Lagos.listofTowns = [LagosT,Badagry,Ikorodu];
Nasarawa.listofTowns = [Lafia];
Niger.listofTowns = [Minna,Bida];
Ogun.listofTowns = [Abeokuta,SangoOta,IjebuOde];
Ondo.listofTowns= [Akure,IkareAkoko];
Osun.listofTowns = [Oshogbo,IfeCentral,Modakeke,Ipetumodu,IjebuIjesa,Ilesa];
Oyo.listofTowns = [Ibadan,Ogbomoso,OyoT];
Plateau.listofTowns = [Jos,BarkinLadi];
Rivers.listofTowns = [PortHarcourt,Ahoada];
Sokoto.listofTowns = [SokotoT,Tambawal];
Taraba.listofTowns = [Jalingo];
Yobe.listofTowns = [Nguru, Damaturu];
Zamfara.listofTowns = [Gusau,KauranNamoda];


//mapping each area to their respective towns
Umuahia.listofArea = [Afara,Amuzukwu,Ugwunchara,UmuahiaUrban3,UmuahiaUrban1,Ossah,WorldBank];
Aba.listofArea = [AbaCentral,EziamaLayout,Ovom,IheorjiLayout,Abaukwu,OhabiamLayout,Asaokpuja,OsusuLayout,Umungasi];
Jimeta.listofArea = [Majalisa,Gwadabawa,OldGRA,Karewa,Damilo,Luggere,Demsawo,Jambutu,Dubeli];
Yola.listofArea = [LamidoPalace,FederalHousing];
Mubi.listofArea = [ShuwareWard,Airfield,Lukuwa,SchoolOfArts,WuroPatuji,NasarawaA,WuroJibirward,Industrial,Ijari,YelwaWard,KochifaWard,WuroGudeWard];
Uyo.listofArea = [FahaOkuAkpon,MilitaryOfficeIbaOku,CatholicSecretary,AkpanSt,HousingEstateEwet,EwetVillage,ItiamIkotAbia,UyoMarket,Iboko,SchoolOfArtAndScience];
Awka.listofArea = [HighCourt,IndustrialLayout,CemestryArea,ObunaguVill,AsuTechArea,IzuochaLayout];
Onitsha.listofArea = [AwkaRd,OnyeaboSt,Obompa,UperIweka,OmagbaLytPhase,AwkaRd,NewMarketRd,Odoakpu,OgutaRd,IwekaRd,ZikA,NigerBridgeHeadRd,Ose1,Ose2,GRA1,GRA2,GRA3,Ogidi,UmusiomeIbo,AkuzorRd,Ububa,Amafor,NkporNewMkt,AguluA,AkuzorVillage,OdumeLayout1,OdumeLayout2,UruowuluVillage,Umuota,EjikemeQtrs,Aforadike];
BauchiT.listofArea = [KofarJahun,Bacas,TafawaBalewaHousingEstate,KofarWasa,KofarWambai,GumiHill,RailwayStation,TambarariVillage,AbubakarUmarStateSecretariat,Lushi,GRABT,AbubakarTafawaBalewaUniversity,ArmyBarracks];
Yenagoa.listofArea = [Ekeki,Okaka,Kpansia,EdeEpe,Imgbi,Swali,JuliusBerger,AmarataEpie,NipostMakt,Bebelebiri];
Makurdi.listofArea = [GRAMT,ArmyBarracksMT,FederalHousingArea,HighLevelAssVill,Wurukum,UnijosCampus,HudcoQuarters,Wadata,Kokoroo,GeneralHospital,SabonGari,EupiNewLayout,Eupi,FederalLow];
Otukpo.listofArea = [OchidoPalace,AhmaduBello,NewMarket,OOL,LocalGovernmentClinic,EllaMarket,NoCross,UPURd,GRAOT,PostOffice,RailwayStationOT,MinistryOfWorks,GeneralHospitalOT,RiceMill,SabonGariOT,Ogwonogba];
Maiduguri.listofArea = [PostOfficeMT,ShehuPalace,Lamisula,MaiduguriFlourMills,StateLowCost,Bulabulin,Gamboru,CollegeOfAgric,LondonCiki,GovernmentHouse,NewGRA,Gwange,NursingHome,GRAPoliceStation,NIPOSTHeadQuarters,MolaiGRA,PoliceCollege,NNPCDepot,ElkanemiIslamicTheology,Stadium,PompamariIndustrial,CocacolaFactory,Bolori,PompamariHousingEstate];
Bama.listofArea = [	Kasugula,Tandari,BulabulinBT,Kangeleri,Makintari,Kidari,Yerimari,Kaigamari,Ajari,Zannari];
Biu.listofArea = [Dugja,MbulaMel,Zarawuyaku,Waka,MandaraAbdu,Garwashina,Galdimary,Birmajugwal,Tabra];
Calabar.listofArea = [Ediba,IkotAnsa,IkotOmin,Airport,StateHousingEstate,Bogobiri,EtaAgbor,Goldie,DanArchibon,EkpoAbasi,Uwanse,StadiumCT,Egerton,EgertonArea2,EssienTown,Ikorinim];
Ikom.listofArea = [BojorAchibong,ScoutLane,ObuduRd,CalabarRd,OgjaRd,OkimOsaborRd,CommSecSch,PostOfficeForestry,Bisiri,LocalGovtCouncil,Ukwel,UdamaUbug,MainMarket,MissionRoad,Abakpa,Ukelle,Ukamusha,Okuku,Biko];
Asaba.listofArea = [Umueze,Ezenei,CablePoint,OverheadBridgeLayout,Umuonaje,Isieke,Umuagu,CentralCoreArea,OkpanamAsabaRd];
Agbor.listofArea = [BojiBojiAgbor,BDPAArea,OwaAleroRd,BoliBojiOwa,GRAAT,AlibubaQuarters];
Warri.listofArea = [OkuamagbaLayout,Ugborikoko,WarriAirport,UpperErejuwa,AldersTown,NBTC,GolfCourseRd,BorrowPit,EkpanTori];
Sapele.listofArea = [AyomanorRd,ChickesterRd,AtufeRd,AgimeleVillage,OkpeRd,Ojolu,ReclamationRd,CatholicMissionRd];
Abakaliki.listofArea = [NteziAba,Mbukobe,UdensiSt,OgbagaRd,EnuguOgojaExpr,PresscoJunction,OgojaRd,EnuguExpRd,AfikpoRd,NkalikiRd,EnuguExpress,EnuguOgojaExpr,Abakpa,Ndiaguo,GRAABT,NewLayout,KpiriKpiri];
BeninCity.listofArea = [Ikpoba,Uselu,EkosodinVillage,Iwogban,Ohovbeokao,Uhumwuimwu,Oregbeni,Ugbekun,Ogbelaka,GRABCT,Etete,EwemadeVillage,OgbaZoo,Ekenhaun,Evbotube,Use,Ihogben,Uwelu,Ugbowo];
Ubiaja.listofArea = [OldIlushi,EbhuruQuarters1,GRAUT,EbhuruQuarters2,Egbemije,OyomonQuarters,UkpajaQuarters];
AdoEkiti.listofArea = [StadiumAET,OloraPalaceArea,Ilokun,Idolofin,FederalPolytechnic,CocoaDevUnitArea,FaleganEstate,GRAAET,Araromi,FehintolaEstate,MineCampusEstate];
IkoleEkiti.listofArea = [ElekolePalace,Idemo,Isolo,Amuniklo,Omodowa,IbaleIkoyi,Usin,Isaba,Otunja,Asin,Igbonna,Ilotin,IkoyiIkoro,Eruwa,Iloka,Araromi,IkoleGeneralHospital,OkeIru,Imikan,Orin,OkeIgbala,StPeters];
IkereEkiti.listofArea = [KojolaQuarters,IjokaQuarters,Anaye,Ikoyi1,Ikoyi2,OdoOja,AmoyeGrammarSchool,Okeosun,Onward,OdoIse,AjogbejeQuarters,AraromiIET,Moshudi,HavanaQuarters,OdoOro,OdoOja];
EnuguT.listofArea = [ChinaTown,ArmyBarracksETT,AmaojiAguNike,NewHaven,GabonVillage,AkpogaNike,RepublicLayout,UNN,Uwam,OgbeteLayout,IdawRiverLayout,AzikweStadium,CollerySnrStaffQtrs,IndependenceLayout,UgboOdogwu];
Abuja.listofArea = [CentralBusinessDistrict,ThreeArmsZone,Asokoro,GarkiArea1,GarkiArea2,GarkiArea3,GarkiArea7,GarkiArea8,GarkiArea10,GarkiArea11,Maitama,WuseZone1,WuseZone2,WuseZone3,WuseZone4,WuseZone5,WuseZone6,WuseZone7,Wuse2];
GombeT.listofArea = [TudunHatsi,Shamaki,EmirPalace,TudunWada,HeroGana,Bolori,KumbiyaKumbiya,EmenekeBusStop,PoliceCID,Nassarawo,GovernmentHouseGT,JekaDaFari,GRAGT,Pantami];
Owerri.listofArea = [Amawon,AladinmaEstate,AladinmaNorthernExtention,UziLayout,Umueche,IkenegbuLayout,Umuodu,UmuoyimaEmmanuelCollegeLayout,Nekede,NewOwerri,ArugoLayout,StateHighCourt,ImoStateUniversity,UgwuOrji,WorksLayout];
Orlu.listofArea = [LocalGovernmentHeadquarters,Umuna,GeneralHospitalOrluT,Umusasa,LowCost,Amaifeke,Umuokwara,AmaojiOrluT];
Okigwe.listofArea = [Agiriga,Ubahu,IndustrialArea,RevMann,GermanHill,Ndiakwaeke,MechanicVillage];
Dutse.listofArea = [GovernmentHouseDT,Fagoji,Galdimawa,TakurQuarters,KalgoVillage,CentralMarket,SabuwarMarinjuwa,SabonGarinZai,GRABT,InternetArea];
Hadejia.listofArea = [Majema,KofarArewa,Gazulmari,KofarGabas,PoliceBarracks,GeneralHospitalHT,Makwalla,Garko,Dabantu,HadejiaJama,NewGRA,PoliceHeadquarters];
KadunaT.listofArea = [JunctionRd,AhmaduBelloWay,Kawo,DalletBarracks,GRAKT,AhmaduBelloStadium,BarnawaVillage,BarnawaGRA,Narayi,Television,SabonTasha,Chiyoda,Kakuri,GoniGora,TudunNupawa,TudunWadaKT,KabalaWest,UnguwarMa,RigasaVillage,RigasaNorth,Badiko,KurmiMashi,UnguwanKanawa,NDA,NigerianAirforceBase,Mando];
Zaria.listofArea = [Hanwa,Chikali,RailwayQuarters,SabonGariZT,UnguwarKanawa,Marmara,Tsugugi,Gyallesu,TudunWadaZT,Palace,GaskiyaCorporation,KofarJatau,KofarGaya,Kwangila,HayinDogo];
KanoT.listofArea = [Fagge,EmirPalaceKanoT,KofarMata,RumfaCollege,Naibawa,KwanarDiso,KofarNaisa,GyadiGyadi,Sharada,Kabuga,Shahuchi,Dala,KofarNassarawa,Badawa,GovernmentHouseKT,Hotoro,SabonGariKT,NassarawaKT,Dakata];
Wudil.listofArea = [SabonGariWT,PoliceBarracksWT,WudilComprehensiveHealth,ShagariQuarters,JigawaWT,Katurje,LocalGovernmentSecretariat,KofarFada,Garindo,UnguwarFulani,KanoStateUniversity];
KatsinaT.listofArea = [FuskarGabas,GRAKatsinaT,KofarSamriLayout,KofarMarusa,FuskarKusu,Batagarawa,FuskarYamma,PoliceBarracksKT,GarinTandu,KatsinaRaceCourse];
Funtua.listofArea = [GRAFT,BCJ,TudunWadaFT,LowCostFT,SabonLayi,NasarawaFT,UnguwarDahiru,UnguwarTukur,Karofi,SabonbFegi,DanDutse,TudunIya,FilinKallo,UnguwarMagina,UnguwarGangarenRafinKasa,UnguwaruwarMatoya,UnguwaruwarMusa,Makera,Jabiri,DutsenReme,];
Daura.listofArea = [EmirPalaceDT,KusuguHall,ShagariQuartersDT,UnguwarTarnawa,TudunWadaDT,Kanti,SabanGari,UnguwarDa,KofarBaru,KofarArewa,Rahamaima,LGASecretariat];
BirninKebbi.listofArea = [NewPrisonQuarters,Nasarawa1,Nasarawa2,RafinAtiku,MakeraGandu,PrisonService,EmirPalaceBKT,GesseLowCost,DGQuarters,ByPassRd];
Argungu.listofArea = [KokaniSouth,Gwange,KokaniNorth,MagajinRafi,GarkarJatau,Galadima];
Zuru.listofArea = [ZuruFada,ZuruCentral,ZuruJarkasaWest,ZuruJarkasaWest,TwinQuarters,GRAZT,ZuruTudunWada,UnguwarZuru,ZuruZango,Bomgogomo,ZuruEmirateCouncil];
Yauri.listofArea = [EmirPalaceYT,PoliceAreaCommand,MarketYT,Hiluka,RimaQuarters,TasharGarkuwa,NewMotorPark,UnguwarWali];
Kabba.listofArea = [CollegeOfAgricKT,GRAKabbaT,GeneralHospitalKT,LokojaByePass,SirJamesOloruntobaWay,KabbaTownHall,LocalGovernmentSecretariatKT];
Ilorin.listofArea= [EmirPalaceIT,GRAIT,Kulende,NigerIT,GaaAkanbi,MuritalaRd,StadiumRdGbalasa,OldYidi,Taiwo,AbdulAzeez,AdewoleEstate,Pakata,Edn,Okelele,Oloje,SabonLineAmilegbe];
LagosT.listofArea = [Maryland,Mende,Alausa,Oregun,OgbaAguda,Ojodu,IsheriOke,IsheriOfin,Olowoira,IfakoAgege,IjuWaterWorks,IjuIsaga,Oworosoki,OworosokiLAndK,AbuleOkuta,ShomoluCentral,Anthony,Obanikoro,ShomoluPedro,Gbagada,AtunraseEstateGbagada,Ojota,Ogudu,Ketu,AlapereKetu,KetuOrisigun,Ikosi,KetuMile12,Magodo,Sangisa,OremejiIfako,Onipanu,Ilupeju,Fadeyi,Palmgrove,Jibowu,Mushin,Lawanson,IdiAraba,IdiOro,Oshodi,Shogunle,Isolo,AjaoEstate,Ilasamaja,IsagaTedo,EjigboOrinleOwo,BungalowEstate,OkeAfaJakande,Ikotun,Egbe,Agodo,Ijegun,IsheriOsun,Igando,Balogun,Egan,Akesan,Badore,Abarenji,Ijedodo,Ijegemo,Idumu,Egbeda,Ikeja,GRALT,MurtalaMuhammedAirport,Dopemu,OyaEstate,Alimosho,AbuleEgba,Ipaja,Allen,Opebi,IkejaObaAkran,Agege,OkoObaAgege,Olota,Captain,Akintan,Jankara,Ojokoro,Alagbado,Ahmadiya,SuberuOje,Meiran,Alakuko,Ijaye,Agbelekale,Aboru,OkeOdo,EbuteMetaWest,BodeThomas,AdeniranOgunsanya,Tujusho,YabaEbuteMetaEast,Onike,AbuleOja,AbuleIjesha,Iwaya,Makoko,Akoka,Balogun,BroadSt,Marina,DolphinEstate,Lafiaji,Itafaji,Massy,IsaleEko,AdenijiAdele,OkeArin,Offin,Idumota,Olowogbowo,EpeTedo,Okepopo,Oshodi,Obalende,Keffi,Agarawu,Dosunmu,Idumagbo,Onikan,Gbosere,IkoyiLT,VictoriaIsland,MakokoExtension,Ajah,ApapaCentral,ApapaNorth,ApapaSouth,ApapaWest,IjoraOloye,OrileIgamu,Ikata,Itire,Ijeshatedo,SurulereCentral,AjegunleBoundry,AmukokoAlabaOro,AmukokoWest,AmukokoEast,AmukokoNorth,BakareFaro,IjoraBadiaEast,IjoraBadiaCentral,IjoraBadiaWest,IjoraBadiaNorth,CisariIganmuOrileSouth,CisariIganmuOrileNorth,OlodiApapa,FestacCommunity1,FestacCommunity2,FestacCommunity3,FestacCommunity4,OluteNavyTown,SatelliteTown,AlakijaOldOjo,SiteC,Ilaje,KirikiriPhase,Kirikiri,KirikiriIndustrial];
Badagry.listofArea = [AjaraAgamathemVetho,AsagoSango,Bereks,Ascon,SemeBadagry];
Ikorodu.listofArea = [ObaAyangunrisPalace,Isale1,LowaEstate,Ogolonta,Owutu,AbuleAbon,OriOkuta,Isawo,Dagbolu,Eyita,LamboLasunwomVillage,FederalLowcostHousingEstate];


/*for (var i = 0; i <= 4; i++) {
	for (var j= 0;j < listOfStates[i].listofTowns.length ; j++) {
		listofStates[i].listofTowns[j].prototype = towns;
	}
}
*/