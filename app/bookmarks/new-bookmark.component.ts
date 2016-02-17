import {Component} from "angular2/core";
import {BookmarkService} from "./bookmark.service";
import {Bookmark} from "./bookmark";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
@Component({
    selector: 'bookmark',
    template: `
        <div class="col-md-6 col-md-push-6">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">Nieuwe Bookmark toevoegen!</h3>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal" #newBookmarkForm="ngForm" (ngSubmit)="onSubmit()">
                        <fieldset>
                            <legend>Bookmark Aanpassen</legend>
                            <div class="form-group">
                                <label for="inputFavId" class="col-md-3 control-label">Nummer</label>
                                <div class="col-md-9">
                                    <input type="number" class="form-control" id="inputFavId" ngControl="favId" [(ngModel)]="newBookmark.favId" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputTitle" class="col-md-3 control-label">Title</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" id="inputTitle" ngControl="title" [(ngModel)]="newBookmark.title" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputUrl" class="col-md-3 control-label">Link</label>
                                <div class="col-md-9">
                                    <input type="url" class="form-control" id="inputUrl" ngControl="url" [(ngModel)]="newBookmark.url" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputUserId" class="col-md-3 control-label">Gebruiker</label>
                                <div class="col-md-9">
                                    <input type="number" class="form-control" id="inputUserId" ngControl="userId" [(ngModel)]="newBookmark.userId" required>
                                </div>
                            </div>
                            <div class="form-group">
                              <div class="col-md-9 col-md-offset-3">
                                <button type="button" class="btn btn-default">Annuleren</button>
                                <button type="submit" class="btn btn-primary">Toevoegen</button>
                              </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    `,
    providers: [BookmarkService]
})
export class NewBookmarkComponent implements OnInit{

    newBookmark: Bookmark;

    constructor(
        private _bookmarkService: BookmarkService,
        private _router: Router,
        private _routeParams: RouteParams) {

    }

    onSubmit(){
        this._bookmarkService.insertBookmark(this.newBookmark);
        this._router.navigate(['Bookmarks']);
    }

    ngOnInit():any {
        this.newBookmark = { favId: "", title:"", url: "", userId: "" };
    }
}