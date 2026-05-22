/* TRR Learning — single source of truth for all course data.
   priceEGP is the GROSS, VAT-inclusive price the customer pays.
   Net ≈ priceEGP / 1.15. Never hard-code prices anywhere else. */
export const COURSES = [
  {
    id: 'reel-experience-v2-online',
    title: 'The Reel Experience Vol. 2',
    blurb: '15 chapters on how viral content actually works — hooks, structure, editing, production, and distribution. Zero experience required.',
    thumb: '',
    priceEGP: 5000,
    type: 'online',
  },
  {
    id: 'reel-experience-v2-physical',
    title: 'The Reel Experience Vol. 2',
    blurb: 'The same full system, delivered in-person. Hands-on workshop with direct instructor access. Limited seats.',
    thumb: '',
    priceEGP: 5000,
    type: 'physical',
    venue: 'Cairo — venue TBA',
    date: 'Date TBA',
  },
  {
    id: 'hook-masterclass-online',
    title: 'Hook Masterclass',
    blurb: 'One focused session on the eight hook types that stop the scroll. Walk away with a personal hooks library ready to deploy.',
    thumb: '',
    priceEGP: 5000,
    type: 'online',
  },
  {
    id: 'editing-for-retention-online',
    title: 'Editing for Retention',
    blurb: 'Pacing, cut types, the 3-second shift rule, J-cuts, and text overlays — every editing decision that keeps viewers watching to the end.',
    thumb: '',
    priceEGP: 5000,
    type: 'online',
  },
  {
    id: 'brand-identity-workshop',
    title: 'Content Brand Identity Workshop',
    blurb: 'Build a recognisable content style: format selection, tone, visual consistency, and distribution strategy for long-term growth.',
    thumb: '',
    priceEGP: 5000,
    type: 'physical',
    venue: 'Cairo — venue TBA',
    date: 'Date TBA',
  },
];

export function getCourseById(id) {
  return COURSES.find(c => c.id === id) || null;
}

export function formatPrice(priceEGP) {
  return 'EGP ' + priceEGP.toLocaleString('en-EG');
}
