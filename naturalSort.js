var order;
var array = [
	"hello10",
	"hello",
	"hello1",
	"hello5",
	"blah1blah",
	"blah",
	"blah10blah",
	"blah2blah",
	"test1test3test4",
	"test10test2test3",
	"test1test2test3",
	"test2test2test3",
	"test1test1test3",
	"test1test3test3"
];

/*
 * Recursive function that compares two strings in a natural asc/desc order
 *
 * @param s1 string to compare
 * @param s2 string to compare
 * @param num result of previous comparison of numbers in s1 and s2
 * @return integer
 */
var comparator = function (s1, s2, num) {
	var c1,
		c2,
		n1,
		n2,
		digit = /\d/;

	// make sort case insensitive
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	for (var i = 0, j = 0; i < s1.length && j < s2.length; i++, j++) {
		c1 = s1.charAt(i);
		c2 = s2.charAt(j);

		// check if c1 and c2 are digits
		if (digit.test(c1) && digit.test(c2)) {
			n1 = "";
			n2 = "";

			// get all consecutive digits for both strings
			while (digit.test(c1)) {
				n1 += c1;
				c1 = s1.charAt(++i);
			}

			while (digit.test(c2)) {
				n2 += c2;
				c2 = s2.charAt(++j);
			}

			// convert n1 and n2 to numbers
			n1 = Number(n1);
			n2 = Number(n2);

			if (s1.charAt(i) != s2.charAt(j)) {
				if (n1 != n2) { return order == "asc" ? n1 - n2 : n2 - n1; }
				else {
					if (s1.charAt(i) < s2.charAt(j)) { return order == "asc" ? -1 : 1; }
					return order == "asc" ? 1 : -1;
				}
			}
			else {
				if (num === 0 || num === undefined) num = n1 - n2;
				return comparator(s1.substr(++i), s2.substr(++j), num, order);
			}
		}
		// either c1 or c2 is a char
		else {
			if (c1 != c2) {
				if (num !== undefined && num !== 0) { return order == "asc" ? num : -num; }
				if (c1 < c2) { return order == "asc" ? -1 : 1; }
				return order == "asc" ? 1 : -1;
			}
		}
	}

	if (num !== undefined && num !== 0) { return order == "asc" ? num : -num; }
	if (s1.length < s2.length) { return order == "asc" ? -1 : 1; }
	if (s1.length > s2.length) {return order == "asc" ? 1 : -1; }
	return 0;
};

console.log("Unsorted:\n", array);

order = "asc";
console.log("\n\nASC:\n", array.sort(comparator));

order = "desc";
console.log("\n\nDESC:\n", array.sort(comparator));










