// recuperer les infos de accuses

function loadAccuseInfos(event){
	event.preventDefault();
	var formData = new FormData();
	formData.append("id_accuse", $("#liste_accuses_info").val());
	formData.append("numero_dossier", $("#numero_dossier").val());
   
  $.ajax({
		type: "POST",
		url: "consulterDossier/readAccuse",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
			
			$('#field_accuse_info').css('display', 'block');
			
			$("#cni_accuse_info").val(data["accuse"]["cin"]);
			$("#nom_accuse_info").val(data["accuse"]["nom"]);
			$("#prenom_accuse_info").val(data["accuse"]["prenom"]);
			$("#etat_social_accuse_info").val(data["accuse"]["situationFamilialle"]);
			$("#assurance_accuse_info").val(data["accuseAssurance"]);
			$("#date_naissance_accuse_info").val(data["dateNaissance"]);
			$("#job_accuse_info").val(data["accuse"]["proffession"]);
			$("#lieu_naissance_accuse_info").val(data["accuse"]["lieuNaissance"]);
			$("#sexe_accuse_info").val(data["accuse"]["sexe"]);
			$("#pere_accuse_info").val(data["accuse"]["prenomPere"]);
			$("#mere_accuse_info").val(data["accuse"]["prenomMere"]);
			$("#addresse_accuse_info").val(data["accuse"]["addresse"]);
			$("#charge_accuse_info").val(data["accuseTohma"]);
			
			
			if(data["officierCivil"] != null){
				$('#field_officier_civil_info').css('display', 'block');
				$("#cni_officier_civil_info").val(data["officierCivil"]["cniOfficierCivil"]);
				$("#prenom_officier_civil_info").val(data["officierCivil"]["prenom"]);
				$("#nom_officier_civil_info").val(data["officierCivil"]["nom"]);
				$("#assurance_officier_civil_info").val(data["officierCivilAssurance"]);
				$("#addresse_officier_civil_info").val(data["officierCivil"]["addresse"]);
			}else{
				$('#field_officier_civil_info').css('display', 'none');
			}
			
			if(data["avocats"].length != 0){
			
				$('#field_table_avocat_accuse_info').css('display', 'block');
				$("#table_avocat_accuse_body").empty();
				for (let i = 0; i < data["avocats"].length; i++){
					
					var barreau;
					
					switch(data["avocats"][i]["haya"]){
						case 10:
							barreau = "???????? ???????????????? ??????????";
							break;
						case 11:
							barreau = "???????? ???????????????? ??????????";
							break;
						case 12:
							barreau = "???????? ???????????????? ???????? ????????";
							break;
						case 13:
							barreau = "???????? ???????????????? ????????????";
							break;
						case 14:
							barreau = "???????? ???????????????? ????????????????";
							break;
						case 15:
							barreau = "???????? ???????????????? ??????????????";
							break;
						case 16:
							barreau = "???????? ???????????????? ???????????? ??????????????";
							break;
						case 17:
							barreau = "???????? ???????????????? ?????????????? ";
							break;
						case 18:
							barreau = "???????? ???????????????? ??????????";
							break;
						case 19:
							barreau = "???????? ???????????????? ????????????";
							break;
						case 20:
							barreau = "???????? ???????????????? ????????????????";
							break;
						case 21:
							barreau = "???????? ???????????????? ????????";
							break;
						case 22:
							barreau = "???????? ???????????????? ??????????????????";
							break;
						case 23:
							barreau = "???????? ???????????????? ??????????";
							break;
						case 24:
							barreau = "???????? ???????????????? ??????????";
							break;
						case 25:
							barreau = "???????? ???????????????? ????????????";
							break;
						case 26:
							barreau = "???????? ???????????????? ???????????? ??????????????";
							break;
						default:
					    	barreau = "";
					}
					
					var avocat_element = '<tr><td>'+data["avocats"][i]["cin"]+'</td><td>'+data["avocats"][i]["prenom"]+'</td><td>'+data["avocats"][i]["nom"]+'</td><td>'+barreau+'</td></tr>';
					$("#table_avocat_accuse_body").append(avocat_element);
				}
				
			}else{
				$("#table_avocat_accuse_body").empty();
				$('#field_table_avocat_accuse_info').css('display', 'none');
			}
			
			//modal Modify accuse
			
			$("#cni_accuse_up").val(data["accuse"]["cin"]);
			$("#nom_accuse_up").val(data["accuse"]["nom"]);
			$("#prenom_accuse_up").val(data["accuse"]["prenom"]);
			$("#etat_social_accuse_up").val(data["accuse"]["situationFamilialle"]);
			$("#assurance_accuse_up").val(data["accuseAssurance"]);
			$("#date_naissance_accuse_up").val(data["dateNaissance"]);
			$("#job_accuse_up").val(data["accuse"]["proffession"]);
			$("#lieu_naissance_accuse_up").val(data["accuse"]["lieuNaissance"]);
			$("#sexe_accuse_up").val(data["accuse"]["sexe"]);
			$("#pere_accuse_up").val(data["accuse"]["prenomPere"]);
			$("#mere_accuse_up").val(data["accuse"]["prenomMere"]);
			$("#addresse_accuse_up").val(data["accuse"]["addresse"]);
			$("#charge_accuse_up").val(data["accuseTohma"]);
			
		},
		error: function (e){

		}
	});
}



