import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// this is a decorator function
@Component({
    // selector is the template for the component to show
    selector: 'courses',
    // this is the template of the component
    // here we are using data binding to assing title variable
    // template: '<h2>{{"Title: " +  title }}</h2>',

    // here we are using string interpollation
    // template: '<h2>{{ getTitle() }}</h2>',

    // here we are using ngFor directive(like foreach)
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
    `
})

// we export this class to use it in the entire project
export class CoursesComponent {
    // here we have title variable that will contain a string
    title = 'List of courses';

    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}
