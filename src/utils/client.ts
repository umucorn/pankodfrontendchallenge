import dummyData from './dummyData.json';
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface IFetchedData {
    status: number,
    message?: string,
    data?: unknown,
}

export class Client {
    static async fetchPrograms(shouldError?: boolean): Promise<IFetchedData> {
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
