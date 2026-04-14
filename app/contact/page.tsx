export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <section className="border-b border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                        Contact
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                        제작 문의
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                        브랜드 키트, 웰컴키트, 프로모션 굿즈, 판촉물 제작까지.
                        필요한 내용과 일정, 수량을 남겨주시면 확인 후 연락드리겠습니다.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.4fr]">
                    <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                        <h2 className="text-2xl font-bold tracking-tight">문의 안내</h2>

                        <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-900">상담 가능 항목</p>
                                <p>기업 굿즈 / 브랜드 키트 / 웰컴키트 / 행사 판촉물 / 패키지 제작</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900">안내해주시면 좋은 정보</p>
                                <p>희망 품목, 예상 수량, 예산 범위, 납기 일정, 인쇄 여부</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900">응답 방식</p>
                                <p>문의 접수 후 이메일 또는 연락처로 순차 회신드립니다.</p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
                            <p className="text-sm font-semibold text-gray-900">빠른 문의</p>
                            <a
                                href="mailto:lpeople8@naver.com"
                                className="mt-2 block text-sm text-gray-600 underline underline-offset-4"
                            >
                                lpeople8@naver.com
                            </a>
                        </div>
                    </aside>

                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                        <form
                            action="https://formspree.io/f/myklyrqy"
                            method="POST"
                            className="space-y-6"
                        >
                            <input type="hidden" name="_subject" value="ASSEMBLO 제작 문의 접수" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input
                                type="hidden"
                                name="_next"
                                value="https://lpeople.co.kr/contact"
                            />
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="mb-2 block text-sm font-semibold text-gray-900"
                                    >
                                        회사명 / 브랜드명 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="예: 엘피플 / ASSEMBLO"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-gray-900"
                                    >
                                        담당자명 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="이름을 입력해주세요"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-gray-900"
                                    >
                                        이메일 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-semibold text-gray-900"
                                    >
                                        연락처 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="010-0000-0000"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                <div>
                                    <label
                                        htmlFor="item"
                                        className="mb-2 block text-sm font-semibold text-gray-900"
                                    >
                                        희망 품목
                                    </label>
                                    <input
                                        id="item"
                                        name="item"
                                        type="text"
                                        placeholder="예: 웰컴키트"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="mb-2 block text-sm font-semibold text-gray-900"
                                    >
                                        예상 수량
                                    </label>
                                    <input
                                        id="quantity"
                                        name="quantity"
                                        type="text"
                                        placeholder="예: 300세트"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="deadline"
                                        className="mb-2 block text-sm font-semibold text-gray-900"
                                    >
                                        희망 납기
                                    </label>
                                    <input
                                        id="deadline"
                                        name="deadline"
                                        type="text"
                                        placeholder="예: 5월 말"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="budget"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    예산 범위
                                </label>
                                <input
                                    id="budget"
                                    name="budget"
                                    type="text"
                                    placeholder="예: 300만원 내외"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    제작 내용 <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={8}
                                    placeholder="원하시는 품목, 용도, 인쇄 내용, 참고사항 등을 자유롭게 입력해주세요."
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-sm text-gray-500">
                                    문의 접수 후 빠른 시간 내 담당자가 확인하여 연락드립니다.
                                </p>

                                <button
                                    type="submit"
                                    className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    문의 보내기
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}