import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsSignal = signal(this.getStudentsFromLocalStorage()); 

  constructor() {}

  saveStudent(student: any) {
    const currentStudents = this.getStudentsFromLocalStorage();
    currentStudents.push(student); 
    localStorage.setItem('students', JSON.stringify(currentStudents)); 
    this.studentsSignal.set(currentStudents);
  }

  getStudentsSignal() {
    return this.studentsSignal;
  }

  private getStudentsFromLocalStorage(): any[] {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
  }

   deleteStudent(index: number) {
    const currentStudents = this.getStudentsFromLocalStorage();
    currentStudents.splice(index, 1); 
    localStorage.setItem('students', JSON.stringify(currentStudents)); 
    this.studentsSignal.set(currentStudents); 
  }

  updateStudent(updatedStudent: any, index: number) {
    const currentStudents = this.getStudentsFromLocalStorage();
    currentStudents[index] = updatedStudent;
    localStorage.setItem('students', JSON.stringify(currentStudents));
    this.studentsSignal.set(currentStudents);
  }
}
