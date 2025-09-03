import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Zap, Shield, BarChart3, Upload, Eye } from "lucide-react";
import heroImage from "@/assets/hero-ocr-platform.jpg";

interface HeroSectionProps {
  onGetStarted: (role: 'teacher' | 'student') => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-foreground">
            Exam Assessment Platform
          </h1>
          <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
            Upload exam papers and get AI-powered evaluation results instantly
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => onGetStarted('teacher')}
            >
              <Upload className="w-4 h-4 mr-2" />
              Teacher Portal
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onGetStarted('student')}
            >
              <Eye className="w-4 h-4 mr-2" />
              Student Portal
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <Zap className="w-8 h-8 mx-auto mb-3 text-foreground" />
              <h3 className="font-medium mb-2">Quick Processing</h3>
              <p className="text-muted-foreground text-sm">Fast AI evaluation</p>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-3 text-foreground" />
              <h3 className="font-medium mb-2">Accurate Results</h3>
              <p className="text-muted-foreground text-sm">Reliable assessment</p>
            </div>
            <div>
              <BarChart3 className="w-8 h-8 mx-auto mb-3 text-foreground" />
              <h3 className="font-medium mb-2">Clear Reports</h3>
              <p className="text-muted-foreground text-sm">Easy to understand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};