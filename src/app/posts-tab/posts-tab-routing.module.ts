import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsTabComponent } from './posts-tab.component';

const routes: Routes = [{ path: '', component: PostsTabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
