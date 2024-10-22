## A small project emulating the video streaming platform twitch.
![image](https://github.com/user-attachments/assets/d7567e53-d416-4f4b-9d47-06ea72d61a2b)

![image](https://github.com/user-attachments/assets/8c83ac00-f189-4526-92f0-3277a8fa1a09)


Tech used:
- **Next.js** - For Back-end and Front-end
- **MySql** - A local database
- **Clerk** - For quick authentication
- **NGrok** - To have a local tunnel
- **Livekit Ingress** - To host the Livestreams
- **UploadThing** - to Upload Profile Image to the database

### You will currently need to setup all these technologies and add the keys in an env file in order to activate the website functionality

**ENV variables**:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Clerk key>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

CLERK_WEBHOOK_SECRET=<Clerk secret>

DATABASE_URL="<local mySQL url>"

LIVEKIT_API_URL=<LiveKit Url>
LIVEKIT_API_KEY=<key>
LIVEKIT_API_SECRET=<Livekit Secret>
NEXT_PUBLIC_LIVEKIT_WS_URL=<Url>

UPLOADTHING_SECRET=<secret UploadThing>
UPLOADTHING_APP_ID=<id UploadThing>
```

## Working on Deployment with **Vercel**
