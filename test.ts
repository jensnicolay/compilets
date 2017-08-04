declare const i : I;

interface I
{
  x: null;
  
  (a: string): boolean;
  (b: number): null;
  
  f(p: string, q: number): boolean;
  f(r: string, s: boolean): string;
}
