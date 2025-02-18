// criado arquivo para corrigir erro com a extensão PNG da logo

declare module '*.png' {
    const value: string;
    export default value;
  }