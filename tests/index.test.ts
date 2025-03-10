import { main } from "@/index";

vi.mock('openai')
vi.mock('@/tools/scraper', () => {
    return {
        Scraper: vi.fn().mockImplementation(() => ({
            take_screenshot: vi.fn()
        }))
    }
})

vi.mock('@/tools/client', () => {
    return {
        Client: vi.fn().mockImplementation(() => ({
            stream_response: vi.fn()
        }))
    }
})

// もしくは普通にMockするだけ

test('main', () => {
    expect(() => {
        main()
    }).not.toThrow()
})