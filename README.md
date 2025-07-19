Growthzi Web Assignment
This project contains a React Frontend and a Flask Backend with basic editable components using React-Quill rich text editor.
Key functionalities include:

Editable Hero Section title and button

Editable Error Page description and button

Backend API logging via Flask

Persistent data using localStorage (Frontend) and API call logging (Backend)

Tech Stack
Frontend: React 17, React-Quill, React Router

Backend: Flask, Flask-CORS, Render Deployment

Deployment: Frontend on Vercel, Backend on Render

Setup Instructions
Backend:
bash
Copy
Edit
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
flask run
Frontend:
bash
Copy
Edit
cd frontend
npm install
npm start
Deployment:
Backend: Deployed on Render

Frontend: Deployed on Vercel

Backend API Endpoint: https://growthzi-backend0.onrender.com/update-section

Feel free to adjust the API URL and project name if needed. Let me know if you want to add screenshots or live demo links.