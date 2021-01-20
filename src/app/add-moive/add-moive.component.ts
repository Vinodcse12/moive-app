import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoiveServiceService } from '../services/moive-service.service';

@Component({
  selector: 'app-add-moive',
  templateUrl: './add-moive.component.html',
  styleUrls: ['./add-moive.component.css']
})
export class AddMoiveComponent implements OnInit {
  moiveForm: FormGroup;
  constructor(private moiveService: MoiveServiceService, private router: Router) { }

  ngOnInit() {
    this.moiveForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'us_gross': new FormControl('', Validators.required),
      'worldwide_gross': new FormControl('', Validators.required),
      'us_dvd_sales': new FormControl('', Validators.required),
      'production_budget': new FormControl('', Validators.required),
      'release_date': new FormControl('', Validators.required),
      'mpaa_rating': new FormControl('', Validators.required),
      'running_time_min': new FormControl('', Validators.required),
      'distributor': new FormControl('', Validators.required),
      'source': new FormControl('', Validators.required),
      'major_genre': new FormControl('', Validators.required),
      'creative_type': new FormControl('', Validators.required),
      'director': new FormControl('', Validators.required),
      'rotten_tomatoes_rating': new FormControl('', Validators.required),
      'imdb': new FormControl('', Validators.required),
      'imbd_Votes': new FormControl('', Validators.required),
      'imbd_Rating': new FormControl('', Validators.required)
    })
  }

  onAddNewMoive() {
    var moiveData = this.moiveForm.value;
    this.moiveService.addNewMoive(moiveData)
      .subscribe((res) => {
        this.router.navigate(['/']);
      })    
  }

}
