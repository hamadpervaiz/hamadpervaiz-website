import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { intent, field1, field2, field3, field4 } = body;

    if (!intent || !field1 || !field2 || !field3) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Map intent to readable label and field names
    const intentLabels: Record<string, string> = {
      venture: "Venture Investment",
      enterprise: "Enterprise Architecture",
      press: "Media & Press",
    };

    const fieldLabels: Record<
      string,
      { f1: string; f2: string; f3: string; f4: string }
    > = {
      venture: {
        f1: "Full Name",
        f2: "Company / URL",
        f3: "Objective",
        f4: "Data Room / Memo URL",
      },
      enterprise: {
        f1: "Full Name",
        f2: "Corporate Entity",
        f3: "The Systemic Bottleneck",
        f4: "Capital Allocation",
      },
      press: {
        f1: "Full Name",
        f2: "Publication / Event Name",
        f3: "Audience Scale & Demographic",
        f4: "Requested Angle / Topic",
      },
    };

    const labels = fieldLabels[intent] || fieldLabels.venture;
    const intentLabel = intentLabels[intent] || intent;

    const textBody = [
      `New ${intentLabel} Request`,
      `${"—".repeat(40)}`,
      ``,
      `${labels.f1}: ${field1}`,
      `${labels.f2}: ${field2}`,
      `${labels.f3}: ${field3}`,
      field4 ? `${labels.f4}: ${field4}` : null,
      ``,
      `${"—".repeat(40)}`,
      `Sent from hamadpervaiz.com/connect`,
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await resend.emails.send({
      from: "The Gate <gate@hamadpervaiz.com>",
      to: "hello@hamadpervaiz.com",
      subject: `New ${intentLabel} Request — ${field1}`,
      text: textBody,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
