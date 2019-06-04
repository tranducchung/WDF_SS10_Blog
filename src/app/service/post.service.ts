import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'http://localhost:8080/api/blogs/';
  constructor(private http: HttpClient) { }
  getPosts(): Observable<IPost[]> {
      return this.http.get<IPost[]>(this.API_URL);
  }
  addPost(post: Partial<IPost>): Observable<IPost> {
    return this.http.post<IPost>(this.API_URL, post);
  }
  delete(id: number): Observable<IPost> {
    return this.http.delete<IPost>(`${this.API_URL}/${id}`);
  }
  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL}/${id}`);
  }
  update(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(`${this.API_URL}/${post.id}`, post);
  }
}
