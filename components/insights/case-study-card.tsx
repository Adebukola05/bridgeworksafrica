import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "@/components/ui";

export interface CaseStudyCardProps {
  partnerType: string;
  title: string;
  summary: string;
  href: string;
}

export function CaseStudyCard({ partnerType, title, summary, href }: CaseStudyCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition-shadow duration-base hover:shadow-elevated">
        <CardHeader>
          <Badge tone="slate">{partnerType}</Badge>
          <CardTitle className="mt-3">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{summary}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
