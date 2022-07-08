# Dwitter Server

Backend application for Twitter like post application - Dwitter.

## Tech Stack

-   NodeJS / Express
-   MongoDB / MySQL
-   SocketIO
-   Jest

## Design Pattern

### MVC Pattern

MVC pattern devides the project into three parts: Model, Controller and View

-   Model: model manages the data which application uses
-   View: view manages the UI part of the application (which will be developed in React)
-   Controller: controller manages the main logic which application runs on, and connect view with model

Dwitter server is composed with three parts: Routes, Controller, and Data.

-   Routes: work as the entry point of the request from client. Request will be distributed to controllers accordingly.
-   Controllers: controller will work as the controller in MVC design pattern. They maintain core logic to manipulate the data and return result back to the client.
-   Model: model is the data warehouse for the data used in the application.
