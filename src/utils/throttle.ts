/* eslint-disable */
export const throttle = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
    let flag = true;

    return (...args: Parameters<T>) => {
        if (flag) {
            fn(...args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    };
};
