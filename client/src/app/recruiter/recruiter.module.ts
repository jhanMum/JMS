import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[RouterModule, FormsModule]
})
export class RecruiterModule { }
