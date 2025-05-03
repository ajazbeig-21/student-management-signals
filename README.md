
# Student Management using Signals in Angular 

This is end-to-end implementation of a Student Management System Using Angular v19's Signal, which Reactive way to manage state between the component.

# About Me

Hello! 👋 I'm **Ajaz Beig**, an **Angular Developer** with a passion for building responsive and high-performance web applications. I specialize in creating seamless user interfaces and delivering engaging experiences with Angular, TypeScript, and modern web technologies.

With over **3.6 Years** of experience in the field, I have developed a deep understanding of frontend development, with a particular focus on **Angular**, **RxJS**, **NgRx**, and **TypeScript**. My goal is to leverage my skills to create intuitive, scalable, and efficient solutions that meet business needs and provide a smooth user experience.

### Skills & Technologies:
- **Frontend**: Angular, HTML5, CSS3, SCSS, JavaScript, TypeScript
- **State Management**: NgRx, RxJS, Signals
- **UI/UX**: Responsive Design, Angular Material, Bootstrap
- **Version Control**: Git, GitHub
- **Tools**: Webpack, Jasmine, Karma, ESLint
- **CI/CD**: Jenkins, GitHub Actions

### Connect with Me:
- [LinkedIn](https://www.linkedin.com/in/ajaz-beig-6b0402193/)
- [GitHub](https://github.com/ajazbeig-21/)
- [Medium](https://medium.com/@ajaz-beig)  
- [YouTube](https://www.youtube.com/@TechWithAjaz)  

Feel free to explore my repositories, blog posts, and videos. I regularly share tutorials, coding tips, and insights on Angular development, so stay tuned!

## 🛠 Prerequisites
Node v20+, Angular CLI v19.x.x, Code Editor (VS Code)
## How to Run this Project
#### Hope you have done with prerequisites.
After cloning this repo we just need to head over to the project directory and fire below commands.

```bash
  git clone https://github.com/ajazbeig-21/student-management-signals.git
  cd student-management-signals
  npm install 
  ng serve -o // this will open web app on port 4200
```
# Student Management System

This is a **Student Management System** built using **Angular** and **Angular Material**. The application allows you to manage student data with features like adding, editing, and deleting student records. It uses **Signals** for state management and **localStorage** for persistent data storage.

## Features:
- **Add Student**: A form to input student data (name, dob, gender, address, email, mobile).
- **View Students**: A table displays all the students' information.
- **Edit Student**: Open an Angular Material dialog to edit student data.
- **Delete Student**: Remove a student record from the list.
- **State Management**: Uses Angular **Signals** for efficient and reactive data handling.
- **Data Persistence**: Student data is stored in **localStorage**, ensuring data is retained even after page refreshes.

## How It Works:

1. **Student Form**:  
   - Users can add new student records by entering details into a form (name, DOB, gender, address, email, and mobile).
   - The form uses **Angular Material** for styling and user interaction.
   
2. **Student Table**:  
   - Once students are added, they are displayed in a **Material Table**.
   - The table shows the student name, date of birth, gender, address, email, and mobile number.
   
3. **Edit Student**:  
   - Each student has an "Edit" button. When clicked, an **Angular Material Dialog** opens, pre-filled with the student's current data.
   - Users can update the data and save it back.

4. **Delete Student**:  
   - Each student row has a "Delete" button. When clicked, the student is removed from the list.

5. **State Management**:  
   - The app uses **Signals** for state management, allowing efficient updates to the list of students when they are added, edited, or deleted.

6. **Data Persistence**:  
   - All student data is saved in **localStorage**, so it persists even if the page is refreshed or the app is closed and reopened.


## Authors

- [@ajazbeig](https://github.com/ajazbeig-21)

