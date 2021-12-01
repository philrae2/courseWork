// refactor to an if statement return foo() ? 'bar' : qux();

 if (foo()) {
  return "bar";
} else {
  return qux();
}