/**
 * Created by ant on 07/02/17.
 */

function fillInformationsOnSector(){
    fetch('data/numeric_sector.json')
    // this promise will be fulfilled when the json fill will be
        .then(function (response){
            // if we could load the resource, parse it
            if( response.ok )
                return response.json();
            else // if not, send some error message as JSON data
                return {data: "JSON file not found"};

        })
        // in case of invalid JSON (parse error) send some error message as JSON data
        .catch( function (error){
            console.log("error: "+error);
            return {data: "Invalid JSON"};
        })
        // this promise will be fulfilled when the json will be parsed
        .then(function (json) {
            var isFrenchTech = json["french_tech"];
            if(isFrenchTech){
                document.querySelector('#data1').textContent="La ville a été labellisée French Tech en "+json["year_french_tech"]+".";
            }
            document.querySelector('#data2').textContent=json["company_count"]+" entreprises du numérique en métropole nantaise";
            document.querySelector('#data3').textContent=json["rank"]+"ème entreprises du numérique en métropole nantaise";

            var events = json["events"];
            var eventExamples="";
            events.forEach(function(event){
                eventExamples+=event+","
            });
            document.querySelector('#data4').textContent=json["yearly_events_counts"]+" événements annuels pour présenter et promouvoir des nouveaux projets et des nouvelles startups en lien avec le numérique (Web2day, Nantes Digital Week, Devfest, Scopitone,…).";

            var sectors = json["sectors"];
            document.querySelector('#sector_count').textContent=sectors.length+" secteurs numériques majeurs à Nantes : ";
            var majorSectors="";
            //var sectors_ul = document.querySelector("#sectors_ul");
            sectors.forEach(function(sector){
                $('#sectors_ul').append("<li>"+sector+"</li>")
            });
            //document.querySelector('#data5').textContent=json["yearly_events_counts"]+" événements annuels pour présenter et promouvoir des nouveaux projets et des nouvelles startups en lien avec le numérique (Web2day, Nantes Digital Week, Devfest, Scopitone,…).";
        });
}