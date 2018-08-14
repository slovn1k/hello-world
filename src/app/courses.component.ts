import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// this is a decorator function
@Component({
    // selector is the template for the component to show
    selector: 'app-courses',
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
        <!-- here we are using property binding for src of the image -->
        <img [src]="imgUrl" style="width: 300px; height: 300px;">
        <table border="1">
            <tr>
                <td>Test</td>
                <td>Test</td>
            </tr>
            <tr>
            <!-- here we are binding colspan attribute -->
                <td [attr.colspan]="colSpan"> Hello people</td>
            </tr>
        </table><br>
        <!-- here we are binding bootstrap class in dependency of the value of the variable -->
        <!-- here we are binding style in dependency of the value of the variable -->
        <button class="btn btn-primary" [class.active]="isActive" [style.font-weight]="isActive ? 'bold':''" (click)="onSave($event)">
            Save
        </button><br/><br/>
        <!-- here we are binding keyup event -->
        <input class="form-control" (keyup.enter)="onKeyPress($event)"/>
    `
})

// we export this class to use it in the entire project
export class CoursesComponent {
    // here we have title variable that will contain a string
    title = 'List of courses';
    imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
    colSpan = 2;
    isActive = true;

    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        console.log('Binded click event', $event);
    }

    onKeyPress($event) {
        console.log($event.target.value);
    }
}
