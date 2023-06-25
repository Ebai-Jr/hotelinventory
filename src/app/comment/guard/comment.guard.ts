import { ActivatedRouteSnapshot, CanActivateFn, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from '../comment.service';
import { Injectable } from '@angular/core';
import { Comments } from '../comment';


@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<Comments[]> {

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments[]> | Promise<Comments[]> | Comments[]{
    return this.commentService.getComments();
  }

};
