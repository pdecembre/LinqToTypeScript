import { asAsync, itAsync, itEnumerable, itParallel } from "../TestHelpers"

describe("orderByDescending", () => {
    itEnumerable("basic", (asEnumerable) => {
        const vals = asEnumerable([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(vals.orderByDescending((x) => x).toArray()).toEqual(vals.reverse().toArray())
    })

    itAsync("BasicAsync", async () => {
        const vals = asAsync([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(await vals.orderByDescending((x) => x).toArray())
            .toEqual(await vals.reverse().toArray())
    })

    itParallel("BasicParallel", async (asParallel) => {
        const vals = asParallel([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(await vals.orderByDescending((x) => x).toArray())
            .toEqual(await vals.reverse().toArray())
    })
})
