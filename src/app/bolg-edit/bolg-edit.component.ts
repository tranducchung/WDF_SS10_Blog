import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IPost} from '../ipost';
import {PostService} from '../service/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bolg-edit',
  templateUrl: './bolg-edit.component.html',
  styleUrls: ['./bolg-edit.component.scss']
})
export class BolgEditComponent implements OnInit {
  postForm: FormGroup;
  post: IPost;

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.minLength(2)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(next =>
      {
        this.post = next;
        this.postForm.patchValue(this.post);
      }, error => {
      console.log(error);
      this.post = null;
      }
    );
  }

  onSubmit() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      const data = {
        ...this.post,
        ...value
      };
      this.postService.update(data).subscribe(next => {
          this.router.navigate(['/blog']);
        },
        error => console.log(error)
      );
    }
  }
}
