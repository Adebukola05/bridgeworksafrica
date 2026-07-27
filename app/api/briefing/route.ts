import { NextRequest, NextResponse } from "next/server";
import { briefingSchema } from "@/lib/validation/briefing-schema";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = briefingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const submission = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
    source: "briefing-modal",
  };

  try {
    // TODO: Google Sheets: forward this submission to a Google Apps Script
    // Web App bound to the "Strategy Briefings" sheet. Deploy the script,
    // set GOOGLE_SHEETS_BRIEFING_WEBHOOK_URL in .env.local, then uncomment:
    //
    // await fetch(process.env.GOOGLE_SHEETS_BRIEFING_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(submission),
    // });

    // TODO: Email notification to admin.bridgeworksafrica@gmail.com: wire
    // up an email provider (Resend, Postmark, SendGrid, or Nodemailer with
    // SMTP) and send the submission there. Example with Resend:
    //
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "BridgeWorks Africa <noreply@bridgeworksafrica.com>",
    //     to: process.env.ADMIN_EMAIL ?? "admin.bridgeworksafrica@gmail.com",
    //     subject: `New strategy briefing request: ${submission.organisation}`,
    //     text: JSON.stringify(submission, null, 2),
    //   }),
    // });

    // Remove this once the integrations above are wired up, it exists so
    // the form has something real to point at while this ships without them.
    console.log("[briefing] new submission (not yet forwarded):", submission);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[briefing] failed to process submission:", error);
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 });
  }
}
