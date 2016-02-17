System.register(["angular2/core", "./bookmarks/bookmark-list.component", "angular2/router", "./bookmarks/new-bookmark.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_list_component_1, router_1, router_2, new_bookmark_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_list_component_1_1) {
                bookmark_list_component_1 = bookmark_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (new_bookmark_component_1_1) {
                new_bookmark_component_1 = new_bookmark_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <header class=\"navbar navbar-default\">\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                    </div>\n                    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n                        <ul class=\"nav navbar-nav\">\n                            <li><a [routerLink]=\"['Bookmarks']\">Bookmarks</a></li>\n                            <li><a [routerLink]=\"['NewBookmark']\">New Bookmark</a></li>\n                        </ul>\n                    </div>\n            </header>\n        </div>\n    </div>\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [bookmark_list_component_1.BookmarkListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/bookmarks', name: 'Bookmarks', component: bookmark_list_component_1.BookmarkListComponent, useAsDefault: true },
                        { path: '/newbookmark', name: 'NewBookmark', component: new_bookmark_component_1.NewBookmarkComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map