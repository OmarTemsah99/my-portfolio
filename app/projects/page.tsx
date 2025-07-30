"use client";

import { Button, Card, CardContent } from "@mui/material";

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-4">
      <Card className="shadow-xl">
        <CardContent>
          <h2 className="text-xl font-bold">Project Title</h2>
          <p className="text-gray-700">Description here...</p>
          <div className="mt-4 flex gap-2">
            <Button variant="contained" color="primary">
              GitHub
            </Button>
            <Button variant="outlined" color="secondary">
              Live Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
