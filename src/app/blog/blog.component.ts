import { Component, OnInit } from '@angular/core';
import {IPost} from '../ipost';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postList: IPost[];
  postForm: FormGroup;
  constructor(
    private postService: PostService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.minLength(2)]]
    });
    this.postService.getPosts().subscribe(next => (this.postList = next), error => (this.postList = []) );
  }
  onSubmit() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.postService.addPost(value).subscribe(() => {
        this.postService.getPosts().subscribe(next => (this.postList = next), error => (this.postList = []) );
        this.postForm.reset({
          name: '',
          content: ''
        });
      }, error => console.log(error) );
    }
  }
  delete(i) {
    const post = this.postList[i];
    this.postService.delete(post.id).subscribe(() =>
    this.postList = this.postList.filter(t => t.id !== post.id)
    );
  }
}
