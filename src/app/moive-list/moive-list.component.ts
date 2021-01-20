import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoiveServiceService } from '../services/moive-service.service';

@Component({
  selector: 'app-moive-list',
  templateUrl: './moive-list.component.html',
  styleUrls: ['./moive-list.component.css']
})
export class MoiveListComponent implements OnInit {
  moivesList: any = [];
  constructor(private moiveSerivce: MoiveServiceService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.moiveSerivce.getMovies()
      .subscribe((res) => {
        console.log(res);
        this.moivesList = res;
      })
  };

  onAddnNewMoive() {
    this.router.navigate(['/addMoive']);
  };

  getMoiveDetails(moiveDetail: any) {
    //console.log(moiveDetail);
    //let title = moiveDetail.Title;
    //this.router.navigate(['moiveDetail'], title);
  }

}
