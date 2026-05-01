import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <Reveal delay={0}>
          <span className="eyebrow">轻洗护 · 深清洁 · 安心陪伴</span>
          <h1>让每一次洗护，都像宠物的小假期。</h1>
          <p>
            为猫咪和狗狗提供温和洗护、精修造型、皮毛护理和舒缓 SPA。我们把门店做成松弛、明亮、没有压迫感的空间，让毛孩子在被照顾时也能感到安心。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#booking">
              立即预约
            </a>
            <a className="btn btn-secondary" href="#services">
              查看套餐
            </a>
          </div>
          <div className="hero-stats">
            <article className="stat-card">
              <strong>3000+</strong>
              <span>累计服务宠物家庭</span>
            </article>
            <article className="stat-card">
              <strong>4.9</strong>
              <span>大众点评口碑评分</span>
            </article>
            <article className="stat-card">
              <strong>7 天</strong>
              <span>营业到晚间 9 点</span>
            </article>
          </div>
        </Reveal>

        <Reveal className="hero-media" delay={70}>
          <div className="hero-badge">
            <strong>高端中国城市宠物洗护店</strong>
            <span>
              以温润石材、木质陈列、玻璃隔断和柔和灯光打造干净、专业、可被信任的洗护体验。
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

