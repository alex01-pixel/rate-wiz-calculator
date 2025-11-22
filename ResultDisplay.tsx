import { Lightbulb, TrendingUp } from 'lucide-react';

interface ResultDisplayProps {
  hourlyRate: number;
  totalAnnualNeed: number;
  totalBillableHours: number;
  annualIncome: number;
  monthlyExpenses: number;
  billableHours: number;
  taxRate: number;
  weeksOff: number;
  profitMargin: number;
}

export function ResultDisplay({
  hourlyRate,
  totalAnnualNeed,
  totalBillableHours,
  annualIncome,
  monthlyExpenses,
  billableHours,
  taxRate,
  weeksOff,
  profitMargin,
}: ResultDisplayProps) {
  const monthlyExpensesAnnual = monthlyExpenses * 12;
  const billableWeeks = 52 - weeksOff;
  const rateWithoutMargin = totalBillableHours > 0 ? totalAnnualNeed / totalBillableHours : 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="mb-8">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-3">YOUR HOURLY RATE</p>
          <div className="text-7xl font-bold text-slate-900 dark:text-white mb-2">
            ${hourlyRate}
            <span className="text-3xl text-slate-500 dark:text-slate-400 ml-2">/hr</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Based on your parameters</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 space-y-4 transition-colors duration-300">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">Income Goal</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">${annualIncome.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">Annual Expenses</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">${monthlyExpensesAnnual.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">Tax Rate</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{taxRate}%</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">Weeks Working</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{billableWeeks} wks</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">Total Billable Hours</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{Math.round(totalBillableHours).toLocaleString()} hrs</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1">Profit Buffer</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{profitMargin}%</p>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-600 pt-4 mt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">Base Rate (before margin)</p>
              <p className="font-semibold text-slate-900 dark:text-white">${Math.ceil(rateWithoutMargin)}/hr</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600 dark:text-slate-400">Profit Markup</p>
              <p className="font-semibold text-green-600 dark:text-green-400">+${hourlyRate - Math.ceil(rateWithoutMargin)}/hr</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-300 dark:border-blue-700/50 rounded-2xl p-6 shadow-lg transition-colors duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Pro Tip for Maximum Earnings
            </h3>
            <p className="text-blue-800 dark:text-blue-300 text-sm mb-4">
              To keep 100% of this rate and avoid high transaction fees, professionals recommend using <span className="font-semibold">Wise for Business</span> for international invoicing.
            </p>
            <button
              onClick={() => {}}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Open Wise Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
