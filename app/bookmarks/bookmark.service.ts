import {Injectable} from "angular2/core";
import {BOOKMARKS} from "./mock-bookmark";
import {Bookmark} from "./bookmark";

@Injectable()
export class BookmarkService {
    getBookmarks() {
        return Promise.resolve(BOOKMARKS);
    }

    insertBookmark(bookmark: Bookmark) {
        Promise.resolve(BOOKMARKS).then((bookmarks: Bookmark[]) => bookmarks.push(bookmark));
    }
}