(function (Zengenti) {

    var client = Zengenti.Contensis.Client.create();

    $("#search-box").autocomplete({
        minLength: 3,
        source: function (request, response) {
            var Query = Zengenti.Contensis.Query;
            var Op = Zengenti.Contensis.Op;
            var query = new Query(
                Op.or(
                    Op.contains('title', request.term),
                    Op.contains('tagline', request.term)),                
                Op.equalTo('sys.contentTypeId', 'movie'),
                Op.equalTo('sys.versionStatus', 'latest')
            );
            query.pageSize = 300;
            var linkDepth = 1;
            client.entries.search(query, linkDepth).then(function (films) {
                console.log(films);
                console.log(films.items);
                response(films.items);
            }, function (error) {
                console.error(error);
            });
        },
        select: function (event, ui) {
            $("#search-output").html("Selected: " + ui.item.title);
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, item) {
            return $("<li>")
                .append("<a href=\"/movies/movie.aspx?id=" + item.sys.id + "\"><img style=\"height:50px;width:auto;\" src=\"" + item.posterImage.asset.sys.uri + "\"></img><div>" + item.title + "<br>" + item.tagline + "</div></a>")
                .appendTo(ul);
        };
})(Zengenti);