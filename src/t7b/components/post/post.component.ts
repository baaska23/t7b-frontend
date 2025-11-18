import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-post',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {
    showComment: boolean = false;

    @Input() author: string;
    @Input() createdAgo: string;
    @Input() post: string;
    @Input() likeCount: number;
    @Input() dislikeCount: number;
    @Input() comments: Comment[] = []

    handleClick() {
        this.showComment = !this.showComment
    }
}