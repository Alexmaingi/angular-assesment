import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentService } from '../services/student.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}
  // constructor(private studentService: StudentService) {}
  form: FormGroup = this.fb.group({
    personalDetails: this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    }),
  });

  ngOnInit(): void {
    // this.form=
  }

  checkEmail(control: FormControl): Promise<{ [x: string]: boolean } | null> {
    const promise = new Promise<{ [x: string]: boolean } | null>(
      (resolve, reject) => {
        if (control.value === 'test@gmail.com') {
          setTimeout(() => {
            resolve({ emailUnallowed: true });
          }, 1500);
        } else {
          resolve(null);
        }
      }
    );
    return promise;
  }

  onSubmit() {
    console.log(this.form);
  }
  // constructor(private studentService: StudentService) {}

  addStudent(name: string, email: string) {
    this.studentService.addStudents({
      id: Math.floor(Math.random() * 100),
      name,
      email,
    });
  }
}
