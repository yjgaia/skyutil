export default class SkyUtil {
    static pull(array: any[], ...removeList: any[]): void;
    static insert(array: any[], index: number, item: any): void;
    static random(min: number, max: number): number;
    static repeat(times: number, func: (index: number) => any): any[];
    static repeatAsync(times: number, func: (index: number) => Promise<any>): Promise<any[]>;
}
//# sourceMappingURL=SkyUtil.d.ts.map