import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const EstateTaxCalculator: React.FC = () => {
  const [estateValue, setEstateValue] = useState<number>(15000000);
  const [exemptionAmount, setExemptionAmount] = useState<number>(13610000); // 2024 Federal Exemption
  const [taxRate, setTaxRate] = useState<number>(40); // Top Federal Estate Tax Rate

  const [taxableEstate, setTaxableEstate] = useState<number>(0);
  const [estimatedTax, setEstimatedTax] = useState<number>(0);
  const [netEstate, setNetEstate] = useState<number>(0);

  useEffect(() => {
    const taxable = Math.max(0, estateValue - exemptionAmount);
    const tax = taxable * (taxRate / 100);
    
    setTaxableEstate(taxable);
    setEstimatedTax(tax);
    setNetEstate(estateValue - tax);
  }, [estateValue, exemptionAmount, taxRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Estate Tax Calculator [Instant Results]</title>
        <meta name="description" content="Free online federal estate tax calculator. Estimate the potential estate tax liability for high-net-worth individuals based on current federal exemptions." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Federal Estate Tax Calculator</h1>
        <p className="text-slate-600">
          Determine the potential federal estate tax liability for a high-net-worth individual by accounting for the current federal exemption and the top estate tax rate.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Estate Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Estate Value ($)</label>
              <input
                type="number"
                value={estateValue}
                onChange={(e) => setEstateValue(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Federal Exemption ($)</label>
              <input
                type="number"
                value={exemptionAmount}
                onChange={(e) => setExemptionAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
              <p className="text-[10px] text-slate-500 mt-1">Default is $13,610,000 (2024 Federal Exemption)</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Top Tax Rate (%)</label>
              <input
                type="number"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Tax Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Federal Estate Tax</p>
              <p className="text-4xl font-bold text-[#0066cc]">${estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Taxable Estate Amount</p>
              <p className="text-xl font-semibold text-slate-900">${taxableEstate.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Net Estate (After Tax)</p>
              <p className="text-2xl font-semibold text-slate-900">${netEstate.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is a simplified model based on 2024 federal tax laws. It does not include state estate or inheritance taxes, which vary by state.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is the Federal Estate Tax?</h2>
        <p>
          The federal estate tax is a tax on your right to transfer property at your death. It consists of an accounting of everything you own or have certain interests in at the date of death. The fair market value of these items is used, not necessarily what you paid for them or what their values were when you acquired them.
        </p>
        
        <h3>How to Use the Estate Tax Calculator</h3>
        <p>
          To determine your potential estate tax liability, you need to provide:
        </p>
        <ul>
          <li><strong>Total Estate Value:</strong> The fair market value of all your assets, including real estate, investments, cash, and personal property.</li>
          <li><strong>Federal Exemption:</strong> The amount of your estate that is exempt from federal tax. For 2024, this is $13,610,000 per individual.</li>
          <li><strong>Top Tax Rate:</strong> The maximum tax rate applied to the taxable portion of your estate. The current top federal rate is 40%.</li>
        </ul>

        <h3>The Impact of the Federal Exemption</h3>
        <p>
          The federal estate tax only affects a very small percentage of the population because of the high exemption amount. If the total value of your estate is below the exemption amount, you will not owe any federal estate tax.
        </p>

        <h3>Estate Tax vs. Inheritance Tax</h3>
        <p>
          It's important to distinguish between estate tax and inheritance tax:
        </p>
        <ul>
          <li><strong>Estate Tax:</strong> Levied on the total value of the estate before it is distributed to heirs. The estate itself is responsible for paying the tax.</li>
          <li><strong>Inheritance Tax:</strong> Levied on the individuals who receive property from an estate. The heir is responsible for paying the tax. There is no federal inheritance tax, but some states have one.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is "Portability"?</h4>
            <p>Portability allows a surviving spouse to use any unused portion of their deceased spouse's federal estate tax exemption. This effectively doubles the exemption for a married couple to $27.22 million in 2024.</p>
          </div>
          <div>
            <h4 className="font-bold">How can I reduce my estate tax liability?</h4>
            <p>Common strategies include gifting assets during your lifetime, setting up trusts (such as Irrevocable Life Insurance Trusts), and making charitable donations.</p>
          </div>
          <div>
            <h4 className="font-bold">What happens to the exemption in 2026?</h4>
            <p>Under current law, the high exemption amounts introduced by the Tax Cuts and Jobs Act (TCJA) are scheduled to "sunset" at the end of 2025. Unless Congress acts, the exemption will likely drop back to around $7 million per individual in 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
