(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    var Query = Zengenti.Contensis.Query;
    var Op = Zengenti.Contensis.Op;
    var query = new Query(
        Op.contains('title', 'Ali'),
        //Op.greaterThan('runtime', 110),
        Op.equalTo('sys.contentTypeId', 'movie'),
        Op.equalTo('sys.versionStatus', 'latest')
    );

    client.entries.search(query).then(function (movies) {
        console.log("Search results:");
        console.log(movies);

        document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(movies.items, null, 2) + "</pre>";
    }, function (error) {
        console.error(error);
    });

    // client.entries.search(query).then(function (movies) {
    //     console.log("Search results:");
    //     console.log(movies);

    //     var mappedMovies = movies.items.map(function (movie) {
    //         return {
    //             title: movie.title,
    //             year: new Date(movie.releaseDate).getFullYear(),
    //             runtime: movie.runtime
    //         };
    //     });

    //     document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(mappedMovies, null, 2) + "</pre>";
    // }, function (error) {
    //     console.error(error);
    // });

})(Zengenti);