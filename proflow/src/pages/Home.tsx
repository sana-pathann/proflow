import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Layout } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md border-none shadow-xl bg-white rounded-3xl overflow-hidden">
          
          <div className="bg-[#1a1a1a] p-12 flex flex-col items-center justify-center text-white">
            <Layout className="w-16 h-16 mb-4 text-[#FF6321]" />
            <h1 className="text-4xl font-bold tracking-tighter">
              ProFlow
            </h1>
            <p className="text-sm opacity-60 uppercase tracking-widest mt-2">
              Project Management
            </p>
          </div>

          <CardHeader className="pt-8 text-center">
            <CardTitle className="text-2xl font-medium text-slate-900">
              Welcome
            </CardTitle>

            <CardDescription className="text-slate-500">
              Open your dashboard and manage projects easily.
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-12 pt-4 px-12">
            <Button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-[#1a1a1a] hover:bg-black text-white py-6 rounded-full transition-all"
            >
              Open Dashboard
            </Button>
          </CardContent>

        </Card>
      </motion.div>
    </div>
  );
}
