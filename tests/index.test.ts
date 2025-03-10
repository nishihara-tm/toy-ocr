import { main } from "@/index";

vi.mock('@/tools/scraping', () => ({
    scrape: () => vi.fn(),
}))

vi.mock('@/tools/client', () => ({
    llm: () => vi.fn()
}))

test('main', () => {
    main()
})