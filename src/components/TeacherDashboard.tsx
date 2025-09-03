import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, CheckCircle, Clock, Users, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const TeacherDashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: "Math_Test_Class_10.pdf", status: "completed", students: 32, avgScore: 78 },
    { id: 2, name: "Physics_Exam_Q2.pdf", status: "processing", students: 28, avgScore: null },
    { id: 3, name: "Chemistry_Quiz_Unit3.pdf", status: "completed", students: 30, avgScore: 85 }
  ]);
  
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFile = {
        id: uploadedFiles.length + 1,
        name: file.name,
        status: "processing" as const,
        students: Math.floor(Math.random() * 40) + 20,
        avgScore: null
      };
      setUploadedFiles([newFile, ...uploadedFiles]);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} is being processed by our AI system.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Upload and manage exam papers for AI-powered evaluation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Papers</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students Evaluated</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">284</div>
              <p className="text-xs text-muted-foreground">Across all subjects</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">81.5%</div>
              <p className="text-xs text-success">+3.2% improvement</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload New Exam Paper
              </CardTitle>
              <CardDescription>
                Upload exam papers in PDF format for AI evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Mathematics, Physics" />
              </div>
              <div>
                <Label htmlFor="class">Class/Grade</Label>
                <Input id="class" placeholder="e.g., Class 10, Grade 12" />
              </div>
              <div>
                <Label htmlFor="description">Exam Description</Label>
                <Textarea id="description" placeholder="Brief description of the exam..." rows={3} />
              </div>
              <div>
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      PDF files only (max 10MB)
                    </p>
                  </div>
                  <Input 
                    id="file-upload" 
                    type="file" 
                    className="hidden" 
                    accept=".pdf"
                    onChange={handleFileUpload}
                  />
                </Label>
              </div>
              <Button className="w-full bg-gradient-primary">
                Process Exam Paper
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Uploads</CardTitle>
              <CardDescription>Monitor the progress of your exam evaluations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{file.students} students</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {file.status === "completed" ? (
                        <>
                          <CheckCircle className="h-5 w-5 text-success" />
                          <span className="text-sm font-medium text-success">{file.avgScore}%</span>
                        </>
                      ) : (
                        <>
                          <Clock className="h-5 w-5 text-warning animate-pulse" />
                          <span className="text-sm text-warning">Processing...</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};