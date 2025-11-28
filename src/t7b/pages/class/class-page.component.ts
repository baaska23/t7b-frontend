import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CreateClassComponent } from "src/t7b/components/create-class/create-class.component";
import { CreatePostComponent } from "src/t7b/components/create-post/create-post.component";
import { BaseListComponent } from "src/t7b/core/base-list/base-list.component";
import { ClassService } from "src/t7b/services/class.service";
import { PostService } from "src/t7b/services/post.service";

@Component({
    selector: 'app-class-page',
    templateUrl: './class-page.component.html',
    styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent extends BaseListComponent implements OnInit {
    name: string;
    professor: string;
    username: string;
    professorId: number = 1;
    class: any[] = [];
    posts: any[] = [];

    // posts = [
    //     {
    //         author: 'Baasandorj Uuganbadrakh',
    //         createdAgo: '9 min ago',
    //         post: 'Adipisicing ullamco magna incididunt veniam commodo. Eiusmod nostrud mollit magna consectetur ad laboris nisi amet nostrud magna. Exercitation ea elit qui qui irure esse officia eu nulla minim nostrud adipisicing. Mollit aliqua ad aute cupidatat proident irure irure officia cupidatat est culpa amet excepteur non.',
    //         likeCount: 12,
    //         dislikeCount: 1,
    //         comments: [
    //             {
    //                 commentId: 1,
    //                 author: 'Enkhjargal Enkhbat',
    //                 createdAgo: '12 min ago',
    //                 comment: 'Esse nostrud anim aliqua culpa magna aute est.'
    //             },
    //             {
    //                 commentId: 2,
    //                 author: 'Khashgerel Dorj',
    //                 createdAgo: '15 min ago',
    //                 comment: 'Laboris anim tempor excepteur velit nostrud nulla sint aute aliqua enim ullamco labore excepteur.'
    //             }
    //         ]
    //     },
    //     {
    //         author: 'Baasandorj Uuganbadrakh',
    //         createdAgo: '9 min ago',
    //         post: 'Adipisicing ullamco magna incididunt veniam commodo. Eiusmod nostrud mollit magna consectetur ad laboris nisi amet nostrud magna. Exercitation ea elit qui qui irure esse officia eu nulla minim nostrud adipisicing. Mollit aliqua ad aute cupidatat proident irure irure officia cupidatat est culpa amet excepteur non.',
    //         likeCount: 12,
    //         dislikeCount: 1,
    //         comments: [
    //             {
    //                 commentId: 1,
    //                 author: 'Enkhjargal Enkhbat',
    //                 createdAgo: '12 min ago',
    //                 comment: 'Esse nostrud anim aliqua culpa magna aute est.'
    //             },
    //             {
    //                 commentId: 2,
    //                 author: 'Khashgerel Dorj',
    //                 createdAgo: '15 min ago',
    //                 comment: 'Laboris anim tempor excepteur velit nostrud nulla sint aute aliqua enim ullamco labore excepteur.'
    //             }
    //         ]
    //     },
    //     {
    //         author: 'Baasandorj Uuganbadrakh',
    //         createdAgo: '9 min ago',
    //         post: 'Adipisicing ullamco magna incididunt veniam commodo. Eiusmod nostrud mollit magna consectetur ad laboris nisi amet nostrud magna. Exercitation ea elit qui qui irure esse officia eu nulla minim nostrud adipisicing. Mollit aliqua ad aute cupidatat proident irure irure officia cupidatat est culpa amet excepteur non.',
    //         likeCount: 12,
    //         dislikeCount: 1,
    //         comments: [
    //             {
    //                 commentId: 1,
    //                 author: 'Enkhjargal Enkhbat',
    //                 createdAgo: '12 min ago',
    //                 comment: 'Esse nostrud anim aliqua culpa magna aute est.'
    //             },
    //             {
    //                 commentId: 2,
    //                 author: 'Khashgerel Dorj',
    //                 createdAgo: '15 min ago',
    //                 comment: 'Laboris anim tempor excepteur velit nostrud nulla sint aute aliqua enim ullamco labore excepteur.'
    //             }
    //         ]
    //     }
    // ]
     
    constructor(
        injector: Injector,
        private classService: ClassService,
        private postService: PostService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super(injector, classService)
    }

    onPost() {
        this._dialogRef = this._dialogService.open(CreatePostComponent, {
            width: '25vw',
            height: '35vw'
        })
        this._dialogRef.onClose.subscribe((v: string) => {});
    }

    onCreate() {
        this._dialogRef = this._dialogService.open(CreateClassComponent, {
            width: '25vw',
            height: '35vw'
        })
        this._dialogRef.onClose.subscribe((v: string) => {});
    }
    
    ngOnInit(): void {
    const classId = this.route.snapshot.paramMap.get('classId');
    if (classId) {
        this.classService.getById(+classId).subscribe((data: any) => {
            this.class = data;
            this.name = data.className;
            this.professorId = data.professorId || '1 static';
            console.log('Loaded class:', data);
        }, error => {
            console.error('Error loading class:', error);
        });

        this.postService.getByClassId(+classId).subscribe((data: any) => {
            this.posts = data;
            console.log("Loaded posts:", data);
        })
    }
}
}