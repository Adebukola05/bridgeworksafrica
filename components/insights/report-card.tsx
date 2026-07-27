import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Badge } from "@/components/ui";

export type ReportStatus = "in-preparation" | "published";

export interface ReportCardProps {
  title: string;
  type: string;
  status: ReportStatus;
  description: string;
  href?: string;
}

const statusTone: Record<ReportStatus, "gold" | "forest"> = {
  "in-preparation": "gold",
  published: "forest",
};

const statusLabel: Record<ReportStatus, string> = {
  "in-preparation": "In preparation",
  published: "Published",
};

export function ReportCard({ title, type, status, description, href }: ReportCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="text-caption uppercase text-slate">{type}</p>
          <Badge tone={statusTone[status]}>{statusLabel[status]}</Badge>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        {status === "in-preparation" && (
          <p className="mt-5 text-small text-ink/70">
            Not yet available for public release. Verified partners can
            request early access.
          </p>
        )}
        <div className="mt-5">
          {status === "published" && href ? (
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-small font-medium text-navy"
            >
              Read the report
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          ) : (
            <Button variant="secondary" size="sm" asChild>
              <Link href="/contact">Request access</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
