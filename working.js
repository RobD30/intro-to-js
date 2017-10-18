function foo(b) {
    a *= 2;
    a += b;
}

a = 10;

foo(5);
foo(25);
foo(100);

console.log(a);