import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import QuizDashboard from "./pages/QuizDashboard";
import TopicQuizPage from "./pages/TopicQuizPage";
import CodingPractice from "./pages/CodingPractice";
import CategoryPage from "./pages/CategoryPage";
import ProblemPage from "./pages/ProblemPage";
import Leaderboard from "./pages/Leaderboard";
import MentorChat from "./pages/MentorChat";
import Profile from "./pages/Profile";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// ADMIN
import AdminDashboard from "./pages/AdminDashboard";
import AdminQuestions from "./pages/AdminQuestions";
import CreateQuestion from "./pages/CreateQuestion";
import EditQuestion from "./pages/EditQuestion";
import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900
                    text-gray-900 dark:text-gray-100">
      <Router>
        <Routes>

          {/* 🌍 PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔐 USER ROUTES */}
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Layout>
                  <QuizDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/quiz/topic/:topic"
            element={
              <ProtectedRoute>
                <Layout>
                  <TopicQuizPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/coding-practice"
            element={
              <ProtectedRoute>
                <Layout>
                  <CodingPractice />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/coding-practice/category/:name"
            element={
              <ProtectedRoute>
                <Layout>
                  <CategoryPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* ✅ SINGLE Problem Page Route */}
          <Route
            path="/coding-practice/problem/:category/:id"
            element={
              <Layout>
                <ProblemPage />
              </Layout>
            }
          />

          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <Leaderboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/mentor-chat"
            element={
              <ProtectedRoute>
                <Layout>
                  <MentorChat />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <Profile />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* ⭐ ADMIN ROUTES */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/questions"
            element={
              <AdminRoute>
                <AdminQuestions />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/questions/create"
            element={
              <AdminRoute>
                <CreateQuestion />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/questions/edit/:id"
            element={
              <AdminRoute>
                <EditQuestion />
              </AdminRoute>
            }
          />
          <Route
  path="/"
  element={
    <Layout>
      <Home />
    </Layout>
  }
/>


          {/* ❓ UNKNOWN ROUTES */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Router>
    </div>
  );
}
