import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Students } from '../interface';
import { StudentService } from '../services/student.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-student',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css'],
})
export class DisplayStudentComponent {
  students!: Students[];
  showBalance: boolean = false;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}
