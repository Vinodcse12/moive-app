import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoiveListComponent } from './moive-list/moive-list.component';
import { AddMoiveComponent } from './add-moive/add-moive.component';
import { EditMoiveComponent } from './edit-moive/edit-moive.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/moiveList', pathMatch: 'full'}, 
  { path: '', component: MoiveListComponent}, 
  { path: 'addMoive', component: AddMoiveComponent},
  { path: 'editMoive', component: EditMoiveComponent},
  { path: 'moiveDetail/:name', component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoiveListComponent,
    AddMoiveComponent,
    EditMoiveComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
