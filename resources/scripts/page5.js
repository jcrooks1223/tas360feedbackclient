

function getTimeChart(){
    const getTimeChartApiUrl = "https://localhost:5001/api/feedback";

    fetch(getTimeChartApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

        json.forEach((survey)=>{

            var leadOne = json[0].leadTotal; 
            var commOne = json[0].commTotal;
            var techOne = json[0].techTotal;

            var leadTwo = json[1].leadTotal;
            var commTwo = json[1].commTotal; 
            var techTwo = json[1].techTotal; 

            console.log(leadTwo); 

            if(survey.employee_Feedback == "EmployeeFour"){
                var chart = new CanvasJS.Chart("chartContainer", {
                    animationEnabled: true,
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    title:{
                        text: "Employee Four Feedback "
                    },
                    axisY: {
                        title: "Score out of 25"
                    },
                    data: [{        
                        type: "column",  
                        showInLegend: true, 
                        legendMarkerColor: "grey",
                        legendText: "Employee Score by Category ",
                        dataPoints: [      
                            { y: leadOne, label: "Year 1: Leadership Score", color: "turquoise" },
                            { y: commOne,  label: "Year 1: Communication Score", color: "indigo"},
                            { y: techOne,  label: "Year 1: Technology Score", color: "seagreen"},
                            { y: leadTwo, label: "Year 2: Leadership Score", color: "turquoise" },
                            { y: commTwo,  label: "Year 2: Communication Score", color : "indigo"},
                            { y: techTwo,  label: "Year 2: Technology Score", color : "seagreen"} 
                        ]
                    }],
                    axisX: {
                        title: "years"
                    }

                });
                chart.render();
            }
            
        }); 

        document.getElementById("chartContainer").innerHTML = html; 
    }).catch(function(error){
        console.log(error);
    })
}

function getResults(){
    const getResultsApiUrl = "https://localhost:5001/api/feedback";
    let html = "</p>"
    fetch(getResultsApiUrl).then(function(response){
        return response.json(); 
    }).then(function(json){
        console.log(json);
        //const imageUrl = json[0].url; 
        const leadOne = json[0].leadTotal; 
        const commOne = json[0].commTotal;
        const techOne = json[0].techTotal;

        const leadTwo = json[1].leadTotal;
        const commTwo = json[1].commTotal; 
        const techTwo = json[1].techTotal; 

        const compareLead = leadOne - leadTwo; 
        const compareComm = commOne - commTwo; 
        const compareTech = techOne - techTwo; 

        console.log(compareLead); 

       html+= "<div class = \"resultsBox\"><p>Your Leadership Score improved " + compareLead +" points since last quarter</p>" + 
       "<p>Your Communication Score improved " + compareComm +" points since last quarter</p>" + 
       "<p>Your Technology Score improved " + compareTech +" points since last quarter</p></div>";

        document.getElementById("resultsContainer").innerHTML = html;
    }).catch(function(error){
        console.log(error); 
    })
}