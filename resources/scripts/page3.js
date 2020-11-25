//  --- EMPLOYEE ONE ----

function getEmpOne(){
    console.log("test"); 
    const empOneApiUrl = "https://localhost:5001/api/feedback";

    fetch(empOneApiUrl).then(function(response){
        console.log(response); 
        console.log(empOneApiUrl); 
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne' && survey.overallScore >= 15 && survey.overallScore <= 25){
                console.log(survey.employee_Feedback); 
                html+= "<p><spann><div><div class=\"avatar\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneTechDeets()\">></button></p>" +
                "<div class = \"os-img-red\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.overallScore >= 26 && survey.overallScore <= 40) {
                html+= "<p><spann><div><div class=\"avatar\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneTechDeets()\">></button></p>" +
                "<div class = \"os-img-orange\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.overallScore >= 41 && survey.overallScore <= 55) {
                html+= "<p><spann><div><div class=\"avatar\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneTechDeets()\">></button></p>" +
                "<div class = \"os-img-yellow\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.overallScore >= 56 && survey.overallScore <= 65) {
                html+= "<p><spann><div><div class=\"avatar\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneTechDeets()\">></button></p>" +
                "<div class = \"os-img-lime\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.overallScore >= 66 && survey.overallScore <= 75) {
                html+= "<p><spann><div><div class=\"avatar\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getOneTechDeets()\">></button></p>" +
                "<div class = \"os-img-green\"></div>"; 
            }
            

        });
        html += "</p>"; 
        document.getElementById("surveys").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}



//EMPLOYEE ONE - LEAD DETAILS 
function getOneLeadDeets(){
    console.log("test"); 
    const oneLeadDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(oneLeadDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne' && survey.leadTotal >= 5 && survey.leadTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.leadTotal >= 8 && survey.leadTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.leadTotal >= 14 && survey.leadTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.leadTotal >= 19 && survey.leadTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.leadTotal >= 22 && survey.leadTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }

        });
        html += "</p>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE ONE - COMM DETAILS 
function getOneCommDeets(){
    console.log("test"); 
    const oneCommDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(oneCommDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne' && survey.commTotal >= 5 && survey.commTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.commTotal >= 8 && survey.commTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.commTotal >= 14 && survey.commTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.commTotal >= 19 && survey.commTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.commTotal >= 22 && survey.commTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's ability to stay up to date with the needs of managers and clients.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }

        });
        html += "</p>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE ONE - TECH DETAILS 
function getOneTechDeets(){
    console.log("test"); 
    const oneTechDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(oneTechDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeOne' && survey.techTotal >= 5 && survey.techTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.techTotal >= 8 && survey.techTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.techTotal >= 14 && survey.techTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.techTotal >= 19 && survey.techTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>";  
            }
            else if (survey.employee_Feedback == 'EmployeeOne' && survey.techTotal >= 22 && survey.techTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}




//     ** -- EMPLOYEE TWO -- ** 

function getEmpTwo(){
    console.log("test"); 
    const empTwoApiUrl = "https://localhost:5001/api/feedback";

    fetch(empTwoApiUrl).then(function(response){
        console.log(response); 
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo' && survey.overallScore >= 15 && survey.overallScore <= 25){
                console.log(survey.employee_Feedback); 
                html+= "<p><spann><div><div class=\"avatar2\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoTechDeets()\">></button></p>" +
                "<div class = \"os-img-red\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.overallScore >= 26 && survey.overallScore <= 40) {
                html+= "<p><spann><div><div class=\"avatar2\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoTechDeets()\">></button></p>" +
                "<div class = \"os-img-orange\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.overallScore >= 41 && survey.overallScore <= 55) {
                html+= "<p><spann><div><div class=\"avatar2\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoTechDeets()\">></button></p>" +
                "<div class = \"os-img-yellow\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.overallScore >= 56 && survey.overallScore <= 65) {
                html+= "<p><spann><div><div class=\"avatar2\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoTechDeets()\">></button></p>" +
                "<div class = \"os-img-lime\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.overallScore >= 66 && survey.overallScore <= 75) {
                html+= "<p><spann><div><div class=\"avatar2\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getTwoTechDeets()\">></button></p>" +
                "<div class = \"os-img-green\"></div>"; 
            }
        });
        html += "</p>"; 
        document.getElementById("surveys").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE TWO -- LEAD DEETS 
function getTwoLeadDeets(){
    console.log("test"); 
    const twoLeadDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoLeadDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo' && survey.leadTotal >= 5 && survey.leadTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.leadTotal >= 8 && survey.leadTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.leadTotal >= 14 && survey.leadTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.leadTotal >= 19 && survey.leadTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.leadTotal >= 22 && survey.leadTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }

        });
        html += "</p>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE TWO - COMM DETAILS 
