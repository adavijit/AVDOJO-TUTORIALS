export declare class AppService {
    googleLogin(req: any): "No user from google" | {
        message: string;
        user: any;
    };
    hello(): string;
}
