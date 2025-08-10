function createDealCard(deal) {
  const card = document.createElement('div');
  card.className = 'deal-card';
  card.innerHTML = `
    <div class="deal-header">
      <span class="deal-source">${deal.source || ''}</span>
    </div>
    <div class="deal-body">
      <h3 class="deal-title">${deal.title || 'No title'}</h3>
      ${deal.price && deal.price !== 'N/A'
        ? `<div class="deal-price">${deal.price}${deal.original_price && deal.original_price !== 'N/A' ? `<span class="deal-original-price">${deal.original_price}</span>` : ''}</div>`
        : `<div class="deal-price" style="color:gray;font-size:14px;">No price info</div>`}
    </div>
    <div class="deal-footer">
      <a href="${deal.link || '#'}" target="_blank" class="deal-link">View Deal</a>
    </div>
  `;
  return card;
}
