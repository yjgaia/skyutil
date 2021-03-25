export default class SkyUtil {

    public static pull(array: any[], ...removeList: any[]): void {
        for (const el of removeList) {
            const index = array.indexOf(el);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
    }

    public static random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
