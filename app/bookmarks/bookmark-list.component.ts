import {Component} from "angular2/core";
import {BookmarkComponent} from "./bookmark.component";
import {BookmarkService} from "./bookmark.service";
import {Bookmark} from "./bookmark";
import {OnInit} from "angular2/core";
@Component({
    selector: 'bookmark-list',
    template: `
    <div class="col-md-4">
    <table class="table">
        <tr *ngFor="#bookmark of bookmarks" (click)="onSelect(bookmark)" [class.text-danger]="selectedBookmark === bookmark">
            <td>{{bookmark.title}}</td>
        </tr>
    </table>
    </div>
    <bookmark [bookmark]="selectedBookmark" class="col-md-8"></bookmark>
    `,
    directives: [BookmarkComponent],
    providers: [BookmarkService]
})
export class BookmarkListComponent implements OnInit {

    public bookmarks:Bookmark[];
    public selectedBookmark = {};

    constructor(private _bookmarkService:BookmarkService) {
    }

    onSelect(bookmark) {
        this.selectedBookmark = bookmark;
    }

    getBookmarks() {
        this._bookmarkService.getBookmarks().then((bookmarks:Bookmark[]) => this.bookmarks = bookmarks);
    }

    ngOnInit():any {
        this.getBookmarks();
    }
}