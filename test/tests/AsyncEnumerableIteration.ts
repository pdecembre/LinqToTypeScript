import { AsyncEnumerable } from "./../../src/index"
import { itAsync } from "./../TestHelpers"

describe("AsyncEnumerableIteration", () => {
    itAsync("AsyncGeneratorBehavior", async () => {
        async function* generatorFunc() {
            for (const value of []) {
                yield value
            }
        }

        const generator = generatorFunc()
        const nextValue = await generator.next()
        expect(nextValue.done).toBe(true)

        const generator2 = generatorFunc()
        for await (const value of generator2) {
            fail("Value Detected In Generator")
        }
    })

    itAsync("AsyncGeneratorError", async () => {
        async function* generatorFunc() {
            for (const value of [1, 2, 3]) {
                yield value
                throw new Error("Test")
            }
        }

        const generator = generatorFunc()

        try {
            for await (const value of generator) {
                expect(value).toBe(1)
            }
        } catch (e) {
            return
        }

        fail("Catch Didn't Execute")
    })

    itAsync("AsyncEnumerableBehavior", async () => {
        async function* generatorFunc() {
            for (const value of []) {
                yield value
            }
        }

        const asyncEnumerable = AsyncEnumerable.from(generatorFunc)
        const generator = asyncEnumerable[Symbol.asyncIterator]()
        const nextValue = await generator.next()
        expect(nextValue.done).toBe(true)

        const generator2 = asyncEnumerable[Symbol.asyncIterator]()
        for await (const _ of generator2) {
            fail("Value Detected In Generator")
        }
    })
})
