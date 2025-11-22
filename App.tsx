import { useEffect, useState } from 'react';
import { Calculator } from './components/Calculator';
import { ResultDisplay } from './components/ResultDisplay';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3000);
  const [billableHours, setBillableHours] = useState(30);
  const [taxRate, setTaxRate] = useState(25);
  const [weeksOff, setWeeksOff] = useState(2);
  const [profitMargin, setProfitMargin] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [totalAnnualNeed, setTotalAnnualNeed] = useState(0);
  const [totalBillableHours, setTotalBillableHours] = useState(0);

  useEffect(() => {
    calculateRate();
  }, [annualIncome, monthlyExpenses, billableHours, taxRate, weeksOff, profitMargin]);

  const calculateRate = () => {
    const monthlyExpensesAnnual = monthlyExpenses * 12;
    const annualNeed = (annualIncome + monthlyExpensesAnnual) / (1 - taxRate / 100);
    const billableWeeks = 52 - weeksOff;
    const totalBillable = billableWeeks * billableHours;
    const rateWithMargin = (annualNeed * (1 + profitMargin / 100)) / totalBillable;

    setTotalAnnualNeed(annualNeed);
    setTotalBillableHours(totalBillable);
    setHourlyRate(Math.ceil(rateWithMargin));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">RateWiz</h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg">Professional Freelance Rate Calculator</p>
            </div>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <Calculator
            annualIncome={annualIncome}
            monthlyExpenses={monthlyExpenses}
            billableHours={billableHours}
            taxRate={taxRate}
            weeksOff={weeksOff}
            profitMargin={profitMargin}
            onAnnualIncomeChange={setAnnualIncome}
            onMonthlyExpensesChange={setMonthlyExpenses}
            onBillableHoursChange={setBillableHours}
            onTaxRateChange={setTaxRate}
            onWeeksOffChange={setWeeksOff}
            onProfitMarginChange={setProfitMargin}
          />

          <ResultDisplay
            hourlyRate={hourlyRate}
            totalAnnualNeed={totalAnnualNeed}
            totalBillableHours={totalBillableHours}
            annualIncome={annualIncome}
            monthlyExpenses={monthlyExpenses}
            billableHours={billableHours}
            taxRate={taxRate}
            weeksOff={weeksOff}
            profitMargin={profitMargin}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
