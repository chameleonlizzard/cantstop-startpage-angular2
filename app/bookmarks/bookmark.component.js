System.register(["angular2/core", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var BookmarkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BookmarkComponent = (function () {
                function BookmarkComponent(_router) {
                    this._router = _router;
                    this.bookmark = null;
                }
                BookmarkComponent.prototype.onCreateNew = function () {
                    this._router.navigate(['NewBookmark', { userId: this.bookmark.userId }]);
                };
                BookmarkComponent = __decorate([
                    core_1.Component({
                        selector: 'bookmark',
                        template: "\n    <div class=\"\">\n        <button class=\"btn btn-default btn-raised pull-right\" (click)=\"onCreateNew()\" data-dismiss=\"modal\"><i class=\"glyphicon glyphicon-copy\"></i> Copy Bookmark</button>\n    </div>\n    <form class=\"form-horizontal\">\n        <fieldset>\n            <legend>Bookmark Aanpassen</legend>\n            <div class=\"form-group\">\n                <label for=\"inputTitle\" class=\"col-md-3 control-label\">Nummer</label>\n                <div class=\"col-md-9\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" disabled [(ngModel)]=\"bookmark.favId\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputTitle\" class=\"col-md-3 control-label\">Title</label>\n                <div class=\"col-md-9\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"bookmark.title\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputTitle\" class=\"col-md-3 control-label\">Link</label>\n                <div class=\"col-md-9\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"bookmark.url\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputTitle\" class=\"col-md-3 control-label\">Gebruiker</label>\n                <div class=\"col-md-9\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"bookmark.userId\">\n                </div>\n            </div>\n        </fieldset>\n    </form>\n\n    ",
                        inputs: ["bookmark"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], BookmarkComponent);
                return BookmarkComponent;
            })();
            exports_1("BookmarkComponent", BookmarkComponent);
        }
    }
});
//# sourceMappingURL=bookmark.component.js.map