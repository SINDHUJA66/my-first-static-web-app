document.addEventListener('DOMContentLoaded', function () {
  const productContainer = document.getElementById('product-container');
  const showProductButton = document.getElementById('show-product-button');

  const makeupProducts = [
    { name: 'Velvet Matte Lipstick', brand: 'MAC', shade: 'Ruby Woo', price: '$20' },
    { name: 'Naked Eyeshadow Palette', brand: 'Urban Decay', shade: 'Heat', price: '$54' },
    { name: 'Diorshow Mascara', brand: 'Dior', type: 'Volumizing', price: '$29.50' },
  ];

  showProductButton.addEventListener('click', function () {
    const randomProduct = makeupProducts[Math.floor(Math.random() * makeupProducts.length)];
    const productElement = document.createElement('div');
    productElement.className = 'makeup-product';
    productElement.innerHTML = `
      <h3>${randomProduct.name}</h3>
      <p>Brand: ${randomProduct.brand}</p>
      ${randomProduct.shade ? `<p>Shade: ${randomProduct.shade}</p>` : ''}
      ${randomProduct.type ? `<p>Type: ${randomProduct.type}</p>` : ''}
      <p>Price: ${randomProduct.price}</p>
    `;
    productContainer.innerHTML = '';
    productContainer.appendChild(productElement);
  });
});
