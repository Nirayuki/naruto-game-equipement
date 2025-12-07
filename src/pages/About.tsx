import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl font-bold">About</h1>
          
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Technology Stack</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>React 18 with TypeScript</li>
                  <li>Vite for fast development and building</li>
                  <li>Tailwind CSS for styling</li>
                  <li>shadcn/ui for UI components</li>
                  <li>React Router for navigation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Modern React development with TypeScript</li>
                  <li>Utility-first CSS with Tailwind</li>
                  <li>Accessible UI components</li>
                  <li>Client-side routing</li>
                  <li>Path aliases for clean imports</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
