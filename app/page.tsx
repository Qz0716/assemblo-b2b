export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="/" className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight">ASSEMBLO</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-gray-400">
              B2B Custom Goods
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#portfolio" className="transition hover:text-black">
              포트폴리오
            </a>
            <a href="#service" className="transition hover:text-black">
              서비스
            </a>
            <a href="#contact" className="transition hover:text-black">
              문의
            </a>
          </nav>


          <div className="flex items-center gap-3">
            <a
              href="http://lpeoplegift.com/main/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              기프트샵
            </a>

            <a
              href="#contact"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              제작 문의
            </a>
          </div>
        </div>
      </header>

      {/* HERO - MOBILE */}
      <section className="border-b border-gray-200 bg-[#f7f7f5] md:hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14">
          {/* TEXT */}
          <div>
            <span className="inline-flex rounded-full border border-gray-300 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-600">
              B2B Custom Goods Solution
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#0f172a]">
              브랜드를 위한
              <br />
              맞춤 제작 굿즈
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-700">
              기업 굿즈, 웰컴키트, 브랜드 키트, 프로모션 굿즈까지.
              기획부터 생산, 납품까지 브랜드에 맞는 제작 솔루션을 제공합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                제작 문의하기
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                포트폴리오 보기
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-2.5 text-sm text-gray-600">
              <span>기업 · 브랜드 · 이벤트 제작</span>
              <span>소량~대량 생산 대응</span>
              <span>패키지/인쇄 커스터마이징</span>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
              <div className="aspect-[4/4.6]">
                <img
                  src="/images/hero.jpg"
                  alt="맞춤 제작 굿즈 메인 비주얼"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO - DESKTOP */}
      <section className="relative hidden overflow-hidden md:block">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="맞춤 제작 굿즈 메인 비주얼"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-32">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-gray-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              B2B Custom Goods Solution
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              브랜드를 위한
              <br />
              맞춤 제작 굿즈
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-700 md:text-lg">
              기업 굿즈, 웰컴키트, 브랜드 키트, 프로모션 굿즈까지.
              <br />
              기획부터 생산, 납품까지 브랜드에 맞는 제작 솔루션을 제공합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                제작 문의하기
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white"
              >
                포트폴리오 보기
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
              <span>기업 · 브랜드 · 이벤트 제작</span>
              <span>소량~대량 생산 대응</span>
              <span>패키지/인쇄 커스터마이징</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-6 text-sm text-gray-600 md:grid-cols-3">
          <div>
            <strong className="mr-2 text-gray-900">01</strong>
            브랜드에 맞는 굿즈 기획 제안
          </div>
          <div>
            <strong className="mr-2 text-gray-900">02</strong>
            디자인 · 인쇄 · 패키지 커스터마이징
          </div>
          <div>
            <strong className="mr-2 text-gray-900">03</strong>
            생산부터 납품까지 안정적인 진행
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Portfolio
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                브랜드 경험을 만드는 제작 사례
              </h2>
            </div>

            <a
              href="#contact"
              className="hidden text-sm font-semibold text-gray-900 md:inline-block"
            >
              프로젝트 문의 →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/images/portfolio-01.jpg"
                  alt="브랜드 키트"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">Brand Kit</p>
                <h3 className="text-xl font-semibold">브랜드 키트 패키지</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  패키지, 노트, 펜, 데스크 아이템을 통합 구성한 브랜드 키트 제작 사례
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/images/portfolio-02.jpg"
                  alt="웰컴키트"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">Character Goods</p>
                <h3 className="text-xl font-semibold">캐릭터 굿즈 제작</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  IP, 브랜드 캐릭터를 활용한 굿즈 기획 및 제작 프로젝트 사례
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/images/portfolio-03.jpg"
                  alt="프로모션 굿즈"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">Promotional Gifts</p>
                <h3 className="text-xl font-semibold">프로모션 사은품</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  브랜드 홍보와 고객 경험을 위한 판촉물·굿즈 제작 사례
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
              Service
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              기획부터 생산까지 한 번에
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="mb-4 text-xl font-semibold">굿즈 기획</h3>
              <p className="text-sm leading-7 text-gray-600">
                브랜드 성격과 예산, 목적에 맞는 아이템 조합을 제안합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="mb-4 text-xl font-semibold">디자인/패키지</h3>
              <p className="text-sm leading-7 text-gray-600">
                인쇄 방식, 컬러, 패키지 구성까지 실무형 제작 관점으로 설계합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="mb-4 text-xl font-semibold">생산/납품</h3>
              <p className="text-sm leading-7 text-gray-600">
                샘플 검토부터 본생산, 포장, 납품까지 안정적으로 진행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            프로젝트에 맞는 굿즈 제작을 제안해드립니다
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            브랜드 키트, 웰컴키트, 행사 굿즈, 판촉물 제작까지.
            필요한 내용과 수량, 일정만 알려주시면 적합한 방향으로 안내해드립니다.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >

              문의 메일 보내기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}