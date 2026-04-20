import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)]
import { FilterPipe } from './filter-pipe'; // Import the pipe you just generated

interface Course {
  id: number;
  name: string;
  category: string;
  enrolled: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe], // Add these here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  searchText = '';
  
  courses: Course[] = [
    { id: 1, name: 'Introduction to AI', category: 'Engineering', enrolled: false },
    { id: 2, name: 'Renaissance Art', category: 'Arts', enrolled: false },
    { id: 3, name: 'Organic Chemistry', category: 'Science', enrolled: false },
    { id: 4, name: 'Data Structures', category: 'Engineering', enrolled: false },
    { id: 5, name: 'Macroeconomics', category: 'Arts', enrolled: false }
  ];

    toggleEnroll(course: Course) {
    // If the student is trying to ENROLL (moving from false to true)
    if (!course.enrolled) {
      const currentlyEnrolled = this.courses.filter(c => c.enrolled).length;
      
      if (currentlyEnrolled >= 3) {
        alert('Selection Limit Reached: You can only enroll in 3 courses maximum.');
        return; // Stop here and don't enroll
      }
    }
    
    // Otherwise, toggle normally (allows unenrolling anytime)
    course.enrolled = !course.enrolled;
  }
 // Inside your export class App { ...
get enrolledCount(): number {
  return this.courses.filter(c => c.enrolled).length;
}


}
