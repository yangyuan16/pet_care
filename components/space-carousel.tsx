"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/space-slide-1.png",
    imagePosition: "left center",
    label: "前台接待区",
    title: "高端接待与精品陈列空间",
    description: "温润石材、木质陈列和柔和灯光营造出专属贵客的到店感。",
  },
  {
    image: "/space-slide-2.png",
    imagePosition: "center center",
    label: "洗护操作区",
    title: "明亮通透的洗护操作区域",
    description: "视线更聚焦在洗护工位与陈列细节，轮播切换时能明确看到第二张场景。",
  },
  {
    image: "/space-slide-3.png",
    imagePosition: "right center",
    label: "等候休息区",
    title: "临窗等候区与舒缓陪伴氛围",
    description: "把靠窗绿植、自然采光和休息动线单独呈现为第三张，轮播层次更清楚。",
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
          <article key={slide.title} className="space-slide">
            <div
              className="space-slide-image"
              aria-hidden="true"
              style={{
                backgroundImage: `url("${slide.image}")`,
                backgroundPosition: slide.imagePosition,
              }}
            />
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
          <button
            type="button"
            className="space-prev"
            aria-label="上一张"
            onClick={() => updateSlide(currentSlide - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="space-next"
            aria-label="下一张"
            onClick={() => updateSlide(currentSlide + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
