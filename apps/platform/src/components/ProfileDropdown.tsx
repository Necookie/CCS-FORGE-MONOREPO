import React, { useState, useRef, useEffect } from 'react';

interface ProfileDropdownProps {
  email?: string;
}

export default function ProfileDropdown({ email = 'User' }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const initial = email.charAt(0).toUpperCase();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-sm font-medium text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/30 hover:bg-white hover:shadow-[0_0_18px_rgba(138,43,226,0.16)] focus:outline-none focus:ring-2 focus:ring-purple-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-purple-500/30 dark:hover:bg-white/10"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="uppercase">{initial}</span>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-3 w-64 origin-top-right overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] divide-y divide-slate-200 focus:outline-none dark:border-white/10 dark:bg-[#252634] dark:divide-white/10 dark:shadow-[0_0_32px_rgba(138,43,226,0.16)]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.12),transparent_38%),radial-gradient(circle_at_left,rgba(138,43,226,0.16),transparent_36%)] px-4 py-4" role="none">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400" role="none">
              Signed in as
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900 truncate dark:text-white" role="none">
              {email}
            </p>
          </div>
          <div className="py-1" role="none">
            <a
              href="/profile"
              className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              role="menuitem"
              tabIndex={-1}
            >
              Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              role="menuitem"
              tabIndex={-1}
            >
              Settings
            </a>
          </div>
          <div className="py-1" role="none">
            <form method="POST" action="/api/auth/signout" role="none">
              <button
                type="submit"
                className="block w-full px-4 py-2.5 text-left text-sm text-rose-600 transition-colors hover:bg-rose-500/10 hover:text-rose-700 dark:text-rose-300 dark:hover:bg-rose-500/10 dark:hover:text-rose-200"
                role="menuitem"
                tabIndex={-1}
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
