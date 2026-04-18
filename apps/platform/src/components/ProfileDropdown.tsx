import React, { useState, useRef, useEffect } from 'react';

interface ProfileDropdownProps {
  email?: string;
}

export default function ProfileDropdown({ email = 'User' }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-900 transition-colors"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {/* Default Avatar Placeholder */}
          <span className="uppercase">{email.charAt(0)}</span>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 divide-y divide-zinc-700 focus:outline-none z-50 border border-zinc-700"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="px-4 py-3" role="none">
            <p className="text-sm text-zinc-300" role="none">
              Signed in as
            </p>
            <p className="text-sm font-medium text-white truncate" role="none">
              {email}
            </p>
          </div>
          <div className="py-1" role="none">
            <a
              href="/profile"
              className="text-zinc-300 hover:bg-zinc-700 hover:text-white block px-4 py-2 text-sm transition-colors"
              role="menuitem"
              tabIndex={-1}
            >
              Profile
            </a>
            <a
              href="/settings"
              className="text-zinc-300 hover:bg-zinc-700 hover:text-white block px-4 py-2 text-sm transition-colors"
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
                className="w-full text-left text-red-400 hover:bg-zinc-700 hover:text-red-300 block px-4 py-2 text-sm transition-colors"
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
