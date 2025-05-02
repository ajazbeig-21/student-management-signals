import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsSignal = signal(this.getStudentsFromLocalStorage()); // Initialize Signal with the students from localStorage

  constructor() {}

  // Method to save a new student
  saveStudent(student: any) {
    const currentStudents = this.getStudentsFromLocalStorage();
    currentStudents.push(student); // Add the new student to the list
    localStorage.setItem('students', JSON.stringify(currentStudents)); // Save updated students list
    this.studentsSignal.set(currentStudents); // Update the Signal with the new list of students
  }

  // Get the current students signal
  getStudentsSignal() {
    return this.studentsSignal;
  }

  // Retrieve the students from localStorage
  private getStudentsFromLocalStorage(): any[] {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
  }

   // Method to delete a student by their index
   deleteStudent(index: number) {
    const currentStudents = this.getStudentsFromLocalStorage();
    currentStudents.splice(index, 1); // Remove the student at the specified index
    localStorage.setItem('students', JSON.stringify(currentStudents)); // Save updated students list
    this.studentsSignal.set(currentStudents); // Update the Signal with the new list of students
  }

  updateStudent(updatedStudent: any, index: number) {
    const currentStudents = this.getStudentsFromLocalStorage();
    currentStudents[index] = updatedStudent;
    localStorage.setItem('students', JSON.stringify(currentStudents));
    this.studentsSignal.set(currentStudents);
  }
}
