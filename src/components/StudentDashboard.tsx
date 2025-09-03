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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground">View your exam results</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{studentData.name}</h2>
                <p className="text-muted-foreground">{studentData.studentId} • {studentData.class}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{studentData.overallAverage}%</div>
                <p className="text-sm text-muted-foreground">Overall Average</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">5</div>
              <p className="text-sm text-muted-foreground">Exams</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-success">90%</div>
              <p className="text-sm text-muted-foreground">Best</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-success">+5.2%</div>
              <p className="text-sm text-muted-foreground">Growth</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold">7th</div>
              <p className="text-sm text-muted-foreground">Rank</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Subject Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectScores.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{subject.subject}</span>
                      <Badge variant="outline" className="text-xs">
                        {getGrade(subject.score)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {new Date(subject.examDate).toLocaleDateString()}
                      </span>
                      <span className="font-semibold">
                        {subject.score}%
                      </span>
                    </div>
                  </div>
                  <Progress value={subject.score} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};