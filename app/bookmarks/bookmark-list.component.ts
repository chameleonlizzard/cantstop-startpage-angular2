import {Component} from "angular2/core";
import {BookmarkComponent} from "./bookmark.component";
import {BookmarkService} from "./bookmark.service";
import {Bookmark} from "./bookmark";
import {OnInit} from "angular2/core";
@Component({
    selector: 'bookmark-list',
    template: `
    <div class="col-md-6">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">Bookmarks <i class="pull-right glyphicon glyphicon-cog" (click)="toggleTools()"></i></h3>
          </div>
          <div class="panel-body">
            <table class="table table-striped">
                <tr *ngFor="#bookmark of bookmarks">
                    <td><a href="{{bookmark.url}}">{{bookmark.title}}</a></td>
                    <td>
                        <span [class.hidden]="showTools === false">
                            <i class="glyphicon glyphicon-edit pull-right" (click)="onSelect(bookmark)" data-toggle="modal" data-target="#myModal"></i>
                        </span>
                     </td>
                </tr>
            </table>
          </div>
        </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">

        <div class="modal-body">
            <bookmark [bookmark]="selectedBookmark"></bookmark>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    `,
    directives: [BookmarkComponent],
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

    getBookmarks() {
        this._bookmarkService.getBookmarks().then((bookmarks:Bookmark[]) => this.bookmarks = bookmarks);
    }

    ngOnInit():any {
        this.getBookmarks();
    }
}