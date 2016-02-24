import {Component} from "angular2/core";
import {BookmarkComponent} from "./bookmark.component";
import {BookmarkService} from "./bookmark.service";
import {Bookmark} from "./bookmark";
import {OnInit} from "angular2/core";
import {BookmarkAddComponent} from "./bookmark-add.component";
@Component({
    selector: 'bookmark-list',
    templateUrl: ["app/bookmarks/bookmark-list.html"],
    directives: [BookmarkComponent, BookmarkAddComponent],
    providers: [BookmarkService],
    styleUrls: ["src/css/bookmark-list.css"]
})
export class BookmarkListComponent implements OnInit {

    public bookmarks:Bookmark[];
    public selectedBookmark = {};
    public showTools = false;

    constructor(private _bookmarkService:BookmarkService) {
    }

    toggleTools() {
        if (!this.showTools) {
            if (this.toggleToolsPass()) {
                this.showTools = true;
                return true;
            }
            return false;
        }
        this.showTools = false;
    }

    toggleToolsPass() {
        var pass = prompt('Om de instellingen aan te passen moet je een wachtwoord invullen:', '');
        if (pass !== 'yes') {
            alert("Onjuist wachtwoord, je kan de instellingen niet aanpassen");
            return false;
        }
        return true;
    }

    onSelect(bookmark) {
        this.selectedBookmark = bookmark;
    }

    getBookmarks(){
        this._bookmarkService.getBookmarks().subscribe(
            bookmarks  => this.bookmarks = bookmarks,
            error => alert(error),
            () => ''
        );
    }

    ngOnInit():any {
        this.getBookmarks();
    }
}