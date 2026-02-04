import { Component, inject, OnInit } from '@angular/core';
import { Dataservice } from '../../services/dataservice';
import { Post } from '../../data';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit{
  allDataRaw: Post[] = [];
  AllDataList: Post[] = [];
  categories: string[] = ['الكل', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];

  private readonly dataservice = inject(Dataservice);

   ngOnInit(): void {
    this.allDataRaw = this.dataservice.getPosts()
    this.AllDataList = this.allDataRaw;
  }

  currentCat: string = 'الكل';

  setActive(category: string): void {

    this.currentCat = category;

    if (category === 'الكل') {
      this.AllDataList = this.allDataRaw;
    } else {
      this.AllDataList = this.allDataRaw.filter(item => item.category === category);
    }
  }
  // ??***********
  isGridView: boolean = true;
  
}
