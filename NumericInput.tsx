import { ReactNode } from 'react';

interface NumericInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  icon?: ReactNode;
}

export function NumericInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix = '',
  suffix = '',
  icon,
}: NumericInputProps) {
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputStr = e.target.value;
  
  if (inputStr === '') {
    // If the input is emptied, send 0 or simply stop to avoid errors, 
    // but allow the field to visually clear.
    // We will send 0 to ensure calculation runs without breaking.
    onChange(0); 
    return;
  }
  
  const val = parseFloat(inputStr);
  
  if (!isNaN(val)) {
    // Ensure value is within min/max bounds before updating state
    onChange(Math.max(min, Math.min(max, val)));
  }
  // Note: If input is not a number (e.g., '10a'), we don't call onChange, 
  // but we ensure the app doesn't crash.
};

  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
        {icon && <span className="text-slate-600 dark:text-slate-400">{icon}</span>}
        {label}
      </label>
      <div className="relative">
        {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400 font-medium">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          step={step}
          className={`w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            prefix ? 'pl-7' : ''
          } ${suffix ? 'pr-10' : ''}`}
        />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400 font-medium text-sm">{suffix}</span>}
      </div>
    </div>
  );
}
