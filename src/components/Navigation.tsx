import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, BarChart3, Upload, Eye } from "lucide-react";

interface NavigationProps {
  currentView: 'home' | 'teacher' | 'student';
  onViewChange: (view: 'home' | 'teacher' | 'student') => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  return (
    <nav className="bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">ExamAI</span>
          </div>
          
          <div className="flex space-x-4">
            <Button 
              variant={currentView === 'home' ? 'default' : 'ghost'}
              onClick={() => onViewChange('home')}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button 
              variant={currentView === 'teacher' ? 'default' : 'ghost'}
              onClick={() => onViewChange('teacher')}
            >
              <Upload className="w-4 h-4 mr-2" />
              Teacher
            </Button>
            <Button 
              variant={currentView === 'student' ? 'default' : 'ghost'}
              onClick={() => onViewChange('student')}
            >
              <Eye className="w-4 h-4 mr-2" />
              Student
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};