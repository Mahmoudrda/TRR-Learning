// ⚠️ PLACEHOLDER AUTH — CLIENT-SIDE ONLY. THIS PROVIDES NO REAL SECURITY.
// Anyone can read these credentials in DevTools or bypass the gate by URL.
// It guards ONLY the My-learning dashboard (delivered online-course content).
// The catalogue and checkout are intentionally public.
// It will be REPLACED by a Cloudflare Pages Function (functions/api/login.js)
// verifying buyers against Airtable. Keep these SIGNATURES stable:
//   login(email, pw)  ->  later: await fetch('/api/login', {...})
//   isAuthenticated() ->  later: checks a signed session cookie set by the Function
//   logout()          ->  later: calls /api/logout to clear the cookie
//   guard()           ->  later: server-side middleware handles this

const DEMO_USERS = [
  { email: 'demo@thereelrecipe.com', password: 'ChangeMe-Demo-2025' },
];

const SESSION_KEY = 'trr_auth';

export function login(email, pw) {
  const match = DEMO_USERS.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === pw
  );
  if (match) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ email: match.email }));
    return true;
  }
  return false;
}

export function isAuthenticated() {
  return !!sessionStorage.getItem(SESSION_KEY);
}

export function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.href = './index.html';
}

export function guard() {
  // NOTE: this client-side check is cosmetic only.
  // Real access control is enforced server-side by a Cloudflare Pages Function.
  if (!isAuthenticated()) {
    window.location.href = './login.html';
  }
}

export function currentUser() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}
