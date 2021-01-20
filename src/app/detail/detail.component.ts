import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoiveServiceService } from '../services/moive-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  moiveDetails: any = [];
  constructor(private activatedRoute: ActivatedRoute, 
      private moiveService: MoiveServiceService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.moiveDetails = this.moiveService.getMoiveDetails(params['name'])[0];
      })    
  }

  deleteMoive(moiveName: string) {
    alert("Do you want delete this moive ?");
    this.moiveService.deleteMoive(moiveName)
      .subscribe((res) => {
        console.log(res);
      })
  }

}
