import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Blog } from './Components/blog/blog';
import { About } from './Components/about/about';
import { Notfound } from './Components/notfound/notfound';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "blog", component: Blog },
  { path: "about", component: About },
  { path :"**",component : Notfound}
];
