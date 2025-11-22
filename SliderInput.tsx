import { ReactNode } from 'react';

interface SliderInputProps {
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

export function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix = '',
  suffix = '',
  icon,
}: SliderInputProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          {icon && <span className="text-slate-600 dark:text-slate-400">{icon}</span>}
          {label}
        </label>
        <span className="text-lg font-bold text-slate-900 dark:text-white">
          {prefix}{Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1)}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gradient-to-r from-slate-200 dark:from-slate-600 to-slate-300 dark:to-slate-700 rounded-lg appearance-none cursor-pointer slider transition-colors duration-300"
      />
      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1.5">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}
