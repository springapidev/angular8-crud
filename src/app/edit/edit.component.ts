import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;
  category: Category;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private catService: CatService) { }

  ngOnInit() {
   // this.category = new Category();

    this.id = this.route.snapshot.params['id'];
    
    this.catService.getCategory(this.id)
      .subscribe(data => {
        console.log(data)
        this.category = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['catlist']);
}



update() {
  this.catService.createCategory(this.category)
    .subscribe(data => console.log(data), error => console.log(error));
    console.log(this.category.name);
    console.log(this.category.note);
  this.category = new Category();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.update();    
}

gotoList() {
  this.router.navigate(['/']);
}
}
