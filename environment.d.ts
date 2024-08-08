declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_APP_API: string;
      PORT?: string;
    }
  }
}
export {};
