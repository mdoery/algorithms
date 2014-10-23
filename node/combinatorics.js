"use strict";

(function(exports)
{
var combinatorics = {};
/**
 * Takes an input Array of length n and returns an Array of all n! permutations
 * of the input. This has only been tested on Arrays of Strings but probably 
 * works fine on other things. Test before using!
 * @param {Array} an Array of Strings e.g. ['a', 'b']
 * @return {Array} an Array of Arrays of Strings, e.g. [['a','b'], ['b','a']]
 */
combinatorics.getAllPermutations = function(arr) {
	if (arr.length === 1) {
		return arr.slice();
	} else if (arr.length === 2) {
		return [ [arr[1], arr[0]], [arr[0], arr[1]] ];
	} else {
		var l = [];
		for (var i = 0; i < arr.length; i++) {
			var copy = arr.slice();
			var a = copy.splice(i, 1)[0];
			var subsets = combinatorics.getAllPermutations(copy);
			for (var j = 0; j < subsets.length; j++) {
				var subset = subsets[j];
				if (typeof subset === "object")
					subset.push(a);
				l.push(subset);
			}
		}
		return l;
	}
};

exports.combinatorics = combinatorics;
})(typeof exports==="undefined" ? window : exports);