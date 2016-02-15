import {Component} from "angular2/core";
@Component({
    selector: 'bookmark',
    template: `
    <input [(ngModel)]="bookmark.title" type="text">
    <table class="table table-bordered">
        <tr>
            <td>Fav ID: {{bookmark.favId}}</td>
        </tr>
        <tr>
            <td>Url: {{bookmark.url}}</td>
        </tr>
        <tr>
            <td>User ID: {{bookmark.userId}}</td>
        </tr>
    </table>
    `,
    inputs: ["bookmark"]
})
export class BookmarkComponent {
    public bookmark = {};
}