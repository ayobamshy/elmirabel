const catalog = [
    { id: 0, name: 'Borsao', price: 7500000 },
    { id: 1, name: 'broadleaf', price: 6800000 },
    { id: 2, name: 'chianti', price: 8200000 }
];

describe('Catalog', () => {
    it('should contain products with id, name, and price', () => {
        catalog.forEach(item => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('name');
            expect(item).toHaveProperty('price');
        });
    });
});
