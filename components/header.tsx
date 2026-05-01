export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="爪爪云洗护首页">
          <span className="brand-mark">爪</span>
          <span className="brand-text">
            爪爪云洗护
            <small>宠物洗护与造型空间</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#services">服务项目</a>
          <a href="#space">门店环境</a>
          <a href="#reviews">顾客评价</a>
          <a href="#booking">预约咨询</a>
        </nav>
      </div>
    </header>
  );
}

