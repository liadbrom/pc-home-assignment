import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: IPost | undefined
  @Output() delete = new EventEmitter<IPost>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.delete.emit(this.post);
  }
}
