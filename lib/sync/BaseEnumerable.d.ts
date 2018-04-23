import { IAsyncEnumerable } from "./../async/async";
import { IAsyncEqualityComparer } from "./../shared/IAsyncEqualityComparer";
import { IComparer, IEqualityComparer, IGrouping, InferType, ITuple, OfType } from "./../shared/shared";
import { IEnumerable } from "./IEnumerable";
import { IOrderedEnumerable } from "./IOrderedEnumerable";
/**
 * Container for all IEnumerable methods
 * to apply to built in ECMAScript collections
 * and what not
 */
export declare abstract class BaseEnumerable<T> implements IEnumerable<T> {
    aggregate(func: (x: T, y: T) => T): T;
    aggregate<TAccumulate>(seed: TAccumulate, func: (x: TAccumulate, y: T) => TAccumulate): TAccumulate;
    aggregate<TAccumulate, TResult>(seed: TAccumulate, func: (x: TAccumulate, y: T) => TAccumulate, resultSelector: (x: TAccumulate) => TResult): T;
    all(predicate: (x: T) => boolean): boolean;
    allAsync(predicate: (x: T) => Promise<boolean>): Promise<boolean>;
    any(predicate?: (x: T) => boolean): boolean;
    anyAsync(predicate: (x: T) => Promise<boolean>): Promise<boolean>;
    asAsync(): IAsyncEnumerable<T>;
    average(this: IEnumerable<number>): number;
    average(selector: (x: T) => number): number;
    averageAsync(selector: (x: T) => Promise<number>): Promise<number>;
    concat(second: IEnumerable<T>): IEnumerable<T>;
    contains(value: T): boolean;
    contains(value: T, comparer: IEqualityComparer<T>): boolean;
    count(predicate?: (x: T) => boolean): number;
    countAsync(predicate: (x: T) => Promise<boolean>): Promise<number>;
    distinct(comparer?: IEqualityComparer<T>): IEnumerable<T>;
    elementAt(index: number): T;
    elementAtOrDefault(index: number): T | null;
    except(second: Iterable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T>;
    first(predicate?: (x: T) => boolean): T;
    firstAsync(predicate: (x: T) => Promise<boolean>): Promise<T>;
    firstOrDefault(predicate?: (x: T) => boolean): T | null;
    firstOrDefaultAsync(predicate: (x: T) => Promise<boolean>): Promise<T | null>;
    each(action: (x: T) => void): IEnumerable<T>;
    eachAsync(action: (x: T) => Promise<void>): IAsyncEnumerable<T>;
    groupBy(keySelector: (x: T) => number): IEnumerable<IGrouping<number, T>>;
    groupBy(keySelector: (x: T) => string): IEnumerable<IGrouping<string, T>>;
    groupBy<TKey>(keySelector: (x: T) => TKey, comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>>;
    groupByWithSel<TElement>(keySelector: ((x: T) => number), elementSelector: (x: T) => TElement): IEnumerable<IGrouping<number, TElement>>;
    groupByWithSel<TElement>(keySelector: ((x: T) => string), elementSelector: (x: T) => TElement): IEnumerable<IGrouping<string, TElement>>;
    groupByWithSel<TKey, TElement>(keySelector: ((x: T) => TKey), elementSelector: (x: T) => TElement, comparer: IEqualityComparer<TKey>): IEnumerable<IGrouping<TKey, TElement>>;
    intersect(second: IEnumerable<T>): IEnumerable<T>;
    intersect(second: IEnumerable<T>, comparer: IEqualityComparer<T>): IEnumerable<T>;
    joinByKey<TInner, TKey, TResult>(inner: IEnumerable<TInner>, outerKeySelector: (x: T) => TKey, innerKeySelector: (x: TInner) => TKey, resultSelector: (x: T, y: TInner) => TResult, comparer?: IEqualityComparer<TKey>): IEnumerable<TResult>;
    last(predicate?: (x: T) => boolean): T;
    lastAsync(predicate: (x: T) => Promise<boolean>): Promise<T>;
    lastOrDefault(predicate?: (x: T) => boolean): T | null;
    lastOrDefaultAsync(predicate: (x: T) => Promise<boolean>): Promise<T | null>;
    max(this: IEnumerable<number>): number | never;
    max(selector: (x: T) => number): number | never;
    maxAsync(selector: (x: T) => Promise<number>): Promise<number | never>;
    min(this: IEnumerable<number>): number | never;
    min(selector: (x: T) => number): number | never;
    minAsync(selector: (x: T) => Promise<number>): Promise<number | never>;
    ofType<TType extends OfType>(type: TType): IEnumerable<InferType<TType>>;
    orderBy(predicate: (x: T) => number | string): IOrderedEnumerable<T>;
    orderBy(predicate: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>;
    orderBy(predicate: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>;
    orderByDescending(predicate: (x: T) => number | string): IOrderedEnumerable<T>;
    orderByDescending(predicate: (x: T) => number, comparer: IComparer<number>): IOrderedEnumerable<T>;
    orderByDescending(predicate: (x: T) => string, comparer: IComparer<string>): IOrderedEnumerable<T>;
    reverse(): IEnumerable<T>;
    select<OUT>(selector: (x: T) => OUT): IEnumerable<OUT>;
    select<TKey extends keyof T>(this: IEnumerable<{
        [key: string]: Iterable<T[TKey]>;
    }>, selector: TKey): IEnumerable<T[TKey]>;
    selectAsync<TKey extends keyof T, TResult>(this: IEnumerable<{
        [key: string]: Promise<TResult>;
    }>, key: TKey): IAsyncEnumerable<T[TKey]>;
    selectMany<TBindedSource extends {
        [key: string]: Iterable<TOut>;
    }, TOut>(this: IEnumerable<TBindedSource>, selector: keyof TBindedSource): IEnumerable<TOut>;
    selectMany<OUT>(selector: (x: T) => Iterable<OUT>): IEnumerable<OUT>;
    selectManyAsync<OUT>(selector: (x: T) => Promise<Iterable<OUT>>): IAsyncEnumerable<OUT>;
    sequenceEquals(second: IEnumerable<T>, comparer?: IEqualityComparer<T>): boolean;
    sequenceEqualsAsync(second: IEnumerable<T>, comparer: IAsyncEqualityComparer<T>): Promise<boolean>;
    single(predicate?: (x: T) => boolean): T;
    singleAsync(predicate: (x: T) => Promise<boolean>): Promise<T>;
    singleOrDefault(predicate?: (x: T) => boolean): T | null;
    singleOrDefaultAsync(predicate: (x: T) => Promise<boolean>): Promise<T | null>;
    skip(count: number): IEnumerable<T>;
    skipWhile(predicate: (x: T, index: number) => boolean): IEnumerable<T>;
    skipWhileAsync(predicate: (x: T, index: number) => Promise<boolean>): IAsyncEnumerable<T>;
    sum(this: IEnumerable<number>): number;
    sum(selector: (x: T) => number): number;
    sumAsync(selector: (x: T) => Promise<number>): Promise<number>;
    take(amount: number): IEnumerable<T>;
    takeWhile(predicate: (x: T, index: number) => boolean): IEnumerable<T>;
    takeWhileAsync(predicate: (x: T, index: number) => Promise<boolean>): IAsyncEnumerable<T>;
    toArray(): T[];
    toMap<TKey>(selector: (x: T) => TKey): Map<TKey, T[]>;
    toMapAsync<TKey>(selector: (x: T) => Promise<TKey>): Promise<Map<TKey, T[]>>;
    toSet(): Set<T>;
    union(second: Iterable<T>, comparer?: IEqualityComparer<T>): IEnumerable<T>;
    unionAsync(second: Iterable<T>, comparer: IAsyncEqualityComparer<T>): IAsyncEnumerable<T>;
    where(predicate: (x: T, index: number) => boolean): IEnumerable<T>;
    whereAsync(predicate: (x: T, index: number) => Promise<boolean>): IAsyncEnumerable<T>;
    zip<TSecond>(second: Iterable<TSecond>): IEnumerable<ITuple<T, TSecond>>;
    zip<TSecond, TResult>(second: Iterable<TSecond>, resultSelector: (x: T, y: TSecond) => TResult): IEnumerable<TResult>;
    zipAsync<TSecond, TResult>(second: Iterable<TSecond>, resultSelector: (x: T, y: TSecond) => Promise<TResult>): IAsyncEnumerable<TResult>;
    abstract [Symbol.iterator](): IterableIterator<T>;
}
