import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Briefcase } from "lucide-react"

interface ExperienceCardProps {
  company: string
  position: string
  duration: string
  description: string
}

export default function ExperienceCard({ company, position, duration, description }: ExperienceCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5 text-sky-600 dark:text-sky-400" />
          <CardTitle className="text-xl text-gray-800 dark:text-gray-100">{company}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{position}</h3>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          <CalendarDays className="h-4 w-4 mr-2 text-sky-600 dark:text-sky-400" />
          <span>{duration}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
