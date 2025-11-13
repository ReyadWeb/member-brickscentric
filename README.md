# Members Portal (Bricks Centric)
Frontend portal for customers to view licenses and downloads.

## Quick start
```bash
npm i
npm run dev
```

## Environment
Create `.env.local`:
```
NEXT_PUBLIC_API_BASE=https://api.brickscentric.com
NEXT_PUBLIC_UPDATES_BASE=https://updates.brickscentric.com/bricks-centric
```

## Routes
- `/` Dashboard
- `/licenses` License check via middleware (`/wp-json/brxupdates/v1/check`)
- `/downloads` Shows latest version from `info.json`

Deploy to Cloudflare Pages. Set the NEXT_PUBLIC_* env vars in Pages settings.
