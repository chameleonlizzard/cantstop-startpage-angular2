System.register(["angular2/core", "./bookmark.service", "angular2/router", "angular2/common", "rxjs/add/operator/map"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_service_1, router_1, common_1, common_2, core_2;
    var BookmarkAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (_1) {}],
        execute: function() {
            BookmarkAddComponent = (function () {
                function BookmarkAddComponent(_bookmarkService, _formBuilder, _elRef, _route) {
                    this._bookmarkService = _bookmarkService;
                    this._formBuilder = _formBuilder;
                    this._elRef = _elRef;
                    this._route = _route;
                }
                BookmarkAddComponent.prototype.onSubmit = function (bookmarkValue) {
                    var _this = this;
                    this._bookmarkService.addBookmark(bookmarkValue).subscribe(function (bookmark) { return _this.bookmark = JSON.stringify(bookmark); }, function (error) { return alert(error); }, function () { return (_this.bookmarkAdded()); });
                    this._route.navigate(['Bookmarks']);
                };
                BookmarkAddComponent.prototype.ngOnInit = function () {
                    this.bookmarkAddForm = this._formBuilder.group({
                        title: ['', common_2.Validators.required],
                        url: ['', common_2.Validators.required]
                    });
                };
                BookmarkAddComponent.prototype.bookmarkAdded = function () {
                    jQuery(this._elRef.nativeElement).find('#bookmarkAdd')[0].reset();
                    jQuery(this._elRef.nativeElement).find('#bookmarkAddModal').modal('hide');
                };
                BookmarkAddComponent = __decorate([
                    core_1.Component({
                        selector: 'bookmark-add',
                        templateUrl: ["app/bookmarks/bookmark-add.html"],
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService, common_1.FormBuilder, core_2.ElementRef, router_1.Router])
                ], BookmarkAddComponent);
                return BookmarkAddComponent;
            })();
            exports_1("BookmarkAddComponent", BookmarkAddComponent);
        }
    }
});
//# sourceMappingURL=bookmark-add.component.js.map