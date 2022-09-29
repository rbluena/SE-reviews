class Logger {
  private static instance: Logger;
  #logs: any[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    const log = { message, timestamp };
    console.log(log);
  }
}

export default Logger.getInstance();
