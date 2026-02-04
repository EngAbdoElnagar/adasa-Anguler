import { Component, inject, OnInit } from '@angular/core';
import { Dataservice } from '../../services/dataservice';
import { Category } from '../../data';

@Component({
  selector: 'app-sechome-categories',
  imports: [],
  templateUrl: './sechome-categories.html',
  styleUrl: './sechome-categories.css',
})
export class SechomeCategories implements OnInit {
  categoriList: Category[]= []

  private readonly dataservice = inject(Dataservice);
  ngOnInit(): void{

    this.categoriList = this.dataservice.getCategories();

  }
}
