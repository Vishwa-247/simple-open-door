import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Award } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  duration: string
  location: string
  grade: string
}

export default function EducationCard({ institution, degree, duration, location, grade }: EducationCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800 dark:text-gray-100">{institution}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">{degree}</p>
        <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-sky-600 dark:text-sky-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-sky-600 dark:text-sky-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-2 text-sky-600 dark:text-sky-400" />
            <span>{grade}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
