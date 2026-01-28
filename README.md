# SwimForce Shop

Swimming training accessories e-commerce platform with training school promotion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe
- **Deployment**: Replit
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Stripe account (for payments)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/EmbeddedArchitectLLC/swimforce-shop.git
   cd swimforce-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual values:
   - `STRIPE_SECRET_KEY` - From Stripe Dashboard
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - From Stripe Dashboard
   - `STRIPE_WEBHOOK_SECRET` - From Stripe CLI or Dashboard

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

### Stripe CLI (for webhook testing)

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Deployment on Replit

1. Connect this GitHub repo to Replit
2. Add secrets in Replit:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_APP_URL` (your Replit deployment URL)
3. Replit will auto-deploy on push to main

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── stripe/          # Stripe API routes
│   │       ├── checkout/    # Create checkout session
│   │       └── webhook/     # Handle Stripe webhooks
│   ├── about/               # About page
│   ├── shop/                # Product listing
│   ├── training/            # Training school info
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── stripe.ts            # Server-side Stripe client
│   └── stripe-client.ts     # Client-side Stripe loader
└── public/
    └── brand/               # Logo and brand assets
```

## TODO

- [ ] Product database (Stripe Products or external DB)
- [ ] Shopping cart with state management
- [ ] User authentication
- [ ] Order history
- [ ] Inventory management
- [ ] Email notifications
- [ ] Admin dashboard

## Contributing

1. Create a feature branch
2. Make changes
3. Submit PR
4. CI must pass before merge

## License

Proprietary - SwimForce
