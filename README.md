# Iman West African Restaurant — Website

**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Resend · Vercel

---

## Setup (5 minutes)

### 1. Install dependencies
```
npm install
```

### 2. Create your environment file
On Windows (PowerShell):
```
copy .env.example .env.local
```
On Mac/Linux:
```
cp .env.example .env.local
```

### 3. Fill in .env.local

Open `.env.local` in Notepad and fill in:

```
NEXT_PUBLIC_SQUARE_ORDER_URL=   ← Your Square Online ordering link
RESEND_API_KEY=                 ← From resend.com (free account)
OWNER_EMAIL=                    ← Where form submissions go
FROM_EMAIL=                     ← noreply@yourdomain.com
```

### 4. Run locally
```
npm run dev
```
Open http://localhost:3000

---

## Getting Your Square Ordering URL

1. Log in at squareup.com
2. Go to Online Store (or Square Online)
3. Copy the link to your ordering page
4. Paste it as NEXT_PUBLIC_SQUARE_ORDER_URL in .env.local

---

## Setting Up Email (Resend)

1. Go to resend.com → sign up free
2. Add your domain (e.g. imanwestafrican.com)
3. Create an API key
4. Paste it as RESEND_API_KEY in .env.local

Without this set up, the contact and catering forms won't send emails.
The site will still work — forms just won't deliver.

---

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Add all your .env.local variables in Project Settings → Environment Variables
4. Click Deploy

That's it. Vercel auto-deploys every time you push to GitHub.

---

## Updating Content

All site content is in one file: **lib/utils.ts**

- **Menu items/prices** → edit the `MENU` array
- **Business hours** → edit the `RESTAURANT.hours` array
- **Phone/address/email** → edit the `RESTAURANT` object
- **Reviews** → edit the `REVIEWS` array
- **Promotions** → edit the `PROMOS` array in `app/promotions/page.tsx`

No CMS needed. Edit the file, push to GitHub, Vercel redeploys in ~30 seconds.

---

## Pages

| Page | URL | File |
|------|-----|------|
| Home | / | app/page.tsx |
| Menu | /menu | app/menu/page.tsx |
| Catering | /catering | app/catering/page.tsx |
| Contact | /contact | app/contact/page.tsx |
| Promotions | /promotions | app/promotions/page.tsx |

---

## Notes

- The "Order Online" button links directly to your Square ordering page
- Square handles all payments — nothing is processed on this site
- The sticky orange button appears on mobile when you scroll down
- Forms send emails via Resend when RESEND_API_KEY is set
