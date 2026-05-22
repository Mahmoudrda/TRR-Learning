/* TRR Learning — single source of truth for all course data.
   priceEGP is the GROSS, VAT-inclusive price the customer pays.
   Net ≈ priceEGP / 1.15. Never hard-code prices anywhere else. */
export const COURSES = [
  {
    id: 'foundations-online',
    title: 'Foundations of Viral Content',
    blurb: '15 chapters. The complete system behind viral content — hooks, psychology, storytelling, editing, production, and distribution. Zero experience required.',
    priceEGP: 5000,
    type: 'online',
  },
  {
    id: 'foundations-physical',
    title: 'Foundations of Viral Content',
    blurb: 'The full system delivered in person. Live workshop, direct instructor access, and real-time feedback. Limited seats.',
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
