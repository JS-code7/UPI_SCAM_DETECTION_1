🚨 ScamGuard UPI
Spot scams. Stay safe. Share the knowledge.

ScamGuard UPI is your digital watchdog for suspicious UPI IDs.
Type in a UPI → scan → get instant results.
If it’s shady, you’ll know. If it’s safe, you’ll see.
And the best part? You’re helping the whole community stay scam-free. 🛡️

✨ What Makes It Awesome
🔍 Real-time UPI Scan – Paste a UPI ID and instantly check if it’s flagged.

👮 Admin Power Tools – Manage whitelists and approve safe entries.

☁️ Powered by Firebase – Fast, reliable, globally available hosting.

🎨 Beautiful UI – Built with Next.js 15, React 18, Tailwind CSS, Radix UI, and lucide-react icons.

🛠 Tech Stack
Framework: Next.js 15 + React 18

Styling: Tailwind CSS + Radix UI

Icons: lucide-react

Backend/Hosting: Firebase Hosting (with functions in us-central1)

🚀 Getting Started
1️⃣ Prerequisites

Node.js 18+

npm / yarn / pnpm

2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Run locally

bash
Copy
Edit
npm run dev
# Runs on http://localhost:9002
4️⃣ Build & start

bash
Copy
Edit
npm run build
npm start
📜 Scripts You’ll Use a Lot
Command	What it does
npm run dev	Start local dev server (Turbopack + port 9002)
npm run build	Create production build
npm start	Run the built app
npm run lint	Lint code
npm run typecheck	TypeScript checks
npm run genkit:dev	AI tooling dev mode

🌐 Deploy in Minutes (Firebase)
First time setup:

bash
Copy
Edit
npm install -g firebase-tools
firebase login
firebase init hosting
Deploy:

bash
Copy
Edit
firebase deploy --only hosting
Your config is already in firebase.json — just hit deploy and you’re live. ⚡

🗂 High-Level Project Structure
pgsql
Copy
Edit
src/components   → UI components (Header, Scanner, Admin)
package.json     → Scripts & dependencies
firebase.json    → Hosting config
🤝 Contribute Like a Pro
Fork it 🍴

Create your branch git checkout -b feat/awesome-feature

Commit your changes

Push and open a PR 🚀

📜 License
You choose! (MIT recommended).

