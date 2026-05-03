import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";

const storeAddress = "广东省东莞市大岭山镇南一路56号";
const mapUrl = `https://uri.amap.com/search?keyword=${encodeURIComponent(
  storeAddress,
)}&city=东莞&view=map&src=mypage&coordinate=gaode&callnative=0`;

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
            <div className="store-info" aria-label="门店信息">
              <div className="store-map">
                <iframe
                  title="爪爪云洗护门店地图"
                  src={mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ul className="contact-list">
                <li>
                  <span className="dot" />
                  营业时间：10:00 - 21:00
                </li>
                <li>
                  <span className="dot" />
                  门店地址：{storeAddress}
                </li>
                <li>
                  <span className="dot" />
                  预约电话：400-888-2026
                </li>
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
