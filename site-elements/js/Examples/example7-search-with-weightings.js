(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    var Query = Zengenti.Contensis.Query;
    var Op = Zengenti.Contensis.Op;
    var query = new Query(
        Op.equalTo('sys.contentTypeId', 'movie'),
        Op.equalTo('sys.versionStatus', 'latest'),
        //Op.freeText('tagline', 'journey'),
        Op.or(
            Op.freeText('title', 'in').weight(5),
            Op.freeText('tagline', 'in').weight(0),
            Op.freeText('overview', 'in').weight(0),
            Op.freeText('title', 'out').weight(10),
            Op.freeText('tagline', 'out').weight(0),
            Op.freeText('overview', 'out').weight(0)
        ));

    client.entries.search(query).then(function (movies) {
        console.log("Search results:");
        console.log(movies);

        var mappedMovies = movies.items.map(function (movie) {
            return {
                title: movie.title,
                tagline: movie.tagline,
                overview: movie.overview,
                year: new Date(movie.releaseDate).getFullYear()
            };
        });

        document.getElementById("T999_main").innerHTML = "<pre>" + JSON.stringify(mappedMovies, null, 2) + "</pre>";
    }, function (error) {
        console.error(error);
    });

})(Zengenti);