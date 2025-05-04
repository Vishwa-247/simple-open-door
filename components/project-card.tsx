import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  points: string[]
  image: string
  technologies: string[]
}

export default function ProjectCard({ title, description, points, image, technologies }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-56 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-gray-800 dark:text-gray-100">{title}</CardTitle>
        <CardDescription className="dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          {points.map((point, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
