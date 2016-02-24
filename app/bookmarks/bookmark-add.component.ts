import {Component} from "angular2/core";
import {BookmarkService} from "./bookmark.service";
import {Bookmark} from "./bookmark";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import "rxjs/add/operator/map";
import {ElementRef} from "angular2/core";

declare var jQuery:any;


@Component({
    selector: 'bookmark-add',
    templateUrl: ["app/bookmarks/bookmark-add.html"],
    providers: [BookmarkService]
})
export class BookmarkAddComponent implements OnInit {

    bookmarkAddForm:ControlGroup;
    bookmark:string;

    constructor(private _bookmarkService:BookmarkService,
                private _formBuilder:FormBuilder,
                private _elRef:ElementRef,
                private _route:Router) {

    }

    onSubmit(bookmarkValue) {
        this._bookmarkService.addBookmark(bookmarkValue).subscribe(
            bookmark => this.bookmark = JSON.stringify(bookmark),
            error => alert(error),
            () => (this.bookmarkAdded())
        );
        this._route.navigate(['Bookmarks']);
    }

    ngOnInit():any {
        this.bookmarkAddForm = this._formBuilder.group({
            title: ['', Validators.required],
            url: ['', Validators.required]
        });
    }

    bookmarkAdded() {
        jQuery(this._elRef.nativeElement).find('#bookmarkAdd')[0].reset();
        jQuery(this._elRef.nativeElement).find('#bookmarkAddModal').modal('hide');
    }
}