import { Code, Server, Database, Brain, BarChart, MessageSquare, Cloud, GitBranch, File } from "lucide-react"

interface SkillCardProps {
  title: string
  icon: string
}

export default function SkillCard({ title, icon }: SkillCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "code":
        return <Code className="h-6 w-6" />
      case "server":
        return <Server className="h-6 w-6" />
      case "database":
        return <Database className="h-6 w-6" />
      case "brain":
        return <Brain className="h-6 w-6" />
      case "bar-chart":
        return <BarChart className="h-6 w-6" />
      case "message-square":
        return <MessageSquare className="h-6 w-6" />
      case "cloud":
        return <Cloud className="h-6 w-6" />
      case "git-branch":
        return <GitBranch className="h-6 w-6" />
      case "file":
        return <File className="h-6 w-6" />
      default:
        return <Code className="h-6 w-6" />
    }
  }

  return (
    <div className="skill-card bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
      <div className="bg-sky-100 text-sky-700 dark:bg-sky-800 dark:text-sky-100 p-3 rounded-full mb-4">{getIcon()}</div>
      <h3 className="font-medium text-gray-800 dark:text-gray-200">{title}</h3>
    </div>
  )
}
