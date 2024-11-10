'use client';
import { useState, useCallback } from 'react';

interface Alert {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export function useAlertManager() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 2000);
  }, []);

  return { alerts, addAlert };
}
