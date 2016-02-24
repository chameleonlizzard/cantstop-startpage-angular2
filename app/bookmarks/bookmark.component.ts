import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Bookmark} from "./bookmark";
import {RouteParams} from "angular2/router";
@Component({
    selector: 'bookmark',
    templateUrl: "app/bookmarks/bookmark.html",
    inputs: ["bookmark"]
})
export class BookmarkComponent {
    public bookmark: Bookmark = null;

    constructor(private _router: Router) {

    }

    onCreateNew(){
        this._router.navigate(['BookmarkAdd', {}])
    }
}