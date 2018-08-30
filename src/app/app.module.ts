import { EmailServiceService } from './email-service.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipeComponent } from './custompipe/custompipe.component';

@NgModule({
  // here we are adding all the component that we want to use in this module
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    PipesComponent,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // here we are adding the app dependecies
  providers: [
    CoursesService,
    EmailServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
