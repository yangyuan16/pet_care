import { Reveal } from "@/components/reveal";

const reviews = [
  {
    author: "林女士 · 比熊犬",
    service: "精修造型",
    content:
      "以前我家狗狗很怕吹风，这次店员会边安抚边分段吹干，出来状态特别稳定，造型也很圆润干净。",
  },
  {
    author: "陈先生 · 英短猫",
    service: "舒缓 SPA",
    content:
      "猫咪属于情绪很敏感的那种，没想到全程比我预期顺利很多，洗完毛特别蓬，身上也没有刺鼻香味。",
  },
  {
    author: "赵小姐 · 柯基犬",
    service: "基础净护洗",
    content:
      "会提前确认项目，也会告诉我哪些地方有小打结。透明、细致，接回家之后脚底和耳朵都处理得很到位。",
  },
];

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <Reveal className="section-head" delay={0}>
          <div>
            <h2>顾客评价</h2>
            <p>
              我们最看重的不是“做得快”，而是宠物回来后是不是更舒服，主人接回家时是不是更放心。
            </p>
          </div>
        </Reveal>
        <div className="review-grid">
          {reviews.map((review, index) => (
            <Reveal key={review.author} delay={(index + 1) * 70}>
              <article className="card review-card">
                <header>
                  <div>
                    <strong>{review.author}</strong>
                    <small>{review.service}</small>
                  </div>
                  <span className="stars">★★★★★</span>
                </header>
                <p>{review.content}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

