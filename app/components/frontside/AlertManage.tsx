import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, XCircle } from 'lucide-react';

interface AlertManagerProps {
  alerts: Array<{
    id: number;
    message: string;
    type: 'success' | 'error';
  }>;
}

export function AlertManager({ alerts }: AlertManagerProps) {
  return (
    <div className="fixed right-4 top-4 space-y-2">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          className={`w-80 shadow-lg transition-all duration-300 ${
            alert.type === 'success'
              ? 'border-green-200 bg-green-50'
              : 'border-red-200 bg-red-50'
          }`}
        >
          <div className="flex items-start gap-2">
            {alert.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
            <AlertDescription
              className={`text-sm ${alert.type === 'success' ? 'text-green-800' : 'text-red-800'}`}
            >
              {alert.message}
            </AlertDescription>
          </div>
        </Alert>
      ))}
    </div>
  );
}
