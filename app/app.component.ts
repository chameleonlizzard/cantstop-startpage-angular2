import {Component} from "angular2/core";
import {BookmarkListComponent} from "./bookmarks/bookmark-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {HTTPTestComponent} from "./http-test.component";
import {BookmarkAddComponent} from "./bookmarks/bookmark-add.component";
@Component({
    selector: 'app',
    template: `

    <div class="row">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [BookmarkListComponent, HTTPTestComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/bookmarks', name: 'Bookmarks', component: BookmarkListComponent, useAsDefault: true},
    {path: '/bookmark-add', name: 'BookmarkAdd', component: BookmarkAddComponent}
])
export class AppComponent {

}