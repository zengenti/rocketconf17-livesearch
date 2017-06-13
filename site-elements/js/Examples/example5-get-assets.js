(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    // get assets with custom options
    var options = {
        contentTypeId: "image" // video word pdf javascript cSharpRazor css
    };

    client.entries.list(options).then(function (assets) {
        console.log("Assets:");
        console.log(assets.items);

        document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(assets.items, null, 2) + "</pre>";

    }, function (error) {
        console.error(error);
    });

})(Zengenti);