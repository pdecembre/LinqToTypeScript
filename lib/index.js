"use strict";
const Enumerable_1 = require("./Enumerable");
require("./LinqForArray");
require("./LinqForMap");
var TypesAndHelpers_1 = require("./TypesAndHelpers");
exports.StrictEqualityComparer = TypesAndHelpers_1.StrictEqualityComparer;
exports.EqualityComparer = TypesAndHelpers_1.EqualityComparer;
exports.StringifyComparer = TypesAndHelpers_1.StringifyComparer;
exports.NumberComparer = TypesAndHelpers_1.NumberComparer;
exports.AsTuple = TypesAndHelpers_1.AsTuple;
exports.InvalidOperationException = TypesAndHelpers_1.InvalidOperationException;
exports.ArgumentOutOfRangeException = TypesAndHelpers_1.ArgumentOutOfRangeException;
exports.ArrayIterator = TypesAndHelpers_1.ArrayIterator;
var Enumerable_2 = require("./Enumerable");
exports.Enumerable = Enumerable_2.Enumerable;
function bindLinq(object) {
    const propertyNames = Object.getOwnPropertyNames(Enumerable_1.BasicEnumerable.prototype)
        .filter(v => v !== "constructor");
    for (let prop of propertyNames) {
        object.prototype[prop] = object.prototype[prop] || Enumerable_1.BasicEnumerable.prototype[prop];
    }
}
function initialize() {
    bindLinq(Array);
    bindLinq(Map);
}
exports.initialize = initialize;