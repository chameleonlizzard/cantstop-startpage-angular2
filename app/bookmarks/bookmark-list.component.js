System.register(["angular2/core", "./bookmark.component", "./bookmark.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_component_1, bookmark_service_1;
    var BookmarkListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_component_1_1) {
                bookmark_component_1 = bookmark_component_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            }],
        execute: function() {
            BookmarkListComponent = (function () {
                function BookmarkListComponent(_bookmarkService) {
                    this._bookmarkService = _bookmarkService;
                    this.selectedBookmark = {};
                }
                BookmarkListComponent.prototype.onSelect = function (bookmark) {
                    this.selectedBookmark = bookmark;
                };
                BookmarkListComponent.prototype.getBookmarks = function () {
                    var _this = this;
                    this._bookmarkService.getBookmarks().then(function (bookmarks) { return _this.bookmarks = bookmarks; });
                };
                BookmarkListComponent.prototype.ngOnInit = function () {
                    this.getBookmarks();
                };
                BookmarkListComponent = __decorate([
                    core_1.Component({
                        selector: 'bookmark-list',
                        template: "\n    <div class=\"col-md-4\">\n    <table class=\"table\">\n        <tr *ngFor=\"#bookmark of bookmarks\" (click)=\"onSelect(bookmark)\" [class.text-danger]=\"selectedBookmark === bookmark\">\n            <td>{{bookmark.title}}</td>\n        </tr>\n    </table>\n    </div>\n    <bookmark [bookmark]=\"selectedBookmark\" class=\"col-md-8\"></bookmark>\n    ",
                        directives: [bookmark_component_1.BookmarkComponent],
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService])
                ], BookmarkListComponent);
                return BookmarkListComponent;
            })();
            exports_1("BookmarkListComponent", BookmarkListComponent);
        }
    }
});
//# sourceMappingURL=bookmark-list.component.js.map