// modifier l'accuse

function updateAccuse(event){
		
		event.preventDefault();
		var formData = new FormData();
		formData.append("id_accuse", $("#liste_accuses_info").val());
		
		formData.append("cni_accuse",$("#cni_accuse_up").val());
		formData.append("prenom_accuse",$("#prenom_accuse_up").val());
		formData.append("nom_accuse",$("#nom_accuse_up").val());
		formData.append("etat_social_accuse",$("#etat_social_accuse_up").val());
		formData.append("assurance_accuse",$("#assurance_accuse_up").val());
		formData.append("date_naissance_accuse",$("#date_naissance_accuse_up").val());
		formData.append("job_accuse",$("#job_accuse_up").val());
		formData.append("lieu_naissance_accuse",$("#lieu_naissance_accuse_up").val());
		formData.append("pere_accuse",$("#pere_accuse_up").val());
		formData.append("mere_accuse",$("#mere_accuse_up").val());
		formData.append("addresse_accuse",$("#addresse_accuse_up").val());
		formData.append("charge_accuse",$("#charge_accuse_up").val());
		
		$.ajax({
			type: "POST",
			url: "consulterDossier/updateAccuse",
			processData: false,
			contentType: false,
			cache: false,
			data : formData,
			timeout: 600000,
			success: function (data){
	             if(data["message"]["error"]=="success"){
					
					$("#cni_accuse").val(data["accuse"]["cin"]);
					$("#nom_accuse").val(data["accuse"]["nom"]);
					$("#prenom_accuse").val(data["accuse"]["prenom"]);
					$("#etat_social_accuse").val(data["accuse"]["situationFamilialle"]);
					$("#assurance_accuse").val(data["accuse"]["assurance"]);
					$("#date_naissance_accuse").val(data["dateNaissance"]);
					$("#job_accuse").val(data["accuse"]["proffession"]);
					$("#lieu_naissance_accuse").val(data["accuse"]["lieuNaissance"]);
					$("#sexe_accuse").val(data["accuse"]["sexe"]);
					$("#pere_accuse").val(data["accuse"]["prenomPere"]);
					$("#mere_accuse").val(data["accuse"]["prenomMere"]);
					$("#addresse_accuse").val(data["accuse"]["addresse"]);
					$("#charge_accuse").val(data["accuse"]["tohma"]);
					
					var success = data["message"]["message"];
		            $("#updateAccuseModalBody").empty();
					$("#updateAccuseModalBody").append(success);
					
					var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">??????</a>";
					$("#updateAccuseModalBtn").empty();
					$("#updateAccuseModalBtn").append(btn);
					
	             } else if(data[0]["error"]=="error"){
	             	var error = data["message"]["message"];
		            $("#updateAccuseModalBody").empty();
					$("#updateAccuseModalBody").append(error);
					 
					var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">?????????? ????????????????</a>";
					$("#updateAccuseModalBtn").empty();
					$("#updateAccuseModalBtn").append(btn);
	             }
				
			},
			error: function (e){
	
			}
		})
}



// Supprimer un accuse

function deleteAccuse(event){
   event.preventDefault();
   var formData = new FormData();
   formData.append("id_accuse", $("#liste_accuses_info").val());
   formData.append("numero_dossier", $("#numero_dossier").val());
   
   $.ajax({
		type: "POST",
		url: "consulterDossier/deleteAccuse",
		processData: false,
		contentType: false,
		cache: false,
		data : formData,
		timeout: 600000,
		success: function (data){
		    if(data["error"]=="success"){
		    
             var success = data["message"];
             $("#deleteAccuseModalBody").empty();
			$("#deleteAccuseModalBody").append(success);
			
			var btn = "<a type=\"button\" class=\"btn btn-primary\" href=\"consulterDossier\">??????</a>";
			$("#deleteAccuseModalBtn").empty();
			$("#deleteAccuseModalBtn").append(btn);
			
             } else{
             
             var error = data["message"];
             $("#deleteAccuseModalBody").empty();
			 $("#deleteAccuseModalBody").append(error);
			 
			 var btn = "<a type=\"button\" class=\"btn btn-danger\" href=\"consulterDossier\">?????????? ????????????????</a>";
			 $("#deleteAccuseModalBtn").empty();
			 $("#deleteAccuseModalBtn").append(btn);
             
             }
		},
		error: function (e){
			alert("Error");
		}
	});
}