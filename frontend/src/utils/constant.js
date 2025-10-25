// constant.js

// Detect environment (Vite provides this automatically)
const isProduction = import.meta.env.MODE === "production";

// Backend base URL — use localhost in dev, render URL in production
export const BASE_URL = isProduction
  ? "https://jobportal-yt-main-3.onrender.com"
  : "http://localhost:8000";

// API endpoints
export const USER_API_END_POINT = `${BASE_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${BASE_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${BASE_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${BASE_URL}/api/v1/company`;
