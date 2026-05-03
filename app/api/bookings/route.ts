import { NextResponse } from "next/server";

import { getPool } from "@/lib/db";

export const runtime = "nodejs";

type BookingPayload = {
  name?: unknown;
  pet?: unknown;
  service?: unknown;
  expectedArrival?: unknown;
  message?: unknown;
};

const toTrimmedString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let payload: BookingPayload;

  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "请求内容格式不正确。" }, { status: 400 });
  }

  const customerName = toTrimmedString(payload.name);
  const petType = toTrimmedString(payload.pet);
  const serviceType = toTrimmedString(payload.service);
  const expectedArrivalValue = toTrimmedString(payload.expectedArrival);
  const message = toTrimmedString(payload.message);
  const expectedArrival = new Date(expectedArrivalValue);

  if (!customerName || !petType || !serviceType || !expectedArrivalValue) {
    return NextResponse.json({ error: "请填写称呼、宠物类型、预约项目和到店日期。" }, { status: 400 });
  }

  if (Number.isNaN(expectedArrival.getTime())) {
    return NextResponse.json({ error: "到店日期格式不正确。" }, { status: 400 });
  }

  try {
    const result = await getPool().query<{ id: string }>(
      `
        insert into public.booking_appointments (
          customer_name,
          pet_type,
          service_type,
          expected_arrival,
          message
        )
        values ($1, $2, $3, $4, nullif($5, ''))
        returning id
      `,
      [customerName, petType, serviceType, expectedArrival.toISOString(), message],
    );

    return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
  } catch (error) {
    console.error("Failed to create booking appointment", error);
    return NextResponse.json({ error: "预约提交失败，请稍后再试。" }, { status: 500 });
  }
}
