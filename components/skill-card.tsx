
import React, { FC } from 'react';
import { Brain, Code, BarChart, Cloud, MessageSquare, Database, GitBranch } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  'brain': <Brain className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
  'code': <Code className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
  'bar-chart': <BarChart className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
  'cloud': <Cloud className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
  'message-square': <MessageSquare className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
  'database': <Database className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
  'git-branch': <GitBranch className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
}

const SkillCard: FC<SkillCardProps> = ({ title, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
      <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {iconMap[icon] || <Code className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default SkillCard;
