import { Dataservice } from './../../services/dataservice';
import { Component, inject, OnInit } from '@angular/core';
// import { Dataservice } from '../../services/dataservice';
import { Post } from '../../data';


@Component({
  selector: 'app-sechome-latest',
  imports: [],
  templateUrl: './sechome-latest.html',
  styleUrl: './sechome-latest.css',
})

export class SechomeLatest implements OnInit {

  private readonly dataservice = inject(Dataservice)

  latestPostsList: Post[] = [];

  ngOnInit(): void {
    this.latestPostsList = this.dataservice.getLatestPosts()
  }

}



