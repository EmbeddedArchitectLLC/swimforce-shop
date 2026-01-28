import { describe, it, expect } from 'vitest';
import { CATALOG, CATEGORIES } from '@/lib/products';

describe('Product Catalog', () => {
  it('should have products', () => {
    expect(CATALOG.length).toBeGreaterThan(0);
  });

  it('should have valid product structure', () => {
    CATALOG.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
      expect(typeof product.price).toBe('number');
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it('should have categories', () => {
    expect(CATEGORIES.length).toBeGreaterThan(0);
  });

  it('all products should belong to a valid category', () => {
    const categoryIds = CATEGORIES.map((c) => c.id).filter((id) => id !== 'all');
    CATALOG.forEach((product) => {
      expect(categoryIds).toContain(product.category);
    });
  });
});
