import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CatService } from '../cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  category : Category = new Category();
  submitted = false;
    constructor(private catService : CatService, private router : Router) { }
  
    ngOnInit() {
    }
    newcategory(): void {
      this.submitted = false;
      this.category = new Category();
    }
  
    save() {
      this.catService.createCategory(this.category)
        .subscribe(data => console.log(data), error => console.log(error));
        console.log(this.category.name);
        console.log(this.category.note);
      this.category = new Category();
      this.gotoList();
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/']);
  }
}
