function fullStringMatch(target: string, condition: RegExp | string) {
  const match = target.match(condition);

  // verify it's full string match
  // or could modify regex
  return match && match[0] === target;
}

export { fullStringMatch };
