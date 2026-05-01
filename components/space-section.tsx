import { Reveal } from "@/components/reveal";
import { SpaceCarousel } from "@/components/space-carousel";

export function SpaceSection() {
  return (
    <section className="section" id="space">
      <div className="container">
        <Reveal className="section-head" delay={0}>
          <div>
            <h2>门店空间</h2>
            <p>
              明亮不刺眼，气味干净，动线清晰。三张轮播图分别展示前台接待区、洗护操作区和等候休息区。
            </p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <SpaceCarousel />
        </Reveal>
      </div>
    </section>
  );
}

