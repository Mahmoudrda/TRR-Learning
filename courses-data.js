/* TRR Learning — single source of truth for all course data.
   priceEGP is the GROSS, VAT-inclusive price the customer pays.
   Net ≈ priceEGP / 1.15. Never hard-code prices anywhere else. */
export const COURSES = [
  {
    id: 'reel-experience-v2-online',
    title: 'The Reel Experience Vol. 2',
    blurb: '١٥ فصل بيشرح إزاي المحتوى الفيروسي بيشتغل فعلاً — الهوك، البنية، المونتاج، الإنتاج، والتوزيع. مش محتاج أي خبرة قبل كده.',
    thumb: '',
    priceEGP: 5000,
    type: 'online',
  },
  {
    id: 'reel-experience-v2-physical',
    title: 'The Reel Experience Vol. 2',
    blurb: 'نفس المنظومة الكاملة، بس بشكل حضوري. ورشة عملية مع تواصل مباشر مع المدرب. أماكن محدودة.',
    thumb: '',
    priceEGP: 5000,
    type: 'physical',
    venue: 'القاهرة — المكان هيتحدد قريباً',
    date: 'الموعد هيتحدد قريباً',
  },
  {
    id: 'hook-masterclass-online',
    title: 'Hook Masterclass',
    blurb: 'سيشن متخصص في تمانية أنواع هوك بتوقّف السكرول. هتطلع منه بمكتبة هوكات جاهزة تستخدمها على طول.',
    thumb: '',
    priceEGP: 5000,
    type: 'online',
  },
  {
    id: 'editing-for-retention-online',
    title: 'مونتاج للمشاهدة الكاملة',
    blurb: 'الإيقاع، أنواع القطعات، قاعدة الـ٣ ثواني، الـ J-cuts، والتكست أوفرليز — كل قرار مونتاج بيخلي المشاهد يكمّل لآخر الفيديو.',
    thumb: '',
    priceEGP: 5000,
    type: 'online',
  },
  {
    id: 'brand-identity-workshop',
    title: 'ورشة هوية المحتوى',
    blurb: 'ابني ستايل محتوى مميز: اختيار الفورمات، التون، الاتساق البصري، واستراتيجية التوزيع للنمو على المدى البعيد.',
    thumb: '',
    priceEGP: 5000,
    type: 'physical',
    venue: 'القاهرة — المكان هيتحدد قريباً',
    date: 'الموعد هيتحدد قريباً',
  },
];

export function getCourseById(id) {
  return COURSES.find(c => c.id === id) || null;
}

export function formatPrice(priceEGP) {
  return 'EGP ' + priceEGP.toLocaleString('en-EG');
}
