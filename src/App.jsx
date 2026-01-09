import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import MentorChat from "./pages/MentorChat";
import CodingPractice from "./pages/CodingPractice";
import QuizDashboard from "./pages/QuizDashboard";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import CategoryPage from "./pages/CategoryPage";
import ProblemPage from "./pages/ProblemPage";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import TopicQuizPage from "./pages/TopicQuizPage";

// ADMIN PAGES
import AdminDashboard from "./pages/AdminDashboard";
import AdminQuestions from "./pages/AdminQuestions";
import CreateQuestion from "./pages/CreateQuestion";
import EditQuestion from "./pages/EditQuestion";
import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Router>
        <Routes>

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Topic Quiz */}
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

          {/* Home */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Quiz Dashboard */}
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

          {/* Quiz Gameplay */}
          <Route
            path="/quiz/start"
            element={
              <ProtectedRoute>
                <Layout>
                  <Quiz />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Profile */}
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

          {/* Leaderboard */}
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

          {/* Mentor Chat */}
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

          {/* Coding Practice */}
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

          {/* Category Page */}
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

          {/* Problem Page */}
          <Route
            path="/coding-practice/problem/:slug"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProblemPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </Router>
    </div>
  );
}
