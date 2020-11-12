import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentAntModule } from './../../common/common-component-ant/common-component-ant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { LogInRoutes } from './log-in.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LogInRoutes,
    CommonComponentAntModule
  ],
  declarations: [
    LogInComponent
  ]
})
export class LogInModule { }
