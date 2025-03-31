# To-Do List App (Command-Line)

A simple command-line To-Do List application built with Node.js that allows users to:

- Add tasks
- View tasks
- Delete tasks

## Features
✅ Persistent task storage using JSON files  
✅ Simple and intuitive command-line interface  
✅ Error handling for file operations  
✅ Uses Node.js built-in modules (no external dependencies required)

## Prerequisites
Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later recommended)

## Installation
1. Clone this repository or download `todo.js` manually:
   ```sh
   git clone https://github.com/yourusername/todo-cli-app.git
   cd todo-cli-app
   ```
2. (Optional) If you downloaded the file manually, place `todo.js` in your desired directory.

## Usage
Run the application using:
```sh
node todo.js
```

### Menu Options
1️⃣ **Add Task** – Enter a task to add it to your list.  
2️⃣ **View Tasks** – Displays all saved tasks.  
3️⃣ **Delete Task** – Choose a task index to remove it from the list.  
4️⃣ **Quit** – Exit the application.  

## Example Run
```
To-Do List App
1. Add task
2. View tasks
3. Delete task
4. Quit
Choose an option: 1
Enter a task: Buy groceries
Task added: Buy groceries

Choose an option: 2
Tasks:
1. Buy groceries

Choose an option: 3
Enter task index to delete: 1
Task deleted: Buy groceries
```

## File Storage
The app saves tasks to a `tasks.json` file in the same directory, ensuring persistence across sessions.

## Possible Improvements
🔹 Add timestamps for each task  
🔹 Implement categories or priority levels  
🔹 Add a GUI for a better user experience  

## License
This project is open-source and available under the MIT License.

---
Happy coding! 🚀

