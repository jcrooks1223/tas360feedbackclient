/*
function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Employee', 'Leadership', 'Communication', 'Technical'],
    ['Employee 1', 24, 19, 18],
    ['Employee 2', 20, 23, 15],
    ['Employee 3', 17, 18, 22]  
  ]);
  var options = {
    backgroundColor: "transparent",
    colors: ["grey", "blue"],
    fontSize: 17,    
  chart: {
  title: 'Company Performance',
  //subtitle: 'Leadership, Communication, and Technical: 2014-2017',
 } 
};
var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
chart.draw(data, google.charts.Bar.convertOptions(options));
}
*/ 

//google.charts.load('current', {'packages':['bar']});
//google.charts.setOnLoadCallback(getManagerChart());

function drawChart(){
    const getManagerChartApiUrl ="https://tas360feedbackapi.herokuapp.com/api/feedback";

    fetch(getManagerChartApiUrl).then(function(response){
        console.log(response);  
        return response.json();
        
    }).then(function(json){

            var leadOne = json[2].leadTotal; 
            var commOne = json[2].commTotal;
            var techOne = json[2].techTotal;

            var leadTwo = json[3].leadTotal;
            var commTwo = json[3].commTotal; 
            var techTwo = json[3].techTotal; 

            var leadThree = json[4].leadTotal; 
            var commThree = json[4].commTotal; 
            var techThree = json[4].techTotal; 

            var data = google.visualization.arrayToDataTable([
                ['Employee', 'Leadership', 'Communication', 'Technical'],
                ['Employee 1', leadOne, commOne, techOne],
                ['Employee 2', leadTwo, commTwo, techTwo],
                ['Employee 3', leadThree, commThree, techThree]  
              ]);
              var options = {
                backgroundColor: "transparent",
                colors: ["grey", "blue"],
                fontSize: 17,    
              chart: {
              title: 'Company Performance',
              //subtitle: 'Leadership, Communication, and Technical: 2014-2017',
             } 
            };
            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
            chart.draw(data, google.charts.Bar.convertOptions(options));
            console.log(techThree); 
    }).catch(function(error){
        console.log(error);
    })
}