export default class ErrorRepository {
  constructor() {
    this.data = new Map();
  }

  translate(code) {
    if (!this.data.has(code)) {
      throw new Error('Unknown error');
    }
    return this.data.get(code);
  }
}
