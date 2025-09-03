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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Upload exam papers for evaluation</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Papers</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">284</div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">81.5%</div>
                <p className="text-sm text-muted-foreground">Avg Score</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Exam Paper</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Mathematics" />
                </div>
                <div>
                  <Label htmlFor="class">Class</Label>
                  <Input id="class" placeholder="Grade 12" />
                </div>
              </div>
              <div>
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Upload PDF file</p>
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
              <Button className="w-full">
                Upload Paper
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Papers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{file.students} students</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {file.status === "completed" ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">{file.avgScore}%</span>
                        </>
                      ) : (
                        <>
                          <Clock className="h-4 w-4 text-warning" />
                          <span className="text-sm">Processing</span>
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