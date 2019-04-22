let myChart = document.getElementById('flush-area-chart-blue').getContext('2d');

let massPopChart = new Chart(myChart, {
    type:'Bars',
    data:{
        labels:['Maharshtra', 'Goa', 'Punjab', 'Madhya Pradesh'],
        datasets:[{
            label:'Numbers',
            data:[535,5435,643,345,2354]
        }]
    },
    options:{}
});