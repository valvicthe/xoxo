tsx
import Link from 'next/link';

interface NavbarProps {
  user?: {
    username: string;
    robux: number;
    tickets: number;
  };
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <nav className="bg-purple-950/80 backdrop-blur-md border-b border-purple-900/60 text-slate-100 px-6 py-3.5 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-black tracking-widest text-purple-400 hover:text-purple-300 transition">
          XOXO
        </Link>
        <div className="flex space-x-6 text-sm font-semibold text-purple-200/70">
          <Link href="/games" className="hover:text-purple-300 transition">Games</Link>
          <Link href="/catalog" className="hover:text-purple-300 transition">Catalog</Link>
          <Link href="/avatar" className="hover:text-purple-300 transition">Avatar</Link>
        </div>
      </div>

      {/* User Economy & Profile */}
      {user ? (
        <div className="flex items-center space-x-4 text-sm font-semibold">
          <div className="flex items-center space-x-1.5 bg-purple-900/50 px-3.5 py-1.5 rounded-lg border border-purple-800/60">
            <span title="Robux">R$</span>
            <span className="text-purple-300">{user.robux.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-purple-900/50 px-3.5 py-1.5 rounded-lg border border-purple-800/60">
            <span title="Tix">Tx</span>
            <span className="text-amber-300">{user.tickets.toLocaleString()}</span>
          </div>
          <div className="text-purple-100 font-bold pl-2">
            {user.username}
          </div>
        </div>
      ) : (
        <Link href="/login" className="bg-purple-700 hover:bg-purple-600 px-5 py-2 rounded-lg text-sm font-bold text-white transition shadow-lg shadow-purple-950/50">
          Sign In
        </Link>
      )}
    </nav>
  );
}
