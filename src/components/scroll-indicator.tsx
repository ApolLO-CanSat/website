import { ChevronsDown } from 'lucide-react';

export default function ScrollIndicator({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute bottom-10 left-0 w-full flex cursor-pointer flex-col items-center gap-2 ${className ?? ''}`}
    >
      <div className="text-gray-300">{text}</div>
      <ChevronsDown size={24} className="animate-bounce text-gray-500" />
    </div>
  );
}
