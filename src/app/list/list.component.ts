import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Observable } from 'rxjs';
import { CatService } from '../cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categories : Observable<Category[]>;

  constructor(private catService : CatService, private router : Router) { }
  reloadData() {
    this.categories = this.catService.getcatList();
  }
  ngOnInit() {
    this.reloadData();
  }
  deleteCat(id: number) {
    this.catService.delCategory(id)
      .subscribe(
        data => {
          console.log(data);
          console.log('success delete');
          this.reloadData();
        },
        error => console.log(error));
  }

  categoryDetails(id: number){
    this.router.navigate(['details', id]);
}

categoryEdit(id: number){
  this.router.navigate(['edit', id]);
}
}
