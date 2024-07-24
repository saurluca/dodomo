# Dodomo To-Do Application

Dodomo is a simple and intuitive to-do application designed to help you manage your tasks efficiently. It features a robust backend built with Django,
a dynamic frontend powered by Nuxt.js, and a PostgreSQL database for reliable data storage. Dodomo is designed to be easily hosted on your own server.


## Technologies Used

- **Backend:** Django
- **Frontend:** React
- **Database:** SQLite3
- **Hosting:** Custom server
- 
- **Other Tools:** Ruff
- **Development Tools:** Git, GitHub, Pycharm

## Installation

### Prerequisites

- Python 3.12
- Node.js and npm


### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/saurluca/dodomo.git
    cd dodomo/backend
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate
    ```

3. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

5. Apply migrations:
    ```sh
    python manage.py migrate
    ```

6. Run the development server:
    ```sh
    python manage.py runserver
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Run the development server:
    ```sh
    npm run dev
    ```

## Usage

- Access the application at `http://localhost:8000` for the backend and `http://localhost:3000` for the frontend.
- Start creating, updating, and organizing your tasks.

## Contributing

We welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for using Dodomo! We hope it helps you stay organized and productive.

Build the React app:

sh
Copy code
npm run build
Connect to the Hetzner server:

sh
Copy code
ssh username@your_hetzner_ip
Upload the build files:

sh
Copy code
scp -r build/* username@your_hetzner_ip:/www/domainname
Restart the web server (if necessary):

sh
Copy code
sudo systemctl restart nginx # or your specific web server

