import { CATEGORIES } from './src/constants/categories';
const totalItems = CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
console.log('Total items in CATEGORIES:', totalItems);
console.log('Categories:', CATEGORIES.map(c => `${c.title} (${c.items.length})`).join(', '));
