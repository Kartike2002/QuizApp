export const runCode = (userCode, functionName, testCases) => {
  try {
    const fn = new Function(
      `${userCode}; return ${functionName};`
    )();

    for (let test of testCases) {
      const result = fn(...test.input);
      if (JSON.stringify(result) !== JSON.stringify(test.output)) {
        return false;
      }
    }

    return true;
  } catch {
    return false;
  }
};
