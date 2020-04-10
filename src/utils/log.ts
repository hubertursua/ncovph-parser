/* eslint-disable no-console */

class Log {
  message(text: string): void {
    console.log(text);
  }

  error(error: Error): void {
    console.error(error);
  }

  throwError(error: Error): never {
    console.error(error);
    throw error;
  }
}

export default new Log();
