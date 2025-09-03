import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Zap, Shield, BarChart3, Upload, Eye } from "lucide-react";
import heroImage from "@/assets/hero-ocr-platform.jpg";

interface HeroSectionProps {
  onGetStarted: (role: 'teacher' | 'student') => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Exam Assessment Platform
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Transform exam evaluation with cutting-edge OCR technology. Teachers upload papers, AI evaluates instantly, and students access results seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow"
                onClick={() => onGetStarted('teacher')}
              >
                <Upload className="w-5 h-5 mr-2" />
                I'm a Teacher
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => onGetStarted('student')}
              >
                <Eye className="w-5 h-5 mr-2" />
                I'm a Student
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Instant Evaluation</h3>
                <p className="text-white/80 text-sm">AI processes papers in seconds</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Accurate Results</h3>
                <p className="text-white/80 text-sm">Advanced OCR technology</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Smart Analytics</h3>
                <p className="text-white/80 text-sm">Detailed performance insights</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="AI-powered exam assessment platform interface"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};