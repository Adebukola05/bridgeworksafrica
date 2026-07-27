import Link from "next/link";
import { Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "@/components/ui";

export interface ResourceCardProps {
  format: string;
  title: string;
  description: string;
  href: string;
}

export function ResourceCard({ format, title, description, href }: ResourceCardProps) {
  return (
    <Card>
      <CardHeader>
        <Badge tone="slate">{format}</Badge>
        <CardTitle className="mt-3">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-small font-medium text-navy"
        >
          <Download className="h-4 w-4" strokeWidth={2} />
          Download
        </Link>
      </CardContent>
    </Card>
  );
}
