import { DollarSign, TrendingUp, Clock, Percent, Calendar, Zap } from 'lucide-react';
import { SliderInput } from './SliderInput';
import { NumericInput } from './NumericInput';

interface CalculatorProps {
  annualIncome: number;
  monthlyExpenses: number;
  billableHours: number;
  taxRate: number;
  weeksOff: number;
  profitMargin: number;
  onAnnualIncomeChange: (value: number) => void;
  onMonthlyExpensesChange: (value: number) => void;
  onBillableHoursChange: (value: number) => void;
  onTaxRateChange: (value: number) => void;
  onWeeksOffChange: (value: number) => void;
  onProfitMarginChange: (value: number) => void;
}

export function Calculator({
  annualIncome,
  monthlyExpenses,
  billableHours,
  taxRate,
  weeksOff,
  profitMargin,
  onAnnualIncomeChange,
  onMonthlyExpensesChange,
  onBillableHoursChange,
  onTaxRateChange,
  onWeeksOffChange,
  onProfitMarginChange,
}: CalculatorProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Inputs</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Adjust your parameters for a real-time rate calculation</p>
      </div>

      <div className="space-y-6">
        <NumericInput
          label="Annual Income Goal"
          value={annualIncome}
          onChange={onAnnualIncomeChange}
          min={20000}
          max={300000}
          step={5000}
          prefix="$"
          icon={<TrendingUp className="w-5 h-5" />}
        />

        <NumericInput
          label="Monthly Expenses"
          value={monthlyExpenses}
          onChange={onMonthlyExpensesChange}
          min={500}
          max={15000}
          step={100}
          prefix="$"
          icon={<DollarSign className="w-5 h-5" />}
        />

        <NumericInput
          label="Billable Hours per Week"
          value={billableHours}
          onChange={onBillableHoursChange}
          min={5}
          max={60}
          step={1}
          suffix=" hrs"
          icon={<Clock className="w-5 h-5" />}
        />

        <SliderInput
          label="Tax Rate"
          value={taxRate}
          onChange={onTaxRateChange}
          min={0}
          max={50}
          step={1}
          suffix="%"
          icon={<Percent className="w-5 h-5" />}
        />

        <SliderInput
          label="Weeks Off Per Year"
          value={weeksOff}
          onChange={onWeeksOffChange}
          min={0}
          max={10}
          step={0.5}
          suffix=" wks"
          icon={<Calendar className="w-5 h-5" />}
        />

        <SliderInput
          label="Profit Margin Buffer"
          value={profitMargin}
          onChange={onProfitMarginChange}
          min={0}
          max={30}
          step={1}
          suffix="%"
          icon={<Zap className="w-5 h-5" />}
        />
      </div>
    </div>
  );
}
