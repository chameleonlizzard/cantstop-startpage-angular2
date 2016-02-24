import {Injectable} from "angular2/core";
import {Bookmark} from "./bookmark";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";

@Injectable()
export class BookmarkService {
    constructor(private _http:Http) {

    }

    getBookmarks() {
        return this._http.get('http://igoogle.cantstop.nl/api/bookmarks')
            .map(res => res.json());
    }

    addBookmark(bookmark:Bookmark) {
        var bookmarkJson = JSON.stringify({title: bookmark.title, url: bookmark.url});
        var params = bookmarkJson;
        var headers = new Headers;
        headers.append('Content-Type', 'application/x-www-form-urlencode');

        return this._http.post('http://igoogle.cantstop.nl/api/bookmarks', params, {headers: headers})
            .map(res => res.json());
    }

    removeBookmark(bookmark_id) {
        var params = JSON.stringify({BookmarkId: bookmark_id});

        return this._http.delete('http://igoogle.cantstop.nl/api/bookmark-delete', params).map(res => res.json());
    }
}