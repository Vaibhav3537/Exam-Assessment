import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TeacherDashboard } from "@/components/TeacherDashboard";
import { StudentDashboard } from "@/components/StudentDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'teacher' | 'student'>('home');

  const handleGetStarted = (role: 'teacher' | 'student') => {
    setCurrentView(role);
  };

  const handleViewChange = (view: 'home' | 'teacher' | 'student') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onViewChange={handleViewChange} />
      
      {currentView === 'home' && (
        <HeroSection onGetStarted={handleGetStarted} />
      )}
      
      {currentView === 'teacher' && <TeacherDashboard />}
      
      {currentView === 'student' && <StudentDashboard />}
    </div>
  );
};

export default Index;