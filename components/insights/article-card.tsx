import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";

export interface ArticleCardProps {
  topic: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
}

export function ArticleCard({ topic, title, excerpt, date, readTime, href }: ArticleCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition-shadow duration-base hover:shadow-elevated">
        <CardHeader>
          <p className="text-caption uppercase text-gold-dark">{topic}</p>
          <CardTitle className="mt-1">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{excerpt}</CardDescription>
          <p className="mt-4 text-caption text-slate">
            {date} · {readTime}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
