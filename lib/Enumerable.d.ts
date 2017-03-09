import { IComparer, IConstructor, IGrouping, IEnumerable, IOrderedEnumerable, IEqualityComparer, RecOrdMap, Tuple } from "./Interfaces";
export declare class BasicEnumerable<T> implements IEnumerable<T> {
    private iterator;
    constructor(iterator: () => IterableIterator<T>);
    aggregate<TAccumulate, TResult>(seedOrFunc: ((x: T, y: T) => T) | TAccumulate, func?: (x: TAccumulate, y: T) => TAccumulate, resultSelector?: (x: TAccumulate) => TResult): T | TAccumulate | TResult;
    all(predicate: (x: T) => boolean): boolean;
    any<T>(predicate?: (x: T) => boolean): boolean;
    average(selector?: (x: T) => number): number;
    concat(second: IEnumerable<T>): IEnumerable<T>;
    contains(value: T, comparer?: IEqualityComparer<T>): boolean;
    count(predicate?: (x: T) => boolean): number;
    distinct<T>(comparer?: IEqualityComparer<T>): IEnumerable<T>;
    elementAt(index: number): T;
    elementAtOrDefault(index: number): T | null;
    except(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T>;
    first<T>(predicate?: (x: T) => boolean): T;
    firstOrDefault<T>(predicate?: (x: T) => boolean): T | null;
    each<T>(action: (x: T) => void): IEnumerable<T>;
    groupBy(keySelector: (x: T) => string): IEnumerable<IGrouping<string, T>>;
    groupBy(keySelector: (x: T) => number): IEnumerable<IGrouping<number, T>>;
    groupBy<TKey>(keySelector: (x: T) => TKey, comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>>;
    groupByWithSel<TSource, TKey, TElement>(keySelector: ((x: TSource) => TKey), elementSelector: (x: TSource) => TElement, comparer?: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>;
    intersect(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T>;
    joinByKey<TInner, TKey, TResult>(inner: IEnumerable<TInner>, outerKeySelector: (x: T) => TKey, innerKeySelector: (x: TInner) => TKey, resultSelector: (x: T, y: TInner) => TResult, comparer?: IEqualityComparer<TKey>): IEnumerable<TResult>;
    last<T>(predicate?: (x: T) => boolean): T;
    lastOrDefault<T>(predicate?: (x: T) => boolean): T;
    max(this: IEnumerable<number> | IEnumerable<T>, selector?: (x: T) => number): number;
    min(this: IEnumerable<number> | IEnumerable<T>, selector?: (x: T) => number): number;
    ofType<TResult>(type?: IConstructor<TResult> | string): IEnumerable<TResult>;
    orderBy(predicate: (x: T) => string | number, comparer?: IComparer<string | number>): IOrderedEnumerable<T>;
    orderByDescending(predicate: (x: T) => string | number, comparer?: IComparer<string | number>): IOrderedEnumerable<T>;
    reverse(): IEnumerable<T>;
    select<OUT>(selector: (x: T) => OUT): IEnumerable<OUT>;
    selectMany<Y>(selector: (x: T) => Iterable<Y>): IEnumerable<Y>;
    sequenceEquals(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): boolean;
    single(predicate?: (x: T) => boolean): T;
    singleOrDefault(predicate?: (x: T) => boolean): T | null;
    skip(count: number): IEnumerable<T>;
    skipWhile(predicate: ((x: T) => boolean) | ((x: T, index: number) => boolean)): IEnumerable<T>;
    sum(this: IEnumerable<number> | IEnumerable<T>, selector?: (x: T) => number): number;
    take(amount: number): IEnumerable<T>;
    takeWhile(predicate: ((x: T) => boolean) | ((x: T, index: number) => boolean)): IEnumerable<T>;
    toArray(): T[];
    toMap<TKey>(selector: (x: T) => TKey): Map<TKey, T[]>;
    toSet(): Set<T>;
    union(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T>;
    where(predicate: ((x: T) => boolean) | ((x: T, index: number) => boolean)): IEnumerable<T>;
    zip<Y, OUT>(second: Iterable<Y>, resultSelector?: (x: T, y: Y) => OUT): IEnumerable<OUT> | IEnumerable<Tuple<T, Y>>;
    [Symbol.iterator](): IterableIterator<T>;
}
export declare class Grouping<TKey, Element> extends Array<Element> implements IGrouping<TKey, Element> {
    readonly key: TKey;
    constructor(key: TKey, startingItem: Element);
}
export declare class OrderedEnumerableDescending<T> extends BasicEnumerable<T> implements IOrderedEnumerable<T> {
    private map;
    private comparer;
    private static unrollAndSort<T>(map, comparer?);
    private static generate<T>(mapFunc, comparer?);
    constructor(map: () => RecOrdMap<T>, comparer?: IComparer<number | string>);
    getMap(): RecOrdMap<T>;
    thenBy(keySelector: ((x: T) => number) | ((x: T) => string), comparer?: IComparer<number | string>): IOrderedEnumerable<T>;
    thenByDescending(keySelector: ((x: T) => number) | ((x: T) => string), comparer?: IComparer<number | string>): IOrderedEnumerable<T>;
}
export declare class OrderedEnumerable<T> extends BasicEnumerable<T> implements IOrderedEnumerable<T> {
    private map;
    private comparer;
    private static unrollAndSort<T>(map, comparer?);
    private static generate<T>(mapFunc, comparer?);
    constructor(map: () => RecOrdMap<T>, comparer?: IComparer<number | string>);
    getMap(): RecOrdMap<T>;
    thenBy(keySelector: ((x: T) => number) | ((x: T) => string), comparer?: IComparer<number | string>): IOrderedEnumerable<T>;
    thenByDescending(keySelector: ((x: T) => number) | ((x: T) => string), comparer?: IComparer<number | string>): IOrderedEnumerable<T>;
}
export declare class Enumerable {
    static aggregate<TSource>(source: IEnumerable<TSource>, func: (x: TSource, y: TSource) => TSource): TSource;
    static aggregate<TSource, TAccumulate>(source: IEnumerable<TSource>, seed: TAccumulate, func: (x: TAccumulate, y: TSource) => TAccumulate): TAccumulate;
    static aggregate<TSource, TAccumulate, TResult>(source: IEnumerable<TSource>, seed: TAccumulate, func: (x: TAccumulate, y: TSource) => TAccumulate, resultSelector: (x: TAccumulate) => TResult): TResult;
    private static aggregate_1<TSource>(source, func);
    private static aggregate_2<TSource, TAccumulate>(source, seed, func);
    private static aggregate_3<TSource, TAccumulate, TResult>(source, seed, func, resultSelector);
    static all<TSource>(source: IEnumerable<TSource>, predicate: (x: TSource) => boolean): boolean;
    static any<TSource>(source: IEnumerable<TSource>, predicate?: (x: TSource) => boolean): boolean;
    private static any_1<TSource>(source);
    private static any_2<TSource>(source, predicate);
    static average<TSource>(source: IEnumerable<TSource> | IEnumerable<number>, selector?: (x: TSource) => number): number;
    private static average_1(source);
    private static average_2<TSource>(source, func);
    static concat<TSource>(first: IEnumerable<TSource>, second: IEnumerable<TSource>): IEnumerable<TSource>;
    static contains<TSource>(source: IEnumerable<TSource>, value: TSource, comparer?: IEqualityComparer<TSource>): boolean;
    static count<TSource>(source: IEnumerable<TSource>, predicate?: (x: TSource) => boolean): number;
    private static count_1<T>(source);
    private static count_2<T>(source, predicate);
    static distinct<TSource>(source: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): BasicEnumerable<TSource>;
    static elementAt<TSource>(source: IEnumerable<TSource>, index: number): TSource;
    static elementAtOrDefault<TSource>(source: IEnumerable<TSource>, index: number): TSource | null;
    static enumerateObject<TInput>(source: TInput): IEnumerable<Tuple<keyof TInput, TInput[keyof TInput]>>;
    static except<TSource>(first: IEnumerable<TSource>, second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>;
    static first<TSource>(source: IEnumerable<TSource>, predicate?: (x: TSource) => boolean): TSource;
    private static first_1<T>(source);
    private static first_2<T>(source, predicate);
    static firstOrDefault<T>(source: IEnumerable<T>, predicate?: (x: T) => boolean): T | null;
    private static firstOrDefault_1<T>(source);
    private static firstOrDefault_2<T>(source, predicate);
    static flatten<TSource>(source: IEnumerable<TSource | Iterable<TSource>>): IEnumerable<TSource>;
    static flatten<TSource>(source: IEnumerable<TSource | Iterable<TSource>>, shallow: false): IEnumerable<TSource>;
    static flatten<TSource>(source: IEnumerable<TSource | Iterable<TSource>>, shallow: true): IEnumerable<TSource | Iterable<TSource>>;
    static each<TSource>(source: IEnumerable<TSource>, action: (x: TSource) => void): IEnumerable<TSource>;
    static groupBy<TSource>(source: IEnumerable<TSource>, keySelector: (x: TSource) => number): IEnumerable<IGrouping<number, TSource>>;
    static groupBy<TSource>(source: IEnumerable<TSource>, keySelector: (x: TSource) => string): IEnumerable<IGrouping<string, TSource>>;
    static groupBy<TSource, TKey>(source: IEnumerable<TSource>, keySelector: (x: TSource) => TKey, comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TSource>>;
    private static groupBy_0_Simple<TSource>(source, keySelector);
    private static groupBy_0<TSource, TKey>(source, keySelector, comparer);
    static groupByWithSel<TSource, TElement>(source: IEnumerable<TSource>, keySelector: ((x: TSource) => number), elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<number, TElement>>;
    static groupByWithSel<TSource, TElement>(source: IEnumerable<TSource>, keySelector: ((x: TSource) => string), elementSelector: (x: TSource) => TElement): IEnumerable<IGrouping<string, TElement>>;
    static groupByWithSel<TSource, TKey, TElement>(source: IEnumerable<TSource>, keySelector: ((x: TSource) => TKey), elementSelector: (x: TSource) => TElement, comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>;
    private static GroupBy_1_Simple<TSource, TElement>(source, keySelector, elementSelector);
    private static GroupBy_1<TSource, TKey, TElement>(source, keySelector, elementSelector, comparer);
    static groupByWithResult<TSource, TKey, TResult>(source: IEnumerable<TSource>, keySelector: ((x: TSource) => TKey) | ((x: TSource) => string) | ((x: TSource) => number), resultSelector: (x: string | number | TKey, values: IEnumerable<TSource>) => TResult, comparer?: IEqualityComparer<TKey>): IEnumerable<TResult>;
    private static GroupBy_2_Simple<TSource, TResult>(source, keySelector, resultSelector);
    private static GroupBy_2<TSource, TKey, TResult>(source, keySelector, resultSelector, comparer?);
    static GroupByWithResultAndSelector<TSource, TKey, TElement, TResult>(source: IEnumerable<TSource>, keySelector: ((x: TSource) => TKey) | ((x: TSource) => string) | ((x: TSource) => number), elementSelector: (x: TSource) => TElement, resultSelector: ((key: TKey, values: IEnumerable<TElement>) => TResult) | ((key: string | number, values: IEnumerable<TElement>) => TResult), comparer?: IEqualityComparer<TKey>): IEnumerable<TResult>;
    private static GroupBy_3<TSource, TKey, TElement, TResult>(source, keySelector, elementSelector, resultSelector, comparer?);
    private static GroupBy_3_Simple<TSource, TElement, TResult>(source, keySelector, elementSelector, resultSelector);
    static Join<TOuter, TInner, TKey, TResult>(outer: IEnumerable<TOuter>, inner: IEnumerable<TInner>, outerKeySelector: (x: TOuter) => TKey, innerKeySelector: (x: TInner) => TKey, resultSelector: (x: TOuter, y: TInner) => TResult, comparer?: IEqualityComparer<TKey>): IEnumerable<TResult>;
    static intersect<TSource>(first: IEnumerable<TSource>, second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>;
    static partition<TSource>(source: IEnumerable<TSource>, predicate: (x: TSource) => boolean): TSource[][];
    static select<TSource, TResult>(source: IEnumerable<TSource>, selector: (x: TSource) => TResult): IEnumerable<TResult>;
    static select<TSource, TKey extends keyof TSource>(source: IEnumerable<TSource>, key: TKey): IEnumerable<TSource[TKey]>;
    private static select_1<TSource, TResult>(source, selector);
    private static select_2<TSource, TKey>(source, key);
    static selectMany<T, Y>(source: IEnumerable<T>, selector: (x: T) => Iterable<Y>): IEnumerable<Y>;
    static single<TSource>(source: IEnumerable<TSource>, predicate?: (x: TSource) => boolean): TSource;
    private static single_1<TSource>(source);
    private static single_2<TSource>(source, predicate);
    static singleOrDefault<TSource>(source: IEnumerable<TSource>, predicate?: (x: TSource) => boolean): TSource | null;
    private static singleOrDefault_1<TSource>(source);
    private static singleOrDefault_2<TSource>(source, predicate);
    static skipWhile<TSource>(source: IEnumerable<TSource>, predicate: ((x: TSource) => boolean) | ((x: TSource, index: number) => boolean)): IEnumerable<TSource>;
    private static skipWhile_1<TSource>(source, predicate);
    private static skipWhile_2<TSource>(source, predicate);
    static skip<TSource>(source: IEnumerable<TSource>, count: number): IEnumerable<TSource>;
    static empty<TSource>(): IEnumerable<TSource>;
    static last<TSource>(source: IEnumerable<TSource>, predicate?: (x: TSource) => boolean): TSource;
    private static last_1<T>(source);
    private static last_2<T>(source, predicate);
    static lastOrDefault<T>(source: IEnumerable<T>, predicate?: (x: T) => boolean): T | null;
    private static lastOrDefault_1<T>(source);
    private static lastOrDefault_2<T>(source, predicate);
    static max(source: IEnumerable<number>): number;
    static max<TSource>(source: IEnumerable<TSource>, selector: (x: TSource) => number): number;
    private static max_1(source);
    private static max_2<TSource>(source, selector);
    static min(source: IEnumerable<number>): number;
    static min<TSource>(source: IEnumerable<TSource>, selector: (x: TSource) => number): number;
    private static min_1(source);
    private static min_2(source, selector);
    static ofType<TSource, TResult>(source: IEnumerable<TSource>, type?: IConstructor<TResult> | string): IEnumerable<TResult>;
    private static orderByInner<TSource>(source, keySelector);
    static orderBy<TSource>(source: IEnumerable<TSource>, keySelector: (x: TSource) => number | string, comparer?: IComparer<number | string>): IOrderedEnumerable<TSource>;
    static orderByDescending<TSource>(source: IEnumerable<TSource>, keySelector: (x: TSource) => number | string, comparer?: IComparer<number | string>): IOrderedEnumerable<TSource>;
    static range(start: number, count: number): IEnumerable<number>;
    static repeat<T>(element: T, count: number): IEnumerable<T>;
    static reverse<TSource>(source: IEnumerable<TSource>): IEnumerable<TSource>;
    static sequenceEquals<TSource>(first: IEnumerable<TSource>, second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): boolean;
    static sum<TSource>(source: IEnumerable<number> | IEnumerable<TSource>, selector?: (x: TSource) => number): number;
    private static sum_1(source);
    private static sum_2<TSource>(source, selector);
    static take<T>(source: IEnumerable<T>, amount: number): IEnumerable<T>;
    static takeWhile<T>(source: IEnumerable<T>, predicate: ((x: T) => boolean) | ((x: T, index: number) => boolean)): IEnumerable<T>;
    private static takeWhile_1<T>(source, predicate);
    private static takeWhile_2<T>(source, predicate);
    static thenBy<TSource>(source: IOrderedEnumerable<TSource>, keySelector: ((x: TSource) => number) | ((x: TSource) => string), comparer?: IComparer<number | string>): IOrderedEnumerable<TSource>;
    static thenByDescending<TSource>(source: IOrderedEnumerable<TSource>, keySelector: ((x: TSource) => number) | ((x: TSource) => string), comparer?: IComparer<number | string>): IOrderedEnumerable<TSource>;
    static toArray<TSource>(source: IEnumerable<TSource>): TSource[];
    static toMap<K, V>(source: IEnumerable<V>, selector: (x: V) => K): Map<K, V[]>;
    static toObject<TSource>(source: IEnumerable<TSource>, selector: (x: TSource) => string): {
        [key: string]: TSource;
    };
    static toSet<TSource>(source: IEnumerable<TSource>): Set<TSource>;
    static union<TSource>(first: IEnumerable<TSource>, second: IEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): IEnumerable<TSource>;
    private static union_1<TSource>(first, second);
    private static union_2<TSource>(first, second, comparer);
    static where<T>(source: IEnumerable<T>, predicate: ((x: T) => boolean) | ((x: T, index: number) => boolean)): IEnumerable<T>;
    private static where_1<T>(source, predicate);
    private static where_2<T>(source, predicate);
    static zip<T, Y, OUT>(source: IEnumerable<T>, second: Iterable<Y>, resultSelector?: (x: T, y: Y) => OUT): IEnumerable<OUT> | IEnumerable<Tuple<T, Y>>;
    private static zip_1<T, Y>(source, second);
    private static zip_2<T, Y, OUT>(source, second, resultSelector);
    private constructor();
}