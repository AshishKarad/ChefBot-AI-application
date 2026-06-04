# 🍽️ ChefBot AI

ChefBot AI is a Flask-based Cloud Kitchen Assistant that helps users explore food categories, receive meal recommendations, and interact with a modern chatbot-style interface.

---

## 🚀 Features

* Interactive chatbot-style UI
* Modern responsive design
* Food category recommendations
* Flask backend
* Dockerized application
* Ready for AWS EC2 deployment
* Future enhancements:

  * Email order confirmations
  * MySQL database integration
  * OpenAI-powered recommendations
  * CI/CD with GitHub Actions

---

## 🛠️ Tech Stack

* Python
* Flask
* HTML5
* CSS3
* JavaScript
* Docker
* GitHub

---

## 📂 Project Structure

```text
chefbot-ai/
│
├── app.py
├── requirements.txt
├── Dockerfile
│
├── static/
│   ├── style.css
│   ├── app.js
│   └── chefbot.png
│
├── templates/
│   └── index.html
│
└── README.md
```

---

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/AshishKarad/chefbot-ai.git
cd chefbot-ai
```

Create virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python app.py
```

Open browser:

```text
http://localhost:5000
```

---

## 🐳 Docker Deployment

Build Docker image:

```bash
docker build -t chefbot-ai .
```

Run container:

```bash
docker run -d -p 5000:5000 --name chefbot-ai chefbot-ai
```

Access application:

```text
http://localhost:5000
```

---

## ☁️ Future Roadmap

* Gmail SMTP Integration
* Order Confirmation Emails
* MySQL Database Storage
* AI-powered Food Recommendations
* Docker Compose
* Nginx Reverse Proxy
* AWS EC2 Deployment
* GitHub Actions CI/CD Pipeline

---

## 👨‍💻 Author

**Ashish Karad**

DevOps Engineer | Linux | Docker | Kubernetes | AWS | Python

GitHub: https://github.com/AshishKarad

Docker Hub: https://hub.docker.com/u/ashishkarad5566

---

⭐ If you found this project useful, consider giving it a star.
