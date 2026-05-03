"use client";

import { useEffect, useMemo, useState } from "react";

import { Reveal } from "@/components/reveal";

const reviews = [
  {
    author: "林女士",
    pet: "比熊犬 · 糯米",
    service: "精修造型",
    content:
      "以前糯米很怕吹风，这次美容师会边安抚边分段吹干，接回来状态特别稳定。脸型修得很圆润，耳朵和脚底也处理得很干净。",
    highlight: "护理很温柔",
  },
  {
    author: "陈先生",
    pet: "英短猫 · 豆包",
    service: "舒缓 SPA",
    content:
      "我家猫胆子小，原本担心会应激，没想到全程比预期顺利很多。洗完毛特别蓬松，身上也没有刺鼻香味，细节很让人放心。",
    highlight: "猫咪也放松",
  },
  {
    author: "赵小姐",
    pet: "柯基犬 · 橘子",
    service: "基础净护洗",
    content:
      "会提前确认护理项目，也会告诉我哪些地方有小打结。透明、细致，接回家之后脚底、耳朵和肚皮都处理得很到位。",
    highlight: "沟通很清楚",
  },
  {
    author: "周先生",
    pet: "金毛犬 · Max",
    service: "深层除味护理",
    content:
      "大型犬洗护最怕赶时间，这家不会硬催。美容师把毛结、皮肤泛红的位置都标出来提醒我们，洗完两周味道都控制得不错。",
    highlight: "大型犬友好",
  },
  {
    author: "许女士",
    pet: "布偶猫 · 奶盖",
    service: "换毛季护理",
    content:
      "家里到处飞毛，做完护理之后明显好很多。梳毛过程有照片反馈，能看到每一步，猫回家后也没有一直躲起来。",
    highlight: "反馈很及时",
  },
  {
    author: "王先生",
    pet: "贵宾犬 · Coco",
    service: "造型洗护套餐",
    content:
      "之前试过几家，造型不是太短就是不自然。这次会先问我们想保留的长度，剪完很精神，拍照也特别上镜。",
    highlight: "造型很满意",
  },
];

const reviewsPerPage = 3;

export function Reviews() {
  const pages = useMemo(() => {
    return Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, index) =>
      reviews.slice(index * reviewsPerPage, index * reviewsPerPage + reviewsPerPage),
    );
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentPage((previous) => (previous + 1) % pages.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [pages.length]);

  const updatePage = (index: number) => {
    setCurrentPage((index + pages.length) % pages.length);
  };

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <Reveal className="section-head" delay={0}>
          <div>
            <h2>客户评价</h2>
            <p>
              我们最看重的不是“做得快”，而是宠物回来后是不是更舒服，主人接回家时是不是更放心。
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="reviews-carousel" aria-label="客户评价轮播">
            <div
              className="review-track"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div className="review-page" key={`reviews-page-${pageIndex}`}>
                  {page.map((review) => (
                    <article className="card review-card" key={`${review.author}-${review.pet}`}>
                      <header>
                        <div className="review-meta">
                          <span className="review-avatar">{review.author.slice(0, 1)}</span>
                          <div>
                            <strong>{review.author}</strong>
                            <small>{review.pet}</small>
                          </div>
                        </div>
                        <span className="stars" aria-label="五星评价">
                          ★★★★★
                        </span>
                      </header>
                      <p>{review.content}</p>
                      <div className="review-footer">
                        <span>{review.service}</span>
                        <strong>{review.highlight}</strong>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="review-controls" aria-label="评价轮播控制">
            <button
              className="review-arrow"
              type="button"
              aria-label="上一组评价"
              onClick={() => updatePage(currentPage - 1)}
            >
              ←
            </button>
            <div className="review-dots" aria-label="评价分页">
              {pages.map((_, index) => (
                <button
                  key={`review-dot-${index}`}
                  className={`review-dot${index === currentPage ? " is-active" : ""}`}
                  type="button"
                  aria-label={`显示第 ${index + 1} 组评价`}
                  onClick={() => updatePage(index)}
                />
              ))}
            </div>
            <button
              className="review-arrow"
              type="button"
              aria-label="下一组评价"
              onClick={() => updatePage(currentPage + 1)}
            >
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
