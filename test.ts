interface I
{   x: null;
    (a: string) : boolean;
    (b: number) : null;
    f(p: string, q:number) : boolean;
    f(r: string, s:boolean) : string;
}

// function II(ab)
// {
//     return "boolornull";
// }

// II.x = null;
// II.f = function (p0, p1) { return boolean|string}

// let ii = II;
// console.log(II(123));
// console.log(II.x);