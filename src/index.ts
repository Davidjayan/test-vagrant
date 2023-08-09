export class Memory {
  private memory = new Array(3);
  constructor(s1: any, s2: any, s3: any) {
    this.memory[0] = s1;
    this.memory[1] = s2;
    this.memory[2] = s3;
  }
  addToMemory(params: any) {
    this.memory.shift();
    this.memory.push(params);
    return this.memory;
  }

  getMemory() {
    return this.memory;
  }
}
