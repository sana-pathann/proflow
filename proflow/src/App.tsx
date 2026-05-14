/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/src/components/Layout";

import Home from "@/src/pages/Home";
import Dashboard from "@/src/pages/Dashboard";
import Projects from "@/src/pages/Projects";
import ProjectDetails from "@/src/pages/ProjectDetails";
import AdminPanel from "@/src/pages/AdminPanel";
import Settings from "@/src/pages/Settings";

export default function App() {
  return (
    <TooltipProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />

          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />

          <Route
            path="/projects/:projectId"
            element={
              <Layout>
                <ProjectDetails />
              </Layout>
            }
          />

          <Route
            path="/admin"
            element={
              <Layout>
                <AdminPanel />
              </Layout>
            }
          />

          <Route
            path="/settings"
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />
        </Routes>
      </Router>

      <Toaster />
    </TooltipProvider>
  );
}
