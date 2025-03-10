import { generateRandomString } from "@/tools/util";

test('genrateRandomString', () => {
    const result = generateRandomString()
    expect(result.length === 7).toBeTruthy()
})