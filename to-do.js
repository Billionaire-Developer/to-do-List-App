// todo.js

const fs = require('fs');
const readline = require('readline');

const TASKS_FILE = 'tasks.json';

// Load tasks from file
const loadTasks = () => {
  try {
    const data = fs.readFileSync(TASKS_FILE, 'utf8');
    return JSON.parse(data) || [];
  } catch (err) {
    return [];
  }
};

// Save tasks to file
const saveTasks = (tasks) => {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
};

// Add task
const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
  console.log(`Task added: ${task}`);
};

// View tasks
const viewTasks = () => {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('Tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
};

// Delete task
const deleteTask = (index) => {
  const tasks = loadTasks();
  if (index >= 0 && index < tasks.length) {
    console.log(`Task deleted: ${tasks[index]}`);
    tasks.splice(index, 1);
    saveTasks(tasks);
  } else {
    console.log('Invalid task index.');
  }
};

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainMenu = () => {
  console.log('\nTo-Do List App');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Quit');

  rl.question('Choose an option: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter a task: ', (task) => {
          addTask(task);
          mainMenu();
        });
        break;
      case '2':
        viewTasks();
        mainMenu();
        break;
      case '3':
        rl.question('Enter task index to delete: ', (index) => {
          deleteTask(parseInt(index) - 1);
          mainMenu();
        });
        break;
      case '4':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Try again.');
        mainMenu();
    }
  });
};

// Start app
mainMenu();
