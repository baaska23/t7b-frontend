export function cloneDeep(entity: any, cache = new WeakMap): any {
    const referenceTypes = ['Array', 'Object', 'Map', 'Set', 'Date'];
    const entityType = Object.prototype.toString.call(entity);
    if (
        !new RegExp(referenceTypes.join('|')).test(entityType) ||
        entity instanceof WeakMap ||
        entity instanceof WeakSet
    ) return entity;
    if (cache.has(entity)) {
        return cache.get(entity);
    }
    const c = new entity.constructor;

    if (entity instanceof Map) {
        entity.forEach((value, key) => c.set(cloneDeep(key), cloneDeep(value)));
    }
    if (entity instanceof Set) {
        entity.forEach((value) => c.add(cloneDeep(value)));
    }
    if (entity instanceof Date) {
        return new Date(entity);
    }
    cache.set(entity, c);
    return Object.assign(c, ...Object.keys(entity).map((prop) => ({ [prop]: cloneDeep(entity[prop], cache) })));
}

export function toLocalDate(date: Date): string {
    return date.getFullYear() + '-' + (date.getMonth()+1).toString().padStart(2, "0") + '-' + date.getDate().toString().padStart(2, "0");
}

export function checkDate(strDate: string, type: 'both' | 'date' | 'dateTime' = 'both'): boolean {
    const datePattern = /^(\d{4}-\d{2}-\d{2})$/;
    const dateTimePattern = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.*))$/;
    switch (type) {
        case 'date':
            return datePattern.test(strDate);
        case 'dateTime':
            return dateTimePattern.test(strDate);
        default:
            return datePattern.test(strDate) || dateTimePattern.test(strDate);
    }
}