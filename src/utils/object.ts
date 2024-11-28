function isEmptyObject(obj: Record<string, any>): boolean {
    return Object.keys(obj).length === 0;
}

function isObject(value: any): value is object {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function mergeObjectDeep(target: object, ...sources: object[]): object {
    if (!sources.length) return target;

    const source = sources[0];

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            const targetValue = (target as any)[key];
            const sourceValue = (source as any)[key];

            if (isObject(sourceValue)) {
                // Si el valor es un objeto, hacemos una combinación profunda
                (target as any)[key] = mergeObjectDeep(isObject(targetValue) ? targetValue : {}, sourceValue);
            } else if (Array.isArray(sourceValue)) {
                // Si el valor es un array, lo sobrescribimos directamente
                (target as any)[key] = Array.isArray(targetValue) ? [...targetValue, ...sourceValue] : [...sourceValue];
            } else {
                // Si es un valor primitivo, lo sobrescribimos
                (target as any)[key] = sourceValue;
            }
        });
    }

    return mergeObjectDeep(target, ...sources.slice(1));
}

export { isEmptyObject, isObject, mergeObjectDeep };
