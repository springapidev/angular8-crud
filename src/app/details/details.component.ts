import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from '../cat.service';
import { Category } from '../category';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: number;
  category: Category;

  constructor(private route: ActivatedRoute,private router: Router,
    private catService: CatService) { }

  ngOnInit() {
    this.category = new Category();

    this.id = this.route.snapshot.params['id'];
    
    this.catService.getCategory(this.id)
      .subscribe(data => {
        console.log(data)
        this.category = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/']);
}
}
