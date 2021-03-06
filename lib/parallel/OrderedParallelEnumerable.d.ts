import { IComparer } from "../shared/shared";
import { BasicParallelEnumerable } from "./BasicParallelEnumerable";
import { IOrderedParallelEnumerable } from "./IOrderedParallelEnumerable";
/**
 * Ordered Parallel Enumerable
 * @private
 */
export declare class OrderedParallelEnumerable<T> extends BasicParallelEnumerable<T> implements IOrderedParallelEnumerable<T> {
    private readonly orderedPairs;
    private static asAsyncSortedKeyValues;
    private static asAsyncSortedKeyValuesSync;
    private static asAsyncKeyMapSync;
    private static asAsyncKeyMap;
    private static asSortedKeyValues;
    private static asSortedKeyValuesSync;
    private static asKeyMapSync;
    private static asKeyMap;
    static generateAsync<TSource, TKey>(source: AsyncIterable<TSource> | OrderedParallelEnumerable<TSource>, keySelector: (x: TSource) => Promise<TKey>, ascending: boolean, comparer?: IComparer<TKey>): OrderedParallelEnumerable<TSource>;
    static generate<TSource, TKey>(source: AsyncIterable<TSource> | OrderedParallelEnumerable<TSource>, keySelector: (x: TSource) => TKey, ascending: boolean, comparer?: IComparer<TKey>): OrderedParallelEnumerable<TSource>;
    private constructor();
    thenBy<TKey>(keySelector: (x: T) => TKey, comparer?: IComparer<TKey>): IOrderedParallelEnumerable<T>;
    thenByAsync<TKey>(keySelector: (x: T) => Promise<TKey>, comparer?: IComparer<TKey>): IOrderedParallelEnumerable<T>;
    thenByDescending<TKey>(keySelector: (x: T) => TKey, comparer?: IComparer<TKey>): IOrderedParallelEnumerable<T>;
    thenByDescendingAsync<TKey>(keySelector: (x: T) => Promise<TKey>, comparer?: IComparer<TKey>): IOrderedParallelEnumerable<T>;
}
