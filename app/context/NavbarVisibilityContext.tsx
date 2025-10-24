"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const NavbarVisibilityContext = createContext<{
  visible: boolean | null;
  showNavbar: () => void;
  hideNavbar: () => void;
  whatsappVisible: boolean | null;
  showWhatsapp: () => void;
  hideWhatsapp: () => void;
}>(
  // default values used only for type-safety; actual initial value is set
  // in the provider using a lazy initializer that reads location/localStorage
  {
    visible: true,
    showNavbar: () => {},
    hideNavbar: () => {},
    whatsappVisible: null,
    showWhatsapp: () => {},
    hideWhatsapp: () => {},
  }
);

export function NavbarVisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use `null` as the initial state so server and initial client render
  // produce the same HTML (avoids hydration mismatch). After mount we
  // determine the real visibility from localStorage or pathname.
  const [visible, setVisible] = useState<boolean | null>(null);
  const [whatsappVisible, setWhatsappVisible] = useState<boolean | null>(null);

  // Determine visibility on client after hydration.
  // This runs only in the browser and will update the state accordingly.
  useEffect(() => {
    try {
      const isRoot = window.location.pathname === "/";

      const stored = localStorage.getItem("navVisible");
      if (stored !== null) {
        setVisible(stored === "true");
      } else {
        // default: hide on landing page (`/`), show elsewhere
        setVisible(!isRoot);
      }

      // For WhatsApp, always hide on the landing page until the user explicitly
      // clicks the CTA. This prevents previously stored preferences from
      // showing the floating button on `/` unexpectedly.
      const wsStored = localStorage.getItem("whatsappVisible");
      if (isRoot) {
        setWhatsappVisible(false);
      } else if (wsStored !== null) {
        setWhatsappVisible(wsStored === "true");
      } else {
        setWhatsappVisible(true);
      }
    } catch {
      setVisible(true);
      setWhatsappVisible(true);
    }
  }, []);

  const showNavbar = useCallback(() => {
    try {
      localStorage.setItem("navVisible", "true");
    } catch {
      /* ignore storage errors */
    }
    setVisible(true);
  }, []);

  const hideNavbar = useCallback(() => {
    try {
      localStorage.setItem("navVisible", "false");
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  }, []);

  const showWhatsapp = useCallback(() => {
    try {
      localStorage.setItem("whatsappVisible", "true");
    } catch {
      /* ignore storage errors */
    }
    setWhatsappVisible(true);
  }, []);

  const hideWhatsapp = useCallback(() => {
    try {
      localStorage.setItem("whatsappVisible", "false");
    } catch {
      /* ignore storage errors */
    }
    setWhatsappVisible(false);
  }, []);

  return (
    <NavbarVisibilityContext.Provider
      value={{
        visible,
        showNavbar,
        hideNavbar,
        whatsappVisible,
        showWhatsapp,
        hideWhatsapp,
      }}
    >
      {children}
    </NavbarVisibilityContext.Provider>
  );
}

export function useNavbarVisibility() {
  return useContext(NavbarVisibilityContext);
}
