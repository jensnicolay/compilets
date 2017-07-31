function f(x, y)
{
    if (typeof x === "string")
    {
        return true;
    }
    return 123;
}

// f(3);
f("xxx", false);