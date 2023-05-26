import { Injectable } from '@angular/core';
import { Students } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  students: Students[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@thejitu.com',
    },
    {
      id: 2,
      name: 'Mark',
      email: 'mark@thejitu.com',
    },
  ];

  getStudents(): Students[] {
    return this.students;
  }

  addStudents(newStudent: Students) {
    this.students.push(newStudent);
  }
}