function getTwoCommDeets(){
    console.log("test"); 
    const twoCommDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoCommDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo' && survey.commTotal >= 5 && survey.commTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.commTotal >= 8 && survey.commTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.commTotal >= 14 && survey.commTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.commTotal >= 19 && survey.commTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.commTotal >= 22 && survey.commTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's ability to stay up to date with the needs of managers and clients.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE TWO - TECH DETAILS 
function getTwoTechDeets(){
    console.log("test"); 
    const twoTechDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoTechDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeTwo' && survey.techTotal >= 5 && survey.techTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.techTotal >= 8 && survey.techTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.techTotal >= 14 && survey.techTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.techTotal >= 19 && survey.techTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>";  
            }
            else if (survey.employee_Feedback == 'EmployeeTwo' && survey.techTotal >= 22 && survey.techTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//     ** -- EMPLOYEE THREE -- ** 

function getEmpThree(){
    console.log("test"); 
    const empThreeApiUrl = "https://localhost:5001/api/feedback";

    fetch(empThreeApiUrl).then(function(response){
        console.log(response); 
        return response.json();
        
    }).then(function(json){

        let html = "<p>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree' && survey.overallScore >= 15 && survey.overallScore <= 25){
                console.log(survey.employee_Feedback); 
                html+= "<p><spann><div><div class=\"avatar3\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeTechDeets()\">></button></p>" +
                "<div class = \"os-img-red\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.overallScore >= 26 && survey.overallScore <= 40) {
                html+= "<p><spann><div><div class=\"avatar3\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeTechDeets()\">></button></p>" +
                "<div class = \"os-img-orange\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.overallScore >= 41 && survey.overallScore <= 55) {
                html+= "<p><spann><div><div class=\"avatar3\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeTechDeets()\">></button></p>" +
                "<div class = \"os-img-yellow\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.overallScore >= 56 && survey.overallScore <= 65) {
                html+= "<p><spann><div><div class=\"avatar3\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeTechDeets()\">></button></p>" +
                "<div class = \"os-img-lime\"></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.overallScore >= 66 && survey.overallScore <= 75) {
                html+= "<p><spann><div><div class=\"avatar3\"></div><div class=\"EmpName\">" + survey.employee_Feedback +"</div></div></spann></p>" +
                "<p><div class=\"os-box\">" + "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Overall Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.overallScore + "</div></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Leadership Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎" + survey.leadTotal + "‎‏‏‎‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎ ‎‏‏‎‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeLeadDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Communication Score ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.commTotal + "‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeCommDeets()\">></button></p>" +
                "<div class = \"space\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Technology Score ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.techTotal + "‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎<button class = \"btn btn-sm btn-info \" onclick = \"getThreeTechDeets()\">></button></p>" +
                "<div class = \"os-img-green\"></div>"; 
            }

        });
        html += "</p>"; 
        document.getElementById("surveys").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE Three -- LEAD DEETS 
function getThreeLeadDeets(){
    console.log("test"); 
    const threeLeadDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(threeLeadDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree' && survey.leadTotal >= 5 && survey.leadTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.leadTotal >= 8 && survey.leadTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.leadTotal >= 14 && survey.leadTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.leadTotal >= 19 && survey.leadTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.leadTotal >= 22 && survey.leadTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Leadership Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Motivation ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + survey.lead1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The motivation score describes an employee's ability to motivate subordinates and peers during projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Decisiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎  ‎‏‏‎" + survey.lead2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The decisivness score describes an employee's ability to make concise decions & follow through on them. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Acknowledgement ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.lead3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The acknowledgement score describes an employee's ability to recognize the effors of peers.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Perseverance ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The perserverance score describes an employee's ability to remain consistant through adversity. </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Organization... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ ‎‏‏‎ " + survey.lead5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The organizaiton score describes an employee's ability to navigate project management in a diciplined manner.‎</p></div></div>";
            }

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE THREE - COMM DETAILS 
function getThreeCommDeets(){
    console.log("test"); 
    const threeCommDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(threeCommDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree' && survey.commTotal >= 5 && survey.commTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.commTotal >= 8 && survey.commTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.commTotal >= 14 && survey.commTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.commTotal >= 19 && survey.commTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's willingness to go the extra mile on tasks and projects.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.commTotal >= 22 && survey.commTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Communication Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Transparency ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.comm1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The transparency score describes an employee's ability to communicate ideas clearly and descriptively. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Responsiveness ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.comm2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The responsiveness score describes an employee's ability to accept and adapt to constructive criticism. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Punctuality ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎          ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.comm3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The punctuality score describes an employee's ability to complete tasks in an quality and timely manner.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Proactiveness ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.comm4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The proactiveness score describes an employee's ability to stay up to date with the needs of managers and clients.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Conscientiousness... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.comm5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The conscientiousness score describes an employee's ability to display appropriate workplace courtesy.‎</p></div></div>"; 
            }

        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

//EMPLOYEE THREE - TECH DETAILS 
function getThreeTechDeets(){
    console.log("test"); 
    const twoThreeDeetsApiUrl = "https://localhost:5001/api/feedback";

    fetch(twoThreeDeetsApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        let html = "<ul>";
        json.forEach((survey)=>{
            if (survey.employee_Feedback == 'EmployeeThree' && survey.techTotal >= 5 && survey.techTotal <= 7){ //red 

                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-red\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.techTotal >= 8 && survey.techTotal <= 13) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-orange\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.techTotal >= 14 && survey.techTotal <= 18) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-yellow\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.techTotal >= 19 && survey.techTotal <= 21) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-lime\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>";  
            }
            else if (survey.employee_Feedback == 'EmployeeThree' && survey.techTotal >= 22 && survey.techTotal <= 25) {
                html+= "<p><div><div class = \"scoreName\">Technology Score</div><div class = \"d-img-green\"></div></div></p>" + 
                "<div class=\"d-box-2\"><div class = \"space2\"><p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</p></div>" +
                "<p>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎Exceptionality ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎      ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎     ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎   ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎" + survey.tech1 + "</p>" +
                "<div class = \"space2\"><p> ‎‏‏‎ ‎‏The exceptionality score describes an employee's willingness to go the extra mile on tasks and projects. </p></div>" +
                "<p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎Flexibility ... ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎       ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ " + survey.tech2 + "‎‏‏‎‏‎‎‏‏‎</p>" +
                "<div class = \"space2\"><p>  ‎‏‏‎ ‎‏ ‎‏‏‎The flexibility score describes an employee's ability to react and adapt to changes in the workplace. ‏‏‎‎</p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Cleverness ... ‎‏‏‎  ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎   ‎‏‏‎‎‏‏‎     ‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎           ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎‏‏‎" + survey.tech3 + "‎‏‏‎‎‏‏‎‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The cleverness score describes an employee's ability to solve problems creatively and recourcefully.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎Producivity ... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‏‏‎ " + survey.tech4 + "‎‏‏‎</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The productivty score describes an employee's level of time management skills.  </p></div>" +
                "<p> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Knowledgeable... ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎   ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‏‏‎" + survey.tech5 + "</p>" +
                "<div class = \"space2\"><p>‎ ‎‏‏‎ The knowledgeable score describes an employee's ability to absorb new information quickly and apply it to projects.‎</p></div></div>"; 
            }
        });
        html += "</ul>"; 
        document.getElementById("details").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}





