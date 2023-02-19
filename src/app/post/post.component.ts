import {Component, OnInit} from '@angular/core';
import {Post} from "../dtos/Post";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  isComponentVisible: boolean;

  constructor(private postService: PostService) {
    this.isComponentVisible = false;
  }

  ngOnInit() {
    this.getLocations();
  }

  private getLocations() {
    this.postService.getPosts()
      .subscribe(response => {
        this.isComponentVisible = response.length > 0;
        response.map((e: any) => this.posts.push(new Post(e)));
      })
  }
}
