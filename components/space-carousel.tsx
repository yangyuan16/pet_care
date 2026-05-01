"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    focus: "top",
    label: "前台接待区",
    title: "高端接待与精品陈列空间",
    description: "温润石材、木质陈列和柔和灯光营造出专属贵客的到店感。",
  },
  {
    focus: "middle",
    label: "洗护操作区",
    title: "明亮透明的专业洗护区",
    description: "独立洗护位、玻璃分区和统一工具收纳，让操作流程清晰，也更让人放心。",
  },
  {
    focus: "bottom",
    label: "等候休息区",
    title: "柔软等候区与宠物互动氛围",
    description: "弧形沙发、自然采光和安静动线，让等待过程也像在精品酒店大堂。",
  },
];

export function SpaceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  const updateSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <div className="space-carousel" aria-label="门店环境轮播">
      <div
        className="space-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <article key={slide.title} className="space-slide" data-focus={slide.focus}>
            <div className="space-slide-image" aria-hidden="true" />
            <div className="gallery-content">
              <span className="rating">{slide.label}</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="space-carousel-controls">
        <div className="space-dots" aria-label="轮播分页">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              className={`space-dot${index === currentSlide ? " is-active" : ""}`}
              type="button"
              aria-label={`显示第 ${index + 1} 张图`}
              onClick={() => updateSlide(index)}
            />
          ))}
        </div>
        <div className="space-nav" aria-label="轮播控制">
          <button type="button" className="space-prev" aria-label="上一张" onClick={() => updateSlide(currentSlide - 1)}>
            ‹
          </button>
          <button type="button" className="space-next" aria-label="下一张" onClick={() => updateSlide(currentSlide + 1)}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

