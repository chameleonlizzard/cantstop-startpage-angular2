import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Bookmark} from "./bookmark";
import {RouteParams} from "angular2/router";
@Component({
    selector: 'bookmark',
    template: `
    <div class="">
        <button class="btn btn-default btn-raised pull-right" (click)="onCreateNew()" data-dismiss="modal"><i class="glyphicon glyphicon-copy"></i> Copy Bookmark</button>
    </div>
    <form class="form-horizontal">
        <fieldset>
            <legend>Bookmark Aanpassen</legend>
            <div class="form-group">
                <label for="inputTitle" class="col-md-3 control-label">Nummer</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" id="inputTitle" placeholder="Title" disabled [(ngModel)]="bookmark.favId">
                </div>
            </div>
            <div class="form-group">
                <label for="inputTitle" class="col-md-3 control-label">Title</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" id="inputTitle" placeholder="Title" [(ngModel)]="bookmark.title">
                </div>
            </div>
            <div class="form-group">
                <label for="inputTitle" class="col-md-3 control-label">Link</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" id="inputTitle" placeholder="Title" [(ngModel)]="bookmark.url">
                </div>
            </div>
            <div class="form-group">
                <label for="inputTitle" class="col-md-3 control-label">Gebruiker</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" id="inputTitle" placeholder="Title" [(ngModel)]="bookmark.userId">
                </div>
            </div>
        </fieldset>
    </form>

    `,
    inputs: ["bookmark"]
})
export class BookmarkComponent {
    public bookmark: Bookmark = null;

    constructor(private _router: Router) {

    }

    onCreateNew(){
        this._router.navigate(['NewBookmark', {userId: this.bookmark.userId}])
    }
}