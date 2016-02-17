System.register(["angular2/core", "./bookmark.service", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_service_1, router_1, router_2;
    var NewBookmarkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            NewBookmarkComponent = (function () {
                function NewBookmarkComponent(_bookmarkService, _router, _routeParams) {
                    this._bookmarkService = _bookmarkService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                NewBookmarkComponent.prototype.onSubmit = function () {
                    this._bookmarkService.insertBookmark(this.newBookmark);
                    this._router.navigate(['Bookmarks']);
                };
                NewBookmarkComponent.prototype.ngOnInit = function () {
                    this.newBookmark = { favId: "", title: "", url: "", userId: "" };
                };
                NewBookmarkComponent = __decorate([
                    core_1.Component({
                        selector: 'bookmark',
                        template: "\n        <div class=\"col-md-6 col-md-push-6\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Nieuwe Bookmark toevoegen!</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <form class=\"form-horizontal\" #newBookmarkForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                        <fieldset>\n                            <legend>Bookmark Aanpassen</legend>\n                            <div class=\"form-group\">\n                                <label for=\"inputFavId\" class=\"col-md-3 control-label\">Nummer</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"number\" class=\"form-control\" id=\"inputFavId\" ngControl=\"favId\" [(ngModel)]=\"newBookmark.favId\" required>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputTitle\" class=\"col-md-3 control-label\">Title</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" id=\"inputTitle\" ngControl=\"title\" [(ngModel)]=\"newBookmark.title\" required>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputUrl\" class=\"col-md-3 control-label\">Link</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"url\" class=\"form-control\" id=\"inputUrl\" ngControl=\"url\" [(ngModel)]=\"newBookmark.url\" required>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputUserId\" class=\"col-md-3 control-label\">Gebruiker</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"number\" class=\"form-control\" id=\"inputUserId\" ngControl=\"userId\" [(ngModel)]=\"newBookmark.userId\" required>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <div class=\"col-md-9 col-md-offset-3\">\n                                <button type=\"button\" class=\"btn btn-default\">Annuleren</button>\n                                <button type=\"submit\" class=\"btn btn-primary\">Toevoegen</button>\n                              </div>\n                            </div>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n    ",
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService, router_1.Router, router_2.RouteParams])
                ], NewBookmarkComponent);
                return NewBookmarkComponent;
            })();
            exports_1("NewBookmarkComponent", NewBookmarkComponent);
        }
    }
});
//# sourceMappingURL=new-bookmark.component.js.map