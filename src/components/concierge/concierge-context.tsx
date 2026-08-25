import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ConciergeContextValue = {
  isOpen: boolean;
  open: (prompt?: string) => void;
  close: () => void;
  pendingPrompt: string | null;
  consumePendingPrompt: () => string | null;
};

const ConciergeContext = createContext<ConciergeContextValue | null>(null);

export function ConciergeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

  const open = useCallback((prompt?: string) => {
    if (prompt) setPendingPrompt(prompt);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const consumePendingPrompt = useCallback(() => {
    let value: string | null = null;
    setPendingPrompt((current) => {
      value = current;
      return null;
    });
    return value;
  }, []);

  const value = useMemo(
    () => ({ isOpen, open, close, pendingPrompt, consumePendingPrompt }),
    [isOpen, open, close, pendingPrompt, consumePendingPrompt],
  );

  return <ConciergeContext.Provider value={value}>{children}</ConciergeContext.Provider>;
}

export function useConcierge() {
  const context = useContext(ConciergeContext);
  if (!context) {
    throw new Error("useConcierge must be used within a ConciergeProvider");
  }
  return context;
}
