(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    // get entries with default options
    client.entries.list('movie').then(function (movies) {
        console.log("Movies:");
        console.log(movies);

        document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(movies, null, 2) + "</pre>";

    }, function (error) {
        console.error(error);
    });

    // get entries with custom options
    // var options = {
    //     contentTypeId: "movie",
    //     fields: ["title", "releaseDate", "homepage", "tagline"],
    //     linkDepth: 1
    // };

    // client.entries.list(options).then(function (movies) {
    //     console.log("Movies:");
    //     console.log(movies.items);

    //     document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(movies.items, null, 2) + "</pre>";

    // }, function (error) {
    //     console.error(error);
    // });

})(Zengenti);