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

    get createdAgoText(): string {
        if (!this.createdAgo) return '';
        const created = new Date(this.createdAgo);
        const now = new Date();
        const diffMs = now.getTime() - created.getTime();
        const diffMin = Math.floor(diffMs / 60000);
        if (diffMin < 1) return 'just now';
        if (diffMin === 1) return '1 min ago';
        return `${diffMin} min ago`;
    }
}