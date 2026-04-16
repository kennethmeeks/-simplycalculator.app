import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MortgageCalculator } from './pages/Mortgage';
import { BMICalculator } from './pages/BMI';
import { TipCalculator } from './pages/Tip';
import { SalaryCalculator } from './pages/Salary';
import { CompoundInterestCalculator } from './pages/CompoundInterest';
import { PercentageCalculator } from './pages/Percentage';
import { AgeCalculator } from './pages/Age';
import { AutoLoanCalculator } from './pages/AutoLoan';
import { AverageReturnCalculator } from './pages/AverageReturnCalculator';
import { DiscountCalculator } from './pages/Discount';
import { CalorieCalculator } from './pages/Calorie';
import { VATCalculator } from './pages/VAT';
import { GPACalculator } from './pages/GPA';
import { PregnancyCalculator } from './pages/Pregnancy';
import { IdealWeightCalculator } from './pages/IdealWeight';
import { ConcreteCalculator } from './pages/Concrete';
import { AmazonFBACalculator } from './pages/AmazonFBA';
import { BRRRRCalculator } from './pages/BRRRR';
import { ScientificCalculator } from './pages/Scientific';
import { FractionCalculator } from './pages/Fraction';
import { DateCalculator } from './pages/Date';
import { VolumeCalculator } from './pages/Volume';
import { AreaCalculator } from './pages/Area';
import { StatisticsCalculator } from './pages/Statistics';
import { TriangleCalculator } from './pages/Triangle';
import { PasswordGenerator } from './pages/PasswordGenerator';
import { SquareFootageCalculator } from './pages/SquareFootage';
import { TimeCalculator } from './pages/TimeCalculator';
import { GradeCalculator } from './pages/GradeCalculator';
import { HoursCalculator } from './pages/HoursCalculator';
import { IPSubnetCalculator } from './pages/IPSubnetCalculator';
import { IRRCalculator } from './pages/IRRCalculator';
import { FuelCostCalculator as FuelCost } from './pages/FuelCost';
import { EngineHorsepowerCalculator as EngineHorsepower } from './pages/EngineHorsepower';
import { BTUCalculator as BTU } from './pages/BTU';
import { DewPointCalculator as DewPoint } from './pages/DewPoint';
import { RoofingCalculator as Roofing } from './pages/Roofing';
import { HeatIndexCalculator as HeatIndex } from './pages/HeatIndex';
import { LoanCalculator } from './pages/Loan';
import { InvestmentCalculator } from './pages/Investment';
import { RetirementCalculator } from './pages/Retirement';
import { SavingsCalculator } from './pages/Savings';
import { CreditCardCalculator } from './pages/CreditCard';
import { InflationCalculator } from './pages/Inflation';
import { ROICalculator } from './pages/ROI';
import { APRCalculator } from './pages/APR';
import { SimpleInterestCalculator } from './pages/SimpleInterest';
import { SalesTaxCalculator } from './pages/SalesTax';
import { SlopeCalculator } from './pages/SlopeCalculator';
import { HexCalculator } from './pages/HexCalculator';
import { ExponentCalculator } from './pages/ExponentCalculator';
import { MatrixCalculator } from './pages/MatrixCalculator';
import { LongDivisionCalculator } from './pages/LongDivisionCalculator';
import { LogCalculator } from './pages/LogCalculator';
import { BinaryCalculator } from './pages/BinaryCalculator';
import { PercentErrorCalculator } from './pages/PercentErrorCalculator';
import { BMRCalculator } from './pages/BMR';
import { BodyFatCalculator } from './pages/BodyFat';
import { MacroCalculator } from './pages/MacroCalculator';
import { TDEECalculator } from './pages/TDEECalculator';
import { PaceCalculator } from './pages/PaceCalculator';
import { PaybackPeriodCalculator } from './pages/PaybackPeriodCalculator';
import { TargetHeartRateCalculator } from './pages/TargetHeartRateCalculator';
import { ProteinCalculator } from './pages/ProteinCalculator';
import { FourOhOneKCalculator } from './pages/401KCalculator';
import { InterestRateCalculator } from './pages/InterestRateCalculator';
import { HouseAffordabilityCalculator } from './pages/HouseAffordabilityCalculator';
import { RentCalculator } from './pages/RentCalculator';
import { RentalPropertyCalculator } from './pages/RentalPropertyCalculator';
import { MarriageTaxCalculator } from './pages/MarriageTaxCalculator';
import { EstateTaxCalculator } from './pages/EstateTaxCalculator';
import { PensionCalculator } from './pages/PensionCalculator';
import { SocialSecurityCalculator } from './pages/SocialSecurityCalculator';
import { AnnuityCalculator } from './pages/AnnuityCalculator';
import { AnnuityPayoutCalculator } from './pages/AnnuityPayoutCalculator';
import { CreditCardPayoffCalculator } from './pages/CreditCardPayoffCalculator';
import { DebtPayoffCalculator } from './pages/DebtPayoffCalculator';
import { DebtConsolidationCalculator } from './pages/DebtConsolidationCalculator';
import { RepaymentCalculator } from './pages/RepaymentCalculator';
import { StudentLoanCalculator } from './pages/StudentLoanCalculator';
import { CollegeCostCalculator } from './pages/CollegeCostCalculator';
import { CDCalculator } from './pages/CDCalculator';
import { BondCalculator } from './pages/BondCalculator';
import { MutualFundCalculator } from './pages/MutualFundCalculator';
import { RothIRACalculator } from './pages/RothIRACalculator';
import { IRACalculator } from './pages/IRACalculator';
import { RMDCalculator } from './pages/RMDCalculator';
import { CashBackLowInterestCalculator } from './pages/CashBackLowInterestCalculator';
import { AutoLeaseCalculator } from './pages/AutoLeaseCalculator';
import { DepreciationCalculator } from './pages/DepreciationCalculator';
import { MarginCalculator } from './pages/MarginCalculator';
import { PresentValueCalculator } from './pages/PresentValueCalculator';
import { FutureValueCalculator } from './pages/FutureValueCalculator';
import { CommissionCalculator } from './pages/CommissionCalculator';
import { HELOCCalculator } from './pages/HELOC';
import { CanadianMortgageCalculator } from './pages/CanadianMortgage';
import { MortgageUKCalculator } from './pages/MortgageUK';
import { HomeEquityCalculator } from './pages/HomeEquity';
import { DebtToIncomeRatioCalculator } from './pages/DebtToIncomeRatioCalculator';
import { PersonalLoanCalculator } from './pages/PersonalLoanCalculator';
import { BoatLoanCalculator } from './pages/BoatLoanCalculator';
import { LeaseCalculator } from './pages/LeaseCalculator';
import { RefinanceCalculator } from './pages/RefinanceCalculator';
import { BudgetCalculator } from './pages/BudgetCalculator';
import { BusinessLoanCalculator } from './pages/BusinessLoanCalculator';
import { UnitConverter } from './pages/UnitConverter';
import { CurrencyConverter } from './pages/CurrencyConverter';
import { PercentageOff } from './pages/PercentageOff';
import { ScientificNotation } from './pages/ScientificNotation';
import { RandomNumber } from './pages/RandomNumber';
import { WordCounter } from './pages/WordCounter';
import { LoveCalculator } from './pages/LoveCalculator';
import { Numerology } from './pages/Numerology';
import { Zodiac } from './pages/Zodiac';
import { Ovulation } from './pages/Ovulation';
import { SleepCalculator } from './pages/SleepCalculator';
import { CaloriesBurned } from './pages/CaloriesBurned';
import { AverageCalculator } from './pages/AverageCalculator';
import { RatioCalculator } from './pages/RatioCalculator';
import { SquareRoot } from './pages/SquareRoot';
import { TemperatureConverter } from './pages/TemperatureConverter';
import { RomanNumeralConverter } from './pages/RomanNumeralConverter';
import { WaterIntake } from './pages/WaterIntake';
import { OneRepMax } from './pages/OneRepMax';
import { ArmBodyFat } from './pages/ArmBodyFat';
import { ChildHeightPredictor } from './pages/ChildHeightPredictor';
import { SobrietyCalculator } from './pages/SobrietyCalculator';
import { LeanBodyMass } from './pages/LeanBodyMass';
import { WaistToHip } from './pages/WaistToHip';
import { VO2Max } from './pages/VO2Max';
import { PostpartumRecovery } from './pages/PostpartumRecovery';
import { DueDate } from './pages/DueDate';
import { FertilityCalculator } from './pages/FertilityCalculator';
import { BabyWeight } from './pages/BabyWeight';
import { DaysUntil } from './pages/DaysUntil';
import { TimeZoneConverter } from './pages/TimeZoneConverter';
import { BusinessDays } from './pages/BusinessDays';
import { ChronologicalAge } from './pages/ChronologicalAge';
import { WorkHours } from './pages/WorkHours';
import { TimeCard } from './pages/TimeCard';
import { RetirementDate } from './pages/RetirementDate';
import { AnniversaryCalculator } from './pages/AnniversaryCalculator';
import { TestScoreCalculator } from './pages/TestScoreCalculator';
import { FinalGradeCalculator } from './pages/FinalGradeCalculator';
import { ClassRankCalculator } from './pages/ClassRankCalculator';
import { WeightedAverageCalculator } from './pages/WeightedAverageCalculator';
import { PregnancyWeightGainCalculator } from './pages/PregnancyWeightGain';
import { PregnancyConceptionCalculator } from './pages/PregnancyConception';
import { CarbohydrateCalculator } from './pages/CarbohydrateCalculator';
import { HealthyWeightCalculator } from './pages/HealthyWeightCalculator';
import { FatIntakeCalculator } from './pages/FatIntakeCalculator';
import { ConceptionCalculator } from './pages/ConceptionCalculator';
import { PeriodCalculator } from './pages/PeriodCalculator';
import { GFRCalculator } from './pages/GFRCalculator';
import { BodyTypeCalculator } from './pages/BodyTypeCalculator';
import { BodySurfaceAreaCalculator } from './pages/BodySurfaceAreaCalculator';
import { BACCalculator } from './pages/BACCalculator';
import { WeightWatcherPointsCalculator } from './pages/WeightWatcherPointsCalculator';
import { AnorexicBMICalculator } from './pages/AnorexicBMICalculator';
import { OverweightCalculator } from './pages/OverweightCalculator';
import { ReadingLevelCalculator } from './pages/ReadingLevelCalculator';
import { WordsPerMinuteCalculator } from './pages/WordsPerMinuteCalculator';
import { StudyTimeCalculator } from './pages/StudyTimeCalculator';
import { ScholarshipCalculator } from './pages/ScholarshipCalculator';
import { MPGCalculator } from './pages/MPGCalculator';
import { CarDepreciationCalculator } from './pages/CarDepreciationCalculator';
import { TireSizeCalculator } from './pages/TireSizeCalculator';
import { CarLeaseCalculator } from './pages/CarLeaseCalculator';
import { VehicleTaxCalculator } from './pages/VehicleTaxCalculator';
import { RoadTripCostCalculator } from './pages/RoadTripCostCalculator';
import { PaintCalculator } from './pages/PaintCalculator';
import { FlooringCalculator } from './pages/FlooringCalculator';
import { TileCalculator } from './pages/TileCalculator';
import { FenceCalculator } from './pages/FenceCalculator';
import { MulchCalculator } from './pages/MulchCalculator';
import { GravelCalculator } from './pages/GravelCalculator';
import { StairCalculator } from './pages/StairCalculator';
import { WallpaperCalculator } from './pages/WallpaperCalculator';
import { DeckCalculator } from './pages/DeckCalculator';
import { CalculatorMonthlySearches } from './pages/CalculatorMonthlySearches';
import { PayrollCalculator } from './pages/PayrollCalculator';
import { TakeHomePayCalculator } from './pages/TakeHomePayCalculator';
import { CapitalGainsTaxCalculator } from './pages/CapitalGainsTaxCalculator';
import { TaxBracketCalculator } from './pages/TaxBracketCalculator';
import { DividendCalculator } from './pages/DividendCalculator';
import { NetWorthCalculator } from './pages/NetWorthCalculator';
import { StockReturnCalculator } from './pages/StockReturnCalculator';
import { CryptocurrencyCalculator } from './pages/CryptocurrencyCalculator';
import { BitcoinProfitCalculator } from './pages/BitcoinProfitCalculator';
import { DogAgeCalculator } from './pages/DogAgeCalculator';
import { CatAgeCalculator } from './pages/CatAgeCalculator';
import { AngelNumberCalculator } from './pages/AngelNumberCalculator';
import { LuckyNumberCalculator } from './pages/LuckyNumberCalculator';
import { FriendshipCalculator } from './pages/FriendshipCalculator';
import { StarSignCompatibility } from './pages/StarSignCompatibility';
import { NameCompatibility } from './pages/NameCompatibility';
import { IQScoreEstimator } from './pages/IQScoreEstimator';
import { QuadraticFormulaCalculator } from './pages/QuadraticFormulaCalculator';
import { GCFCalculator } from './pages/GCFCalculator';
import { LCMCalculator } from './pages/LCMCalculator';
import { PythagoreanTheoremCalculator } from './pages/PythagoreanTheoremCalculator';
import { ProbabilityCalculator } from './pages/ProbabilityCalculator';
import { PermutationCalculator } from './pages/PermutationCalculator';
import { CombinationCalculator } from './pages/CombinationCalculator';
import { PrimeNumberChecker } from './pages/PrimeNumberChecker';
import { SignificantFiguresCalculator } from './pages/SignificantFiguresCalculator';
import { StandardDeviationCalculator } from './pages/StandardDeviationCalculator';
import { IncomeTaxCalculator } from './pages/IncomeTaxCalculator';
import { VoltageDropCalculator } from './pages/VoltageDropCalculator';
import { ResistorCalculator } from './pages/ResistorCalculator';
import { OhmsLawCalculator } from './pages/OhmsLawCalculator';
import { ElectricityCalculator } from './pages/ElectricityCalculator';
import { FactorCalculator } from './pages/FactorCalculator';
import { RoundingCalculator } from './pages/RoundingCalculator';
import { BigNumberCalculator } from './pages/BigNumberCalculator';
import { PrimeFactorizationCalculator } from './pages/PrimeFactorizationCalculator';
import { CommonFactorCalculator } from './pages/CommonFactorCalculator';
import { BasicCalculator } from './pages/BasicCalculator';
import { PValueCalculator } from './pages/PValueCalculator';
import { HeightCalculator } from './pages/HeightCalculator';
import { BraSizeCalculator } from './pages/BraSizeCalculator';
import { DiceRoller } from './pages/DiceRoller';
import { GDPCalculator } from './pages/GDPCalculator';
import { ShoeSizeConversion } from './pages/ShoeSizeConversion';
import { DensityCalculator } from './pages/DensityCalculator';
import { MassCalculator } from './pages/MassCalculator';
import { WeightCalculator } from './pages/WeightCalculator';
import { SpeedCalculator } from './pages/SpeedCalculator';
import { MolarityCalculator } from './pages/MolarityCalculator';
import { MolecularWeightCalculator } from './pages/MolecularWeightCalculator';
import { GolfHandicapCalculator } from './pages/GolfHandicapCalculator';
import { WindChillCalculator } from './pages/WindChillCalculator';
import { BandwidthCalculator } from './pages/BandwidthCalculator';
import { Base64Converter } from './pages/Base64Converter';
import { URLConverter } from './pages/URLConverter';
import { TimeDurationCalculator } from './pages/TimeDurationCalculator';
import { DayCounter } from './pages/DayCounter';
import { DayOfTheWeekCalculator } from './pages/DayOfTheWeekCalculator';
import { RightTriangleCalculator } from './pages/RightTriangleCalculator';
import { NumberSequenceCalculator } from './pages/NumberSequenceCalculator';
import { HalfLifeCalculator } from './pages/HalfLifeCalculator';
import { SampleSizeCalculator } from './pages/SampleSizeCalculator';
import { ZScoreCalculator } from './pages/ZScoreCalculator';
import { ConfidenceIntervalCalculator } from './pages/ConfidenceIntervalCalculator';
import { DistanceCalculator } from './pages/DistanceCalculator';
import { CircleCalculator } from './pages/CircleCalculator';
import { SurfaceAreaCalculator } from './pages/SurfaceAreaCalculator';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';
import { LifeInsuranceCalculator } from './pages/LifeInsurance';
import { HealthInsuranceCalculator } from './pages/HealthInsurance';
import { CarInsuranceCalculator } from './pages/CarInsurance';
import { CreditScoreSimulator } from './pages/CreditScoreSimulator';
import { Sitemap } from './pages/Sitemap';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mortgage" element={<MortgageCalculator />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/tip" element={<TipCalculator />} />
            <Route path="/salary" element={<SalaryCalculator />} />
            <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
            <Route path="/percentage" element={<PercentageCalculator />} />
            <Route path="/age" element={<AgeCalculator />} />
            <Route path="/auto-loan" element={<AutoLoanCalculator />} />
            <Route path="/average-return" element={<AverageReturnCalculator />} />
            <Route path="/discount" element={<DiscountCalculator />} />
            <Route path="/calorie" element={<CalorieCalculator />} />
            <Route path="/vat" element={<VATCalculator />} />
            <Route path="/gpa" element={<GPACalculator />} />
            <Route path="/pregnancy" element={<PregnancyCalculator />} />
            <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
            <Route path="/concrete" element={<ConcreteCalculator />} />
            <Route path="/amazon-fba" element={<AmazonFBACalculator />} />
            <Route path="/brrrr" element={<BRRRRCalculator />} />
            <Route path="/scientific" element={<ScientificCalculator />} />
            <Route path="/fraction" element={<FractionCalculator />} />
            <Route path="/date" element={<DateCalculator />} />
            <Route path="/volume" element={<VolumeCalculator />} />
            <Route path="/area" element={<AreaCalculator />} />
            <Route path="/statistics" element={<StatisticsCalculator />} />
            <Route path="/triangle" element={<TriangleCalculator />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/square-footage" element={<SquareFootageCalculator />} />
            <Route path="/time" element={<TimeCalculator />} />
            <Route path="/grade" element={<GradeCalculator />} />
            <Route path="/hours" element={<HoursCalculator />} />
            <Route path="/ip-subnet" element={<IPSubnetCalculator />} />
            <Route path="/irr" element={<IRRCalculator />} />
            <Route path="/fuel-cost" element={<FuelCost />} />
            <Route path="/engine-horsepower" element={<EngineHorsepower />} />
            <Route path="/btu" element={<BTU />} />
            <Route path="/dew-point" element={<DewPoint />} />
            <Route path="/roofing" element={<Roofing />} />
            <Route path="/heat-index" element={<HeatIndex />} />
            <Route path="/loan" element={<LoanCalculator />} />
            <Route path="/investment" element={<InvestmentCalculator />} />
            <Route path="/retirement" element={<RetirementCalculator />} />
            <Route path="/savings" element={<SavingsCalculator />} />
            <Route path="/credit-card" element={<CreditCardCalculator />} />
            <Route path="/inflation" element={<InflationCalculator />} />
            <Route path="/roi" element={<ROICalculator />} />
            <Route path="/apr" element={<APRCalculator />} />
            <Route path="/simple-interest" element={<SimpleInterestCalculator />} />
            <Route path="/sales-tax" element={<SalesTaxCalculator />} />
            <Route path="/slope" element={<SlopeCalculator />} />
            <Route path="/hex" element={<HexCalculator />} />
            <Route path="/exponent" element={<ExponentCalculator />} />
            <Route path="/matrix" element={<MatrixCalculator />} />
            <Route path="/long-division" element={<LongDivisionCalculator />} />
            <Route path="/log" element={<LogCalculator />} />
            <Route path="/binary" element={<BinaryCalculator />} />
            <Route path="/percent-error" element={<PercentErrorCalculator />} />
            <Route path="/bmr" element={<BMRCalculator />} />
            <Route path="/body-fat" element={<BodyFatCalculator />} />
            <Route path="/macro" element={<MacroCalculator />} />
            <Route path="/tdee" element={<TDEECalculator />} />
            <Route path="/pace" element={<PaceCalculator />} />
            <Route path="/payback-period" element={<PaybackPeriodCalculator />} />
            <Route path="/target-heart-rate" element={<TargetHeartRateCalculator />} />
            <Route path="/protein" element={<ProteinCalculator />} />
            <Route path="/401k" element={<FourOhOneKCalculator />} />
            <Route path="/interest-rate" element={<InterestRateCalculator />} />
            <Route path="/house-affordability" element={<HouseAffordabilityCalculator />} />
            <Route path="/rent" element={<RentCalculator />} />
            <Route path="/rental-property" element={<RentalPropertyCalculator />} />
            <Route path="/marriage-tax" element={<MarriageTaxCalculator />} />
            <Route path="/estate-tax" element={<EstateTaxCalculator />} />
            <Route path="/pension" element={<PensionCalculator />} />
            <Route path="/social-security" element={<SocialSecurityCalculator />} />
            <Route path="/annuity" element={<AnnuityCalculator />} />
            <Route path="/annuity-payout" element={<AnnuityPayoutCalculator />} />
            <Route path="/credit-card-payoff" element={<CreditCardPayoffCalculator />} />
            <Route path="/debt-payoff" element={<DebtPayoffCalculator />} />
            <Route path="/debt-consolidation" element={<DebtConsolidationCalculator />} />
            <Route path="/repayment" element={<RepaymentCalculator />} />
            <Route path="/student-loan" element={<StudentLoanCalculator />} />
            <Route path="/college-cost" element={<CollegeCostCalculator />} />
            <Route path="/cd" element={<CDCalculator />} />
            <Route path="/bond" element={<BondCalculator />} />
            <Route path="/mutual-fund" element={<MutualFundCalculator />} />
            <Route path="/roth-ira" element={<RothIRACalculator />} />
            <Route path="/ira" element={<IRACalculator />} />
            <Route path="/rmd" element={<RMDCalculator />} />
            <Route path="/cash-back-low-interest" element={<CashBackLowInterestCalculator />} />
            <Route path="/auto-lease" element={<AutoLeaseCalculator />} />
            <Route path="/depreciation" element={<DepreciationCalculator />} />
            <Route path="/margin" element={<MarginCalculator />} />
            <Route path="/present-value" element={<PresentValueCalculator />} />
            <Route path="/future-value" element={<FutureValueCalculator />} />
            <Route path="/commission" element={<CommissionCalculator />} />
            <Route path="/heloc" element={<HELOCCalculator />} />
            <Route path="/canadian-mortgage" element={<CanadianMortgageCalculator />} />
            <Route path="/mortgage-uk" element={<MortgageUKCalculator />} />
            <Route path="/home-equity" element={<HomeEquityCalculator />} />
            <Route path="/dti-ratio" element={<DebtToIncomeRatioCalculator />} />
            <Route path="/personal-loan" element={<PersonalLoanCalculator />} />
            <Route path="/boat-loan" element={<BoatLoanCalculator />} />
            <Route path="/lease" element={<LeaseCalculator />} />
            <Route path="/refinance" element={<RefinanceCalculator />} />
            <Route path="/budget" element={<BudgetCalculator />} />
            <Route path="/business-loan" element={<BusinessLoanCalculator />} />
            <Route path="/unit-converter" element={<UnitConverter />} />
            <Route path="/currency-converter" element={<CurrencyConverter />} />
            <Route path="/percentage-off" element={<PercentageOff />} />
            <Route path="/scientific-notation" element={<ScientificNotation />} />
            <Route path="/random-number" element={<RandomNumber />} />
            <Route path="/word-counter" element={<WordCounter />} />
            <Route path="/love-calculator" element={<LoveCalculator />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/zodiac" element={<Zodiac />} />
            <Route path="/ovulation" element={<Ovulation />} />
            <Route path="/sleep-calculator" element={<SleepCalculator />} />
            <Route path="/calories-burned" element={<CaloriesBurned />} />
            <Route path="/average" element={<AverageCalculator />} />
            <Route path="/ratio" element={<RatioCalculator />} />
            <Route path="/square-root" element={<SquareRoot />} />
            <Route path="/temperature-converter" element={<TemperatureConverter />} />
            <Route path="/roman-numeral-converter" element={<RomanNumeralConverter />} />
            <Route path="/water-intake" element={<WaterIntake />} />
            <Route path="/one-rep-max" element={<OneRepMax />} />
            <Route path="/arm-body-fat" element={<ArmBodyFat />} />
            <Route path="/child-height-predictor" element={<ChildHeightPredictor />} />
            <Route path="/sobriety-calculator" element={<SobrietyCalculator />} />
            <Route path="/lean-body-mass" element={<LeanBodyMass />} />
            <Route path="/waist-to-hip" element={<WaistToHip />} />
            <Route path="/vo2-max" element={<VO2Max />} />
            <Route path="/postpartum-recovery" element={<PostpartumRecovery />} />
            <Route path="/due-date" element={<DueDate />} />
            <Route path="/fertility-calculator" element={<FertilityCalculator />} />
            <Route path="/baby-weight" element={<BabyWeight />} />
            <Route path="/days-until" element={<DaysUntil />} />
            <Route path="/time-zone-converter" element={<TimeZoneConverter />} />
            <Route path="/business-days" element={<BusinessDays />} />
            <Route path="/chronological-age" element={<ChronologicalAge />} />
            <Route path="/work-hours" element={<WorkHours />} />
            <Route path="/time-card" element={<TimeCard />} />
            <Route path="/retirement-date" element={<RetirementDate />} />
            <Route path="/anniversary-calculator" element={<AnniversaryCalculator />} />
            <Route path="/test-score" element={<TestScoreCalculator />} />
            <Route path="/final-grade" element={<FinalGradeCalculator />} />
            <Route path="/class-rank" element={<ClassRankCalculator />} />
            <Route path="/weighted-average" element={<WeightedAverageCalculator />} />
            <Route path="/pregnancy-weight-gain" element={<PregnancyWeightGainCalculator />} />
            <Route path="/pregnancy-conception" element={<PregnancyConceptionCalculator />} />
            <Route path="/carbohydrate" element={<CarbohydrateCalculator />} />
            <Route path="/healthy-weight" element={<HealthyWeightCalculator />} />
            <Route path="/fat-intake" element={<FatIntakeCalculator />} />
            <Route path="/conception" element={<ConceptionCalculator />} />
            <Route path="/period" element={<PeriodCalculator />} />
            <Route path="/gfr" element={<GFRCalculator />} />
            <Route path="/body-type" element={<BodyTypeCalculator />} />
            <Route path="/body-surface-area" element={<BodySurfaceAreaCalculator />} />
            <Route path="/bac" element={<BACCalculator />} />
            <Route path="/weight-watcher-points" element={<WeightWatcherPointsCalculator />} />
            <Route path="/anorexic-bmi" element={<AnorexicBMICalculator />} />
            <Route path="/overweight" element={<OverweightCalculator />} />
            <Route path="/reading-level" element={<ReadingLevelCalculator />} />
            <Route path="/words-per-minute" element={<WordsPerMinuteCalculator />} />
            <Route path="/study-time" element={<StudyTimeCalculator />} />
            <Route path="/scholarship" element={<ScholarshipCalculator />} />
            <Route path="/mpg" element={<MPGCalculator />} />
            <Route path="/car-depreciation" element={<CarDepreciationCalculator />} />
            <Route path="/tire-size" element={<TireSizeCalculator />} />
            <Route path="/car-lease" element={<CarLeaseCalculator />} />
            <Route path="/vehicle-tax" element={<VehicleTaxCalculator />} />
            <Route path="/road-trip-cost" element={<RoadTripCostCalculator />} />
            <Route path="/paint" element={<PaintCalculator />} />
            <Route path="/flooring" element={<FlooringCalculator />} />
            <Route path="/tile" element={<TileCalculator />} />
            <Route path="/fence" element={<FenceCalculator />} />
            <Route path="/mulch" element={<MulchCalculator />} />
            <Route path="/gravel" element={<GravelCalculator />} />
            <Route path="/stair" element={<StairCalculator />} />
            <Route path="/wallpaper" element={<WallpaperCalculator />} />
            <Route path="/deck" element={<DeckCalculator />} />
            <Route path="/calculator-monthly-searches" element={<CalculatorMonthlySearches />} />
            <Route path="/payroll" element={<PayrollCalculator />} />
            <Route path="/take-home-pay" element={<TakeHomePayCalculator />} />
            <Route path="/capital-gains-tax" element={<CapitalGainsTaxCalculator />} />
            <Route path="/tax-bracket" element={<TaxBracketCalculator />} />
            <Route path="/dividend" element={<DividendCalculator />} />
            <Route path="/net-worth" element={<NetWorthCalculator />} />
            <Route path="/stock-return" element={<StockReturnCalculator />} />
            <Route path="/cryptocurrency" element={<CryptocurrencyCalculator />} />
            <Route path="/bitcoin-profit" element={<BitcoinProfitCalculator />} />
            <Route path="/dog-age" element={<DogAgeCalculator />} />
            <Route path="/cat-age" element={<CatAgeCalculator />} />
            <Route path="/angel-number" element={<AngelNumberCalculator />} />
            <Route path="/lucky-number" element={<LuckyNumberCalculator />} />
            <Route path="/friendship" element={<FriendshipCalculator />} />
            <Route path="/star-sign-compatibility" element={<StarSignCompatibility />} />
            <Route path="/name-compatibility" element={<NameCompatibility />} />
            <Route path="/iq-score" element={<IQScoreEstimator />} />
            <Route path="/quadratic-formula" element={<QuadraticFormulaCalculator />} />
            <Route path="/gcf" element={<GCFCalculator />} />
            <Route path="/lcm" element={<LCMCalculator />} />
            <Route path="/pythagorean-theorem" element={<PythagoreanTheoremCalculator />} />
            <Route path="/probability" element={<ProbabilityCalculator />} />
            <Route path="/permutation" element={<PermutationCalculator />} />
            <Route path="/combination" element={<CombinationCalculator />} />
            <Route path="/prime-number" element={<PrimeNumberChecker />} />
            <Route path="/significant-figures" element={<SignificantFiguresCalculator />} />
            <Route path="/standard-deviation" element={<StandardDeviationCalculator />} />
            <Route path="/income-tax" element={<IncomeTaxCalculator />} />
            <Route path="/voltage-drop" element={<VoltageDropCalculator />} />
            <Route path="/resistor" element={<ResistorCalculator />} />
            <Route path="/ohms-law" element={<OhmsLawCalculator />} />
            <Route path="/electricity" element={<ElectricityCalculator />} />
            <Route path="/factor" element={<FactorCalculator />} />
            <Route path="/rounding" element={<RoundingCalculator />} />
            <Route path="/big-number" element={<BigNumberCalculator />} />
            <Route path="/prime-factorization" element={<PrimeFactorizationCalculator />} />
            <Route path="/common-factor" element={<CommonFactorCalculator />} />
            <Route path="/basic-calculator" element={<BasicCalculator />} />
            <Route path="/p-value" element={<PValueCalculator />} />
            <Route path="/height" element={<HeightCalculator />} />
            <Route path="/bra-size" element={<BraSizeCalculator />} />
            <Route path="/dice-roller" element={<DiceRoller />} />
            <Route path="/gdp" element={<GDPCalculator />} />
            <Route path="/shoe-size-conversion" element={<ShoeSizeConversion />} />
            <Route path="/density" element={<DensityCalculator />} />
            <Route path="/mass" element={<MassCalculator />} />
            <Route path="/weight" element={<WeightCalculator />} />
            <Route path="/speed" element={<SpeedCalculator />} />
            <Route path="/molarity" element={<MolarityCalculator />} />
            <Route path="/molecular-weight" element={<MolecularWeightCalculator />} />
            <Route path="/golf-handicap" element={<GolfHandicapCalculator />} />
            <Route path="/wind-chill" element={<WindChillCalculator />} />
            <Route path="/bandwidth" element={<BandwidthCalculator />} />
            <Route path="/base64" element={<Base64Converter />} />
            <Route path="/url-converter" element={<URLConverter />} />
            <Route path="/time-duration" element={<TimeDurationCalculator />} />
            <Route path="/day-counter" element={<DayCounter />} />
            <Route path="/day-of-the-week" element={<DayOfTheWeekCalculator />} />
            <Route path="/right-triangle" element={<RightTriangleCalculator />} />
            <Route path="/number-sequence" element={<NumberSequenceCalculator />} />
            <Route path="/half-life" element={<HalfLifeCalculator />} />
            <Route path="/sample-size" element={<SampleSizeCalculator />} />
            <Route path="/z-score" element={<ZScoreCalculator />} />
            <Route path="/confidence-interval" element={<ConfidenceIntervalCalculator />} />
            <Route path="/distance" element={<DistanceCalculator />} />
            <Route path="/circle" element={<CircleCalculator />} />
            <Route path="/surface-area" element={<SurfaceAreaCalculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/life-insurance" element={<LifeInsuranceCalculator />} />
            <Route path="/health-insurance" element={<HealthInsuranceCalculator />} />
            <Route path="/car-insurance" element={<CarInsuranceCalculator />} />
            <Route path="/credit-score-simulator" element={<CreditScoreSimulator />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
