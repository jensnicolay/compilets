declare const i : I;

interface J
{
  y: null;
}


interface I
{
  x: I;

  (a: string): boolean;
  (b: number): null;

  f(p: string, q: number): J;
  f(r: string, s: boolean): void;
  
  g: (t: any) => void;
  
  h: () => this;

  o: {x: boolean; y: number};
}