export const CODING_QUESTIONS = {
  /* ================= ARRAYS ================= */
  arrays: [
    {
      id: 1,
      title: "Sum of Array",
      description: "Return sum of all elements in array",
      functionName: "sumArray",
      testCases: [{ input: [[1, 2, 3]], output: 6 }],
    },
    {
      id: 2,
      title: "Find Maximum",
      description: "Return maximum value from array",
      functionName: "findMax",
      testCases: [{ input: [[4, 9, 2]], output: 9 }],
    },
    {
      id: 3,
      title: "Reverse Array",
      description: "Reverse the array",
      functionName: "reverseArray",
      testCases: [{ input: [[1, 2, 3]], output: [3, 2, 1] }],
    },
    {
      id: 4,
      title: "Count Even Numbers",
      description: "Count even numbers in array",
      functionName: "countEven",
      testCases: [{ input: [[1, 2, 4, 5]], output: 2 }],
    },
    {
      id: 5,
      title: "Find Minimum",
      description: "Return minimum element",
      functionName: "findMin",
      testCases: [{ input: [[6, 2, 8]], output: 2 }],
    },
  ],

  /* ================= STRINGS ================= */
  strings: [
    {
      id: 1,
      title: "Reverse String",
      description: "Reverse a string",
      functionName: "reverseString",
      testCases: [{ input: ["hello"], output: "olleh" }],
    },
    {
      id: 2,
      title: "String Length",
      description: "Return length of string",
      functionName: "stringLength",
      testCases: [{ input: ["abc"], output: 3 }],
    },
    {
      id: 3,
      title: "Check Palindrome",
      description: "Return true if palindrome",
      functionName: "isPalindrome",
      testCases: [{ input: ["madam"], output: true }],
    },
    {
      id: 4,
      title: "Uppercase String",
      description: "Convert string to uppercase",
      functionName: "toUpper",
      testCases: [{ input: ["abc"], output: "ABC" }],
    },
    {
      id: 5,
      title: "Count Vowels",
      description: "Count vowels in string",
      functionName: "countVowels",
      testCases: [{ input: ["hello"], output: 2 }],
    },
  ],

  /* ================= LINKED LIST ================= */
  linkedlist: [
    {
      id: 1,
      title: "Count Nodes",
      description: "Count number of nodes",
      functionName: "countNodes",
      testCases: [{ input: [[1, 2, 3]], output: 3 }],
    },
    {
      id: 2,
      title: "Find Head",
      description: "Return first element",
      functionName: "findHead",
      testCases: [{ input: [[5, 6, 7]], output: 5 }],
    },
    {
      id: 3,
      title: "Find Tail",
      description: "Return last element",
      functionName: "findTail",
      testCases: [{ input: [[5, 6, 7]], output: 7 }],
    },
    {
      id: 4,
      title: "Search Element",
      description: "Check if element exists",
      functionName: "searchElement",
      testCases: [{ input: [[1, 2, 3], 2], output: true }],
    },
    {
      id: 5,
      title: "Sum of Nodes",
      description: "Return sum of nodes",
      functionName: "sumNodes",
      testCases: [{ input: [[1, 2, 3]], output: 6 }],
    },
  ],

  /* ================= STACK ================= */
  stack: [
    {
      id: 1,
      title: "Stack Peek",
      description: "Return top element",
      functionName: "peekStack",
      testCases: [{ input: [[1, 2, 3]], output: 3 }],
    },
    {
      id: 2,
      title: "Stack Pop",
      description: "Remove top element",
      functionName: "popStack",
      testCases: [{ input: [[1, 2, 3]], output: [1, 2] }],
    },
    {
      id: 3,
      title: "Is Stack Empty",
      description: "Check if stack empty",
      functionName: "isEmpty",
      testCases: [{ input: [[]], output: true }],
    },
    {
      id: 4,
      title: "Stack Size",
      description: "Return size of stack",
      functionName: "stackSize",
      testCases: [{ input: [[1, 2]], output: 2 }],
    },
    {
      id: 5,
      title: "Clear Stack",
      description: "Clear stack",
      functionName: "clearStack",
      testCases: [{ input: [[1, 2]], output: [] }],
    },
  ],

  /* ================= HASHMAP ================= */
  hashmap: [
    {
      id: 1,
      title: "Count Keys",
      description: "Count keys in object",
      functionName: "countKeys",
      testCases: [{ input: [{ a: 1, b: 2 }], output: 2 }],
    },
    {
      id: 2,
      title: "Check Key Exists",
      description: "Check if key exists",
      functionName: "hasKey",
      testCases: [{ input: [{ a: 1 }, "a"], output: true }],
    },
    {
      id: 3,
      title: "Get Value",
      description: "Return value of key",
      functionName: "getValue",
      testCases: [{ input: [{ a: 5 }, "a"], output: 5 }],
    },
    {
      id: 4,
      title: "Remove Key",
      description: "Remove key",
      functionName: "removeKey",
      testCases: [{ input: [{ a: 1 }, "a"], output: {} }],
    },
    {
      id: 5,
      title: "Merge Objects",
      description: "Merge two objects",
      functionName: "mergeObjects",
      testCases: [{ input: [{ a: 1 }, { b: 2 }], output: { a: 1, b: 2 } }],
    },
  ],
};
