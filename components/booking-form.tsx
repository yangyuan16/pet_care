"use client";

import { useState } from "react";
import type { FormEvent } from "react";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const customerName = values.name.trim() || "你";
    window.alert(`${customerName}，预约信息已记录，我们会尽快与你联系。`);
    setValues(createInitialValues());
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
          <option>猫咪</option>
          <option>其他小宠</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="service">预约项目</label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(event) => setValues((current) => ({ ...current, service: event.target.value }))}
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
        />
      </div>
      <div className="field">
        <label htmlFor="message">补充说明</label>
        <textarea
          id="message"
          name="message"
          placeholder="例如：第一次来店、比较怕吹风、脚底需要重点护理"
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        提交预约
      </button>
    </form>
  );
}
