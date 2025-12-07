import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-4xl font-bold text-center">
            Naruto Game Equipment
          </h1>
          
          <p className="text-xl text-muted-foreground text-center max-w-2xl">
            Welcome to the Naruto Game Equipment project! This is a React application with Tailwind CSS, shadcn/ui, and React Router.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
            <Card>
              <CardHeader>
                <CardTitle>React</CardTitle>
                <CardDescription>A JavaScript library for building user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Built with React 18 and TypeScript for type-safe development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>A utility-first CSS framework</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Rapidly build modern websites with utility classes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>Beautifully designed components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Accessible and customizable components built with Radix UI.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4 mt-8">
            <Link to="/about">
              <Button>About</Button>
            </Link>
            <Button variant="outline">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
