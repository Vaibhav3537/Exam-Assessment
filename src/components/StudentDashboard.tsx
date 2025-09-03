import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, TrendingUp, Award, Calendar, BarChart3 } from "lucide-react";

export const StudentDashboard = () => {
  const studentData = {
    name: "Alex Johnson",
    studentId: "STU2024001",
    class: "Grade 12",
    overallAverage: 82.5
  };

  const subjectScores = [
    { subject: "Mathematics", score: 78, maxScore: 100, examDate: "2024-01-15", trend: "up" },
    { subject: "Physics", score: 85, maxScore: 100, examDate: "2024-01-12", trend: "up" },
    { subject: "Chemistry", score: 88, maxScore: 100, examDate: "2024-01-10", trend: "up" },
    { subject: "English", score: 76, maxScore: 100, examDate: "2024-01-08", trend: "down" },
    { subject: "Biology", score: 90, maxScore: 100, examDate: "2024-01-05", trend: "up" }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-info";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  const getGrade = (score: number) => {
    if (score >= 90) return "A+";
    if (score >= 85) return "A";
    if (score >= 80) return "B+";
    if (score >= 75) return "B";
    if (score >= 70) return "C+";
    if (score >= 65) return "C";
    return "D";
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground">View your exam results and academic performance</p>
        </div>

        {/* Student Info Card */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">{studentData.name}</CardTitle>
                <CardDescription>
                  {studentData.studentId} • {studentData.class}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {studentData.overallAverage}%
                </div>
                <p className="text-sm text-muted-foreground">Overall Average</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Score</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">90%</div>
              <p className="text-xs text-muted-foreground">Biology exam</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Improvement</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">+5.2%</div>
              <p className="text-xs text-muted-foreground">From last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7th</div>
              <p className="text-xs text-muted-foreground">Out of 45 students</p>
            </CardContent>
          </Card>
        </div>

        {/* Subject-wise Scores */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Subject-wise Performance
            </CardTitle>
            <CardDescription>
              Your latest exam scores across all subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectScores.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{subject.subject}</h3>
                      <Badge variant="outline" className="text-xs">
                        {getGrade(subject.score)}
                      </Badge>
                      <TrendingUp 
                        className={`h-4 w-4 ${subject.trend === 'up' ? 'text-success' : 'text-destructive'} ${subject.trend === 'down' ? 'rotate-180' : ''}`} 
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(subject.examDate).toLocaleDateString()}
                      </span>
                      <span className={`text-lg font-bold ${getScoreColor(subject.score)}`}>
                        {subject.score}/{subject.maxScore}
                      </span>
                    </div>
                  </div>
                  <Progress value={subject.score} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Performance: {subject.score >= 85 ? 'Excellent' : subject.score >= 75 ? 'Good' : subject.score >= 65 ? 'Average' : 'Needs Improvement'}</span>
                    <span>{subject.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};