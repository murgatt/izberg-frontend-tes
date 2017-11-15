export const changeValue = (value, id) => {
    return {
        type    : 'CHANGE_VALUE',
        value   : value,
        id      : id,
    }
};
