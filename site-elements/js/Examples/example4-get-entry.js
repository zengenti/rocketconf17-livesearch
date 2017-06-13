(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    var movieId = '2ba3f636-dc4d-491a-adc2-f93d38a84d21';

    client.entries.get({ id: movieId, language: 'en-GB', linkDepth: 1 }).then(function (movie) {
        console.log("Movie entry:");
        console.log(movie);

        document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(movie, null, 2) + "</pre>";

    }, function (error) {
        console.error(error);
    });

    // client.entries.get({ id: movieId, language: 'fr-FR', linkDepth: 1 }).then(function (movie) {
    //     console.log("Movie entry:");
    //     console.log(movie);

    //     document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(movie, null, 2) + "</pre>";

    // }, function (error) {
    //     console.error(error);
    // });

})(Zengenti);