System.register(["angular2/core", "./bookmark.component", "./bookmark.service", "./bookmark-add.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_component_1, bookmark_service_1, bookmark_add_component_1;
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
            },
            function (bookmark_add_component_1_1) {
                bookmark_add_component_1 = bookmark_add_component_1_1;
            }],
        execute: function() {
            BookmarkListComponent = (function () {
                function BookmarkListComponent(_bookmarkService) {
                    this._bookmarkService = _bookmarkService;
                    this.selectedBookmark = {};
                    this.showTools = false;
                }
                BookmarkListComponent.prototype.toggleTools = function () {
                    if (!this.showTools) {
                        if (this.toggleToolsPass()) {
                            this.showTools = true;
                            return true;
                        }
                        return false;
                    }
                    this.showTools = false;
                };
                BookmarkListComponent.prototype.toggleToolsPass = function () {
                    var pass = prompt('Om de instellingen aan te passen moet je een wachtwoord invullen:', '');
                    if (pass !== 'yes') {
                        alert("Onjuist wachtwoord, je kan de instellingen niet aanpassen");
                        return false;
                    }
                    return true;
                };
                BookmarkListComponent.prototype.onSelect = function (bookmark) {
                    this.selectedBookmark = bookmark;
                };
                BookmarkListComponent.prototype.getBookmarks = function () {
                    var _this = this;
                    this._bookmarkService.getBookmarks().subscribe(function (bookmarks) { return _this.bookmarks = bookmarks; }, function (error) { return alert(error); }, function () { return ''; });
                };
                BookmarkListComponent.prototype.ngOnInit = function () {
                    this.getBookmarks();
                };
                BookmarkListComponent = __decorate([
                    core_1.Component({
                        selector: 'bookmark-list',
                        templateUrl: ["app/bookmarks/bookmark-list.html"],
                        directives: [bookmark_component_1.BookmarkComponent, bookmark_add_component_1.BookmarkAddComponent],
                        providers: [bookmark_service_1.BookmarkService],
                        styleUrls: ["src/css/bookmark-list.css"]
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