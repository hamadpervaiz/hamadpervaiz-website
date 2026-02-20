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

    const { error } = await resend.emails.send({
      from: "The Gate <gate@hamadpervaiz.com>",
      to: "hello@hamadpervaiz.com",
      subject: `New ${intentLabel} Request — ${field1}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 48px 40px; border: 1px solid #222;">
          <div style="border-bottom: 1px solid #222; padding-bottom: 32px; margin-bottom: 32px;">
            <p style="font-size: 11px; letter-spacing: 3px; color: #6AABBF; margin: 0 0 16px 0;">THE GATE — NEW REQUEST</p>
            <h1 style="font-size: 28px; font-weight: 400; margin: 0; color: #fff;">${intentLabel}</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top;">
                <p style="font-size: 10px; letter-spacing: 2px; color: #555; margin: 0 0 6px 0;">${labels.f1.toUpperCase()}</p>
                <p style="font-size: 16px; color: #e5e5e5; margin: 0;">${field1}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top;">
                <p style="font-size: 10px; letter-spacing: 2px; color: #555; margin: 0 0 6px 0;">${labels.f2.toUpperCase()}</p>
                <p style="font-size: 16px; color: #e5e5e5; margin: 0;">${field2}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top;">
                <p style="font-size: 10px; letter-spacing: 2px; color: #555; margin: 0 0 6px 0;">${labels.f3.toUpperCase()}</p>
                <p style="font-size: 16px; color: #e5e5e5; margin: 0; line-height: 1.7;">${field3}</p>
              </td>
            </tr>
            ${
              field4
                ? `<tr>
              <td style="padding: 16px 0; border-bottom: 1px solid #1a1a1a; vertical-align: top;">
                <p style="font-size: 10px; letter-spacing: 2px; color: #555; margin: 0 0 6px 0;">${labels.f4.toUpperCase()}</p>
                <p style="font-size: 16px; color: #e5e5e5; margin: 0;">${field4}</p>
              </td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #222;">
            <p style="font-size: 11px; color: #444; letter-spacing: 1px; margin: 0;">Sent from hamadpervaiz.com/connect</p>
          </div>
        </div>
      `,
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
