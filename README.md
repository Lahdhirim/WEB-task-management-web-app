# AIFlow – AI Task Management Frontend

NeuroFlow is a frontend-only task management application designed to manage tasks across AI project team roles (e.g., Product Owner, Data Scientist, MLOps...). The interface is built using **Angular**, and all data is managed using the **browser's Local Storage**.

![Demo](assets/demo.gif)

## Project Scope

This project is **frontend-only**. It simulates task creation, deletion, and filtering by user roles, using in-memory and Local Storage–based state. It’s ideal for demos, prototypes, or as a starting point for a complete full-stack application.

## Features

- Role-based task management (e.g., PO, Manager, Data Scientist, etc.)
- Add, delete, and view tasks by user
- Responsive UI with modal forms for new tasks
- Persistence through browser Local Storage
- Clean architecture using Angular standalone components

## Technologies

- Angular
- TypeScript
- Local Storage
- HTML/CSS

## Integration Ready

While this project works fully in the frontend, it's structured to easily integrate with a backend. You can:

- Replace [`tasks.service.ts`](src/app/tasks/tasks.service.ts) logic with HTTP calls to a real API.
- Use a backend database instead of Local Storage.
- Authenticate users and assign roles dynamically.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Lahdhirim/WEB_task_manag_web_app.git
    cd WEB_task_manag_web_app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application in development mode:
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200` to see the application.