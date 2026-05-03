"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FormValues = {
  name: string;
  pet: string;
  service: string;
  expectedArrival: string;
  message: string;
};

const createTomorrowMorningValue = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(9, 30, 0, 0);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const createInitialValues = (): FormValues => ({
  name: "",
  pet: "狗狗",
  service: "基础净护洗",
  expectedArrival: createTomorrowMorningValue(),
  message: "",
});

export function BookingForm() {
  const [values, setValues] = useState<FormValues>(() => createInitialValues());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "预约提交失败，请稍后再试。");
      }

      setStatus("success");
      setFeedback("预约信息已提交，我们会尽快与你联系确认时间。");
      setValues(createInitialValues());
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "预约提交失败，请稍后再试。");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">你的称呼</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="例如：王女士"
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="pet">宠物类型</label>
        <select
          id="pet"
          name="pet"
          value={values.pet}
          onChange={(event) => setValues((current) => ({ ...current, pet: event.target.value }))}
        >
          <option>狗狗</option>
          <option>猫猫</option>
          <option>其他小宠</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="service">预约项目</label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(event) =>
            setValues((current) => ({ ...current, service: event.target.value }))
          }
        >
          <option>基础净护洗</option>
          <option>精修造型洗护</option>
          <option>舒缓泡泡 SPA</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="expectedArrival">期望到店日期</label>
        <input
          id="expectedArrival"
          name="expectedArrival"
          type="datetime-local"
          value={values.expectedArrival}
          onChange={(event) =>
            setValues((current) => ({ ...current, expectedArrival: event.target.value }))
          }
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">补充说明</label>
        <textarea
          id="message"
          name="message"
          placeholder="例如：第一次来店、比较怕吹风、脚底需要重点护理"
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
        />
      </div>
      {feedback ? (
        <p className={`form-feedback ${status === "error" ? "is-error" : "is-success"}`}>
          {feedback}
        </p>
      ) : null}
      <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "提交中..." : "提交预约"}
      </button>
    </form>
  );
}
