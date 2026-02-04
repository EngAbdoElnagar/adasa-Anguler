import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sechometwo } from "../sechometwo/sechometwo";
import { Sechomehero } from "../sechomehero/sechomehero";
import { SechomeCategories } from "../sechome-categories/sechome-categories";
import { SechomeLatest } from "../sechome-latest/sechome-latest";

@Component({
  selector: 'app-home',
  imports: [RouterLink, Sechometwo, Sechomehero, SechomeCategories, SechomeLatest],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
