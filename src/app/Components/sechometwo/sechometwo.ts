import { Component, inject, OnInit } from '@angular/core';
import { Dataservice } from '../../services/dataservice';
import { Post } from '../../data';

@Component({
  selector: 'app-sechometwo',
  imports: [],
  templateUrl: './sechometwo.html',
  styleUrl: './sechometwo.css',
})
export class Sechometwo implements OnInit {
  featuredArticles: Post[] = [];

  private readonly dataservice = inject(Dataservice);
  ngOnInit(): void {

    this.featuredArticles = this.dataservice.getFeaturedPosts();
    
    console.log(this.featuredArticles);
  }
}
