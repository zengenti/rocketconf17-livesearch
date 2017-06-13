(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    client.contentTypes.get('person').then(function (personContentType) {
        console.log("Person content type");
        console.log(personContentType);

        document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(personContentType, null, 2) + "</pre>";

    }, function (error) {
        console.error(error);
    });
    
})(Zengenti);