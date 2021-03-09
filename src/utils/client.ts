import dummyData from './dummyData.json';
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class Client {
    static async fetchPrograms(shouldError?: boolean) {
        await delay(700);
        
        if (shouldError) {
            return {
                status: 500,
                message: "Internal server error",
            }
        }

        return {
            status: 200,
            data: dummyData,
        };
    }
}
