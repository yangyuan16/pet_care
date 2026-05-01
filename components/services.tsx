import { Reveal } from "@/components/reveal";

const services = [
  {
    icon: "洗",
    title: "基础净护洗",
    description:
      "洗澡、吹干、梳毛、修爪、清耳、肛周修整一步到位，适合日常清洁保养。",
    price: "¥98 起",
  },
  {
    icon: "型",
    title: "精修造型洗护",
    description:
      "针对贵宾、比熊、雪纳瑞等常见造型犬种，提供面部细修与整体轮廓优化。",
    price: "¥168 起",
  },
  {
    icon: "SPA",
    title: "舒缓泡泡 SPA",
    description:
      "加入皮毛护理、深层除味与足底滋养，适合换季、外出频繁或毛量较多的宠物。",
    price: "¥238 起",
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head" delay={0}>
          <div>
            <h2>服务项目</h2>
            <p>
              从基础洗护到精致造型，我们把服务拆得清晰、体验做得细致，让不同体型和毛量的宠物都能被温柔对待。
            </p>
          </div>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index + 1) * 70}>
              <article className="card service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="price-tag">{service.price}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

