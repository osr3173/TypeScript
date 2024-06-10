const greet = (name: string, greeting?: string) => {
  return `${greeting ?? "hello"} ${name}`;
};

console.log(greet("김타입", "안녕!"));
console.log(greet("김타입"));
