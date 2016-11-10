// ################
// ## Interfaces ##
// ################

import { RecOrdMap, Tuple, IConstructor, IEqualityComparer, IComparer, NumberComparer } from "./TypesAndHelpers"

export interface IEnumerable<TSource> extends Iterable<TSource>
{
    aggregate: {
        (func: (x: TSource, y: TSource) => TSource): TSource,
        <TAccumulate>(seed: TAccumulate, func: (x: TAccumulate, y: TSource) => TAccumulate): TAccumulate,
        <TAccumulate, TResult>(seed: TAccumulate, func: (x: TAccumulate, y: TSource) => TAccumulate, resultSelector: (x : TAccumulate) => TResult): TResult
    }
    all: (predicate: (x : TSource) => boolean) => boolean
    any: {
        (): boolean,
        (predicate: (x: TSource) => boolean): boolean 
    }
    concat: (second: Iterable<TSource>) => IEnumerable<TSource>,
    contains: {
        (value: TSource): boolean,
        (value: TSource, comparer: IEqualityComparer<TSource>): boolean
    }
    count: {
        (): number
        (predicate: (x : TSource) => boolean): number
    }
    distinct: {
        (): IEnumerable<TSource>,
        (comparer: IEqualityComparer<TSource>): IEnumerable<TSource>
    },
    elementAt: (index: number) => TSource
    elementAtOrDefault: (index: number) => TSource | null
    except: {
        (second: IEnumerable<TSource>): IEnumerable<TSource>
        (second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>
    }
    first: {
        (): TSource,
        (predicate: (x: TSource) => boolean): TSource
    }
    firstOrDefault: {
        (): TSource | null,
        (predicate: (x: TSource) => boolean): TSource | null
    }
    each: (action: (x: TSource) => void) => void
    groupBy: {
        (keySelector: (x: TSource) => number): IEnumerable<IGrouping<number, TSource>>
        (keySelector: (x: TSource) => string): IEnumerable<IGrouping<string, TSource>>
        <TKey>(keySelector: (x: TSource) => TKey, comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TSource>>
    }
    groupByWithSel: {
        <TSource, TElement>(
            keySelector: ((x: TSource) => number),
            elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<number, TElement>>
        <TSource, TElement>(
            keySelector: ((x: TSource) => string),
            elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<string, TElement>>
        <TSource, TKey, TElement>(
            keySelector: ((x: TSource) => TKey),
            elementSelector: (x: TSource) => TElement,
            comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>
    }
    intersect: {
        (second: IEnumerable<TSource>): IEnumerable<TSource>
        (second: IEnumerable<TSource>, comparer: IEqualityComparer<TSource>): IEnumerable<TSource>
    }
    pluck: <TResult>(this: IEnumerable<{[key: string]: TResult}>, propertyName: string) => IEnumerable<TResult>
    take: (amount: number) => IEnumerable<TSource>
    takeWhile: {
        (pedicate: (x: TSource) => boolean): IEnumerable<TSource>,
        (pedicate: (x: TSource, index: number) => boolean): IEnumerable<TSource>,
    }
    last: {
        (): TSource,
        (predicate: (x: TSource) => boolean): TSource
    }
    lastOrDefault: {
        (): TSource | null,
        (predicate: (x: TSource) => boolean): TSource | null
    }
    max: {
        (this: IEnumerable<number>): number,
        (selector: (x: TSource) => number): number
    },
    min: {
        (this: IEnumerable<number>): number,
        (selector: (x: TSource) => number): number        
    }
    ofType: {
        (type: "object"): IEnumerable<Object>
        (type: "function"): IEnumerable<Function>
        (type: "symbol"): IEnumerable<Symbol>
        (type: "boolean"): IEnumerable<boolean>
        (type: "number"): IEnumerable<number>
        <TResult>(type: IConstructor<TResult>): IEnumerable<TResult>
        <TResult>(this: IEnumerable<TResult>): IEnumerable<TResult>
    }
    orderBy: {
        (predicate: (x: TSource) => number | string): IOrderedEnumerable<TSource>
        (predicate: (x: TSource) => number, comparer: IComparer<number>): IOrderedEnumerable<TSource>
        (predicate: (x: TSource) => string, comparer: IComparer<string>): IOrderedEnumerable<TSource>
    }
    reverse:() => IEnumerable<TSource>
    select: <OUT>(selector: (x : TSource) => OUT) => IEnumerable<OUT>
    selectMany: <OUT>(selector: (x : TSource) => Iterable<OUT>) => IEnumerable<OUT>
    sequenceEquals: (second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>) => boolean
    single: {
        (): TSource
        (predicate: (x: TSource) => boolean): TSource
    }
    singleOrDefault: {
        (): TSource | null
        (predicate: (x: TSource) => boolean): TSource | null
    }
    skip: (count: number) => IEnumerable<TSource>
    skipWhile: {
        (predicate: (x: TSource) => boolean): IEnumerable<TSource>,
        (predicate: (x: TSource, index: number) => boolean): IEnumerable<TSource>
    },
    sum: {
        (this: IEnumerable<number>): number
        (this: IEnumerable<TSource>, selector: (x : TSource) => number): number
    }
    toArray: () => TSource[]
    toMap: <TKey>(selector: (x: TSource) => TKey) => Map<TKey, TSource[]>
    toSet: () => Set<TSource>
    union: {
        (second: IEnumerable<TSource>, comparer: IEqualityComparer<TSource>): IEnumerable<TSource>
        (second: IEnumerable<TSource>): IEnumerable<TSource>
    }
    where: {
        (predicate: (x : TSource) => boolean): IEnumerable<TSource>,
        (predicate: (x : TSource, index: number) => boolean): IEnumerable<TSource>
    }
    zip: {
        <TSecond, TResult>(second: Iterable<TSecond>, resultSelector: (x: TSource, y: TSecond) => TResult): IEnumerable<TResult>,
        <TSecond>(second: Iterable<TSecond>): IEnumerable<Tuple<TSource, TSecond>>
    }
    [Symbol.iterator]: () => IterableIterator<TSource>
}

export interface IOrderedEnumerable<TSource> extends IEnumerable<TSource> {
    ThenBy: {
        (keySelector: (x: TSource) => string | number): IOrderedEnumerable<TSource>
        (keySelector: (x: TSource) => number, comparer: IComparer<number>): IOrderedEnumerable<TSource>
        (keySelector: (x: TSource) => string, comparer: IComparer<string>): IOrderedEnumerable<TSource>        
    }
    GetMap: () => RecOrdMap<TSource>
}

export interface IGrouping<TKey, TElement> extends IEnumerable<TElement> {
    readonly key: TKey
}