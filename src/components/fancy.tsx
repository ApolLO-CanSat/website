export default function Fancy({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-purple-500">{children}</span>;
}