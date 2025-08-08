'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Shield, List, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth.tsx";

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated, logout, isInitialized } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline sm:inline-block">
            ScamGuard UPI
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
              Analyse suspicious UPI IDs to detect malware and other breaches, automatically share them with the security community.
          </p>
          <nav className="flex items-center">
            {isInitialized && (
              <>
              {isAuthenticated ? (
                  <>
                    {pathname === '/whitelist' ? (
                       <Link href="/">
                          <Button variant="ghost">
                            <Shield className="mr-2" />
                            Scanner
                          </Button>
                        </Link>
                    ) : (
                       <Link href="/whitelist">
                          <Button variant="ghost">
                            <List className="mr-2" />
                            Whitelist
                          </Button>
                        </Link>
                    )}
                    <Button variant="ghost" onClick={logout}>
                      <LogOut className="mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link href="/login">
                    <Button variant="ghost">
                       <LogIn className="mr-2" />
                       Admin Login
                    </Button>
                  </Link>
                )}
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
