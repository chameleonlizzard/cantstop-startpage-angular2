import {Component} from "angular2/core";
import {BookmarkListComponent} from "./bookmarks/bookmark-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {NewBookmarkComponent} from "./bookmarks/new-bookmark.component";
@Component({
    selector: 'app',
    template: `
    <div class="row">
        <div class="col-md-12">
            <header class="navbar navbar-default">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse navbar-responsive-collapse">
                        <ul class="nav navbar-nav">
                            <li><a [routerLink]="['Bookmarks']">Bookmarks</a></li>
                            <li><a [routerLink]="['NewBookmark']">New Bookmark</a></li>
                        </ul>
                    </div>
            </header>
        </div>
    </div>
    <div class="row">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [BookmarkListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/bookmarks', name: 'Bookmarks', component: BookmarkListComponent, useAsDefault: true},
    {path: '/newbookmark', name: 'NewBookmark', component: NewBookmarkComponent}
])
export class AppComponent {

}