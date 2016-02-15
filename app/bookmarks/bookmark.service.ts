import {Injectable} from "angular2/core";
import {BOOKMARKS} from "./mock-bookmark";
@Injectable()
export class BookmarkService {
    getBookmarks() {
        return Promise.resolve(BOOKMARKS);
    }
}