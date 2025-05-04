
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
    <div className="skill-card bg-card border rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
      <div className="bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30 text-sky-700 dark:text-sky-300 p-4 rounded-full mb-4">
        {getIcon()}
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
  )
}
