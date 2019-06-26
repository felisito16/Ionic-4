import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsData: any;

  constructor( private dataService: DataService) { }

  ngOnInit() {


    this.postsData = this.dataService.getDataPosts();

    /* .subscribe( (posts: any[]) => {
      this.postsData = posts;
    }); */

  }

}
