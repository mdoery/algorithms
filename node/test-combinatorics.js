"use strict";
var combinatorics = require("./combinatorics").combinatorics;
var assert = require("assert");
var vows = require("vows");

var suite = vows.describe("Tests the combinatorics.js module");

suite.addBatch({
	"Test permutations on a small array of size 3" : {
		topic : function() {
			var arr = ["abc","def","ghi"];
			return combinatorics.getAllPermutations(arr);
		},
		"Checks result against known set of permutations" : function(err, result)
		{
			var expected = [
				[ 'ghi', 'def', 'abc' ], 
				[ 'def', 'ghi', 'abc' ], 
				[ 'ghi', 'abc', 'def' ], 
				[ 'abc', 'ghi', 'def' ], 
				[ 'def', 'abc', 'ghi' ], 
				[ 'abc', 'def', 'ghi' ] 
			];

			assert.equal(expected.length, 6); // 3! is 6
			assert.equal(result.length, 6);
			var len = expected.length;
			// This method alters result
			for (var i = 0; i < len; i++) {
				var arr1 = expected[i];
				var arr2 = result[i];
				for (var j = 0; j < 3; j++) {
					// e.g. compare expected 'ghi' with result 'ghi'
					assert.equal(arr1[j], arr2[j]);
				}
			}
		}
	},
	"Test permutations on an array of size 4" : {
		topic : function() {
			var arr = ["a","b","c","d"];
			return combinatorics.getAllPermutations(arr);
		},
		"Checks result against known set of permutations" : function(err, result)
		{
			var expected = [
				[ 'd', 'c', 'b', 'a' ],
				[ 'c', 'd', 'b', 'a' ],
				[ 'd', 'b', 'c', 'a' ],
				[ 'b', 'd', 'c', 'a' ],
				[ 'c', 'b', 'd', 'a' ],
				[ 'b', 'c', 'd', 'a' ],
				[ 'd', 'c', 'a', 'b' ],
				[ 'c', 'd', 'a', 'b' ],
				[ 'd', 'a', 'c', 'b' ],
				[ 'a', 'd', 'c', 'b' ],
				[ 'c', 'a', 'd', 'b' ],
				[ 'a', 'c', 'd', 'b' ],
				[ 'd', 'b', 'a', 'c' ],
				[ 'b', 'd', 'a', 'c' ],
				[ 'd', 'a', 'b', 'c' ],
				[ 'a', 'd', 'b', 'c' ],
				[ 'b', 'a', 'd', 'c' ],
				[ 'a', 'b', 'd', 'c' ],
				[ 'c', 'b', 'a', 'd' ],
				[ 'b', 'c', 'a', 'd' ],
				[ 'c', 'a', 'b', 'd' ],
				[ 'a', 'c', 'b', 'd' ],
				[ 'b', 'a', 'c', 'd' ],
				[ 'a', 'b', 'c', 'd' ]
			];

			assert.equal(expected.length, 24); // 4! is 24
			assert.equal(result.length, 24);
			var len = expected.length;
			// This method alters result
			for (var i = 0; i < len; i++) {
				var arr1 = expected[i];
				var arr2 = result[i];
				for (var j = 0; j < 4; j++) {
					// e.g. compare expected 'a' with result 'a'
					assert.equal(arr1[j], arr2[j]);
				}
			}
		}
	},	
});

suite["export"](module);