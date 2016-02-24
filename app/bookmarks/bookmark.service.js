System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var BookmarkService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            BookmarkService = (function () {
                function BookmarkService(_http) {
                    this._http = _http;
                }
                BookmarkService.prototype.getBookmarks = function () {
                    return this._http.get('http://igoogle.cantstop.nl/api/bookmarks')
                        .map(function (res) { return res.json(); });
                };
                BookmarkService.prototype.addBookmark = function (bookmark) {
                    var bookmarkJson = JSON.stringify({ title: bookmark.title, url: bookmark.url });
                    var params = bookmarkJson;
                    var headers = new http_2.Headers;
                    headers.append('Content-Type', 'application/x-www-form-urlencode');
                    return this._http.post('http://igoogle.cantstop.nl/api/bookmarks', params, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                BookmarkService.prototype.removeBookmark = function (bookmark_id) {
                    var params = JSON.stringify({ BookmarkId: bookmark_id });
                    return this._http.delete('http://igoogle.cantstop.nl/api/bookmark-delete', params).map(function (res) { return res.json(); });
                };
                BookmarkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BookmarkService);
                return BookmarkService;
            })();
            exports_1("BookmarkService", BookmarkService);
        }
    }
});
//# sourceMappingURL=bookmark.service.js.map