import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";

export function BookingSection() {
  return (
    <section className="section" id="booking">
      <div className="container booking">
        <Reveal delay={0}>
          <article className="card booking-card">
            <h3>预约前你会关心的事</h3>
            <p>
              首次到店可先做简单问询，我们会根据宠物体型、毛量和性格，推荐更合适的洗护项目与时长安排。
            </p>
            <ul className="booking-list">
              <li>
                <span className="dot" />
                支持微信预约与到店咨询
              </li>
              <li>
                <span className="dot" />
                周末和节假日建议至少提前一天预约
              </li>
              <li>
                <span className="dot" />
                可备注敏感部位、打结情况和特殊需求
              </li>
              <li>
                <span className="dot" />
                如有皮肤问题，建议提前说明近期状态
              </li>
            </ul>
          </article>
        </Reveal>

        <Reveal delay={70}>
          <article className="card contact-card">
            <h3>立即预约</h3>
            <p>留下基础信息，我们会尽快联系你确认时间与服务项目。</p>
            <BookingForm />
            <ul className="contact-list">
              <li>
                <span className="dot" />
                营业时间：10:00 - 21:00
              </li>
              <li>
                <span className="dot" />
                门店地址：城市宠物友好街区 18 号
              </li>
              <li>
                <span className="dot" />
                预约电话：400-888-2026
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

