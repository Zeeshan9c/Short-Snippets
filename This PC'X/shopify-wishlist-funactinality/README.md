1. Place the `button-wishlist.liquid` snippet inside your existing product card snippet, or on the `product.liquid` template
   - `{%- render 'button-wishlist', product: product -%}`
   - This will allow customer's to add/remove items to/from their wishlist
2. Replace the snippet in the `product-card-template.liquid` section with your existing product card snippet
   - Same snippet from step 1
3. Create a new page in the Shopify admin:
   - Admin > Online Store > Pages > Add Page
   - Set the new page's `template` to `page.wishlist`
   - This page will display a customer's saved wishlist items
4. Place the script in `theme.liquid` before the closing `</head>` tag
   - `<script src="{{ 'Wishlist.js' | asset_url }}" defer="defer"></script>`