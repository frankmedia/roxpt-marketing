'use client';

import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = [
    { href: '/', label: 'Home' },
    ...segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/');
      const label = seg
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ');
      return { href, label };
    })
  ];

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex justify-center items-center gap-2 text-sm text-gray-400">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            <a href={c.href} className="hover:text-white transition-colors">
              {c.label}
            </a>
            {i < crumbs.length - 1 && <span className="text-gray-600">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}


