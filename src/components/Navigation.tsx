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
    <nav className="bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-foreground" />
            <span className="text-lg font-semibold text-foreground">ExamAI</span>
          </div>
          
          <div className="flex space-x-1">
            <Button 
              variant={currentView === 'home' ? 'default' : 'ghost'}
              onClick={() => onViewChange('home')}
              size="sm"
            >
              Home
            </Button>
            <Button 
              variant={currentView === 'teacher' ? 'default' : 'ghost'}
              onClick={() => onViewChange('teacher')}
              size="sm"
            >
              Teacher
            </Button>
            <Button 
              variant={currentView === 'student' ? 'default' : 'ghost'}
              onClick={() => onViewChange('student')}
              size="sm"
            >
              Student
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};