import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: "肤",
    title: "分肤质护理",
    description: "根据毛发长度、皮脂情况和皮肤敏感度做产品搭配。",
  },
  {
    icon: "净",
    title: "工具消毒",
    description: "每只宠物独立毛巾与梳具流程，重点区域定时清洁消杀。",
  },
  {
    icon: "安",
    title: "应激安抚",
    description: "对胆小宠物采取慢接触、分段式操作，减少紧张与挣扎。",
  },
  {
    icon: "回",
    title: "洗护反馈",
    description: "完成后同步发送状态说明和照片，方便主人了解当次护理情况。",
  },
];

export function Features() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head" delay={0}>
          <div>
            <h2>为什么很多主人会回头</h2>
            <p>
              我们不只是完成流程，更关注宠物在洗护过程里的情绪、舒适度和恢复状态。
            </p>
          </div>
        </Reveal>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index + 1) * 70}>
              <article className="card feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

