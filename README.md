# Interview AI

Interview AI helps candidates prepare for job interviews. Add a job description and your profile information to generate a tailored interview plan, practice answers, and download a customized resume.

## Features

- Register and log in with cookie-based authentication.
- Generate an interview report tailored to a job description and candidate profile.
- Review technical and behavioral questions, including suggested answers.
- See a profile match score, skill gaps, and a preparation roadmap.
- Practice technical or behavioral questions and receive AI feedback, including a score, strengths, and suggestions for improvement.
- Download a job-tailored resume as a PDF.

## Tech stack

- **Frontend:** React, Vite, React Router, Sass, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **AI:** Google Gemini API

## Project structure

```text
interview-ai-yt/
├── Backend/     # Express API, MongoDB models, authentication, and AI services
└── Frontend/    # React application
```

## Prerequisites

- Node.js and npm
- A MongoDB database (local or hosted)
- A Google Gemini API key

## Getting started

### 1. Configure the backend

In a terminal, go to the backend directory and install dependencies:

```bash
cd Backend
npm install
```

Create `Backend/.env` with the following variables:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/interview-ai
JWT_SECRET=replace-with-a-long-random-secret
GOOGLE_GENAI_API_KEY=your-google-genai-api-key
```

For MongoDB Atlas, use your Atlas connection string for `MONGODB_URI`. Keep `.env` private; never commit API keys, database credentials, or JWT secrets.

Start the backend:

```bash
npm start
```

The API listens on `http://localhost:3000`.

### 2. Start the frontend

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Typical workflow

1. Register or log in.
2. Enter the job description and provide your profile information.
3. Generate an interview plan.
4. Review the questions, match score, skill gaps, and preparation roadmap.
5. Open **Practice Mode**, choose a question type, write an answer, and request AI feedback.
6. Download the tailored resume PDF when ready.

## API overview

Protected interview endpoints require an authenticated session.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Register an account |
| `POST` | `/api/auth/login` | Log in |
| `GET` | `/api/auth/logout` | Log out |
| `GET` | `/api/auth/get-me` | Get the current user |
| `POST` | `/api/interview/` | Generate an interview report |
| `GET` | `/api/interview/` | List the current user's reports |
| `GET` | `/api/interview/report/:interviewId` | Fetch a report |
| `POST` | `/api/interview/report/:interviewId/practice` | Get feedback on a practice answer |
| `POST` | `/api/interview/resume/pdf/:interviewReportId` | Generate a tailored resume PDF |

Practice feedback request body:

```json
{
  "questionType": "technical",
  "questionIndex": 0,
  "userAnswer": "Your answer to the interview question"
}
```

`questionType` must be `technical` or `behavioral`. The answer is limited to 5,000 characters.

## Development commands

Run these from the relevant project directory:

```bash
# Backend
npm start
npm run dev

# Frontend
npm run dev
npm run build
npm run lint
npm run preview
```
