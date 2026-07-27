import { NextRequest, NextResponse } from "next/server";
import { toolkitSchema } from "@/lib/validation/toolkit-schema";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = toolkitSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const submission = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
    source: "toolkit-popup",
  };

  try {
    // TODO: Google Sheets: this is a SEPARATE sheet/webhook from the
    // briefing flow. Deploy a second Google Apps Script Web App bound to a
    // "Toolkit Leads" sheet, set GOOGLE_SHEETS_TOOLKIT_WEBHOOK_URL in
    // .env.local, then uncomment:
    //
    // await fetch(process.env.GOOGLE_SHEETS_TOOLKIT_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(submission),
    // });

    // TODO: Email automation: send the actual toolkit PDF/resource to the
    // submitted email, e.g. via an email provider's template/attachment API
    // (Resend, Postmark) or a marketing automation tool (Mailchimp,
    // ConvertKit). This is intentionally not the same trigger as the
    // briefing notification above.
    //
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "BridgeWorks Africa <noreply@bridgeworksafrica.com>",
    //     to: submission.email,
    //     subject: "Your Community Research Planning Toolkit",
    //     attachments: [{ path: process.env.TOOLKIT_FILE_URL }],
    //   }),
    // });

    console.log("[toolkit] new lead (not yet forwarded):", submission);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[toolkit] failed to process submission:", error);
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 });
  }
}
