import {Component} from "angular2/core";
import {BookmarkListComponent} from "./bookmarks/bookmark-list.component";
@Component({
    selector: 'app',
    template: `
    <bookmark-list class="row"></bookmark-list>
    `,
    directives: [BookmarkListComponent]
})
export class AppComponent {

}