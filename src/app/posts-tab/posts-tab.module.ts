import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-tab-routing.module';
import { PostsTabComponent } from './posts-tab.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    PostsTabComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostsTabModule { }
