import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Loader2 } from 'lucide-react';
import { CanonicalSEO } from './components/CanonicalSEO';
import { CATEGORIES } from './constants/categories';

const TrailingSlashRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { pathname, search, hash } = location;
        if (pathname.length > 1 && pathname.endsWith('/')) {
            const newPath = pathname.slice(0, -1);
            navigate(newPath + search + hash, { replace: true });
        }
    }, [location, navigate]);

    return null;
};

const CalculatorPage = lazy(() => import('./pages/CalculatorPage').then(m => ({ default: m.CalculatorPage })));
const MortgageCalculator = lazy(() => import('./pages/Mortgage').then(m => ({ default: m.MortgageCalculator })));
const BMICalculator = lazy(() => import('./pages/BMI').then(m => ({ default: m.BMICalculator })));
const TipCalculator = lazy(() => import('./pages/Tip').then(m => ({ default: m.TipCalculator })));
const SalaryCalculator = lazy(() => import('./pages/Salary').then(m => ({ default: m.SalaryCalculator })));
const CompoundInterestCalculator = lazy(() => import('./pages/CompoundInterest').then(m => ({ default: m.CompoundInterestCalculator })));
const PercentageCalculator = lazy(() => import('./pages/Percentage').then(m => ({ default: m.PercentageCalculator })));
const AgeCalculator = lazy(() => import('./pages/Age'));
const AutoLoanCalculator = lazy(() => import('./pages/AutoLoan').then(m => ({ default: m.AutoLoanCalculator })));
const AverageReturnCalculator = lazy(() => import('./pages/AverageReturnCalculator').then(m => ({ default: m.AverageReturnCalculator })));
const DiscountCalculator = lazy(() => import('./pages/Discount').then(m => ({ default: m.DiscountCalculator })));
const CalorieCalculator = lazy(() => import('./pages/Calorie').then(m => ({ default: m.CalorieCalculator })));
const VATCalculator = lazy(() => import('./pages/VAT').then(m => ({ default: m.VATCalculator })));
const GPACalculator = lazy(() => import('./pages/GPA').then(m => ({ default: m.GPACalculator })));
const PregnancyCalculator = lazy(() => import('./pages/Pregnancy').then(m => ({ default: m.PregnancyCalculator })));
const IdealWeightCalculator = lazy(() => import('./pages/IdealWeight').then(m => ({ default: m.IdealWeightCalculator })));
const ConcreteCalculator = lazy(() => import('./pages/Concrete').then(m => ({ default: m.ConcreteCalculator })));
const AmazonFBACalculator = lazy(() => import('./pages/AmazonFBA').then(m => ({ default: m.AmazonFBACalculator })));
const BRRRRCalculator = lazy(() => import('./pages/BRRRR').then(m => ({ default: m.BRRRRCalculator })));
const ScientificCalculator = lazy(() => import('./pages/Scientific').then(m => ({ default: m.ScientificCalculator })));
const FractionCalculator = lazy(() => import('./pages/Fraction').then(m => ({ default: m.FractionCalculator })));
const DateCalculator = lazy(() => import('./pages/Date').then(m => ({ default: m.DateCalculator })));
const VolumeCalculator = lazy(() => import('./pages/Volume').then(m => ({ default: m.VolumeCalculator })));
const AreaCalculator = lazy(() => import('./pages/Area').then(m => ({ default: m.AreaCalculator })));
const StatisticsCalculator = lazy(() => import('./pages/Statistics').then(m => ({ default: m.StatisticsCalculator })));
const TriangleCalculator = lazy(() => import('./pages/Triangle').then(m => ({ default: m.TriangleCalculator })));
const PasswordGenerator = lazy(() => import('./pages/PasswordGenerator').then(m => ({ default: m.PasswordGenerator })));
const SquareFootageCalculator = lazy(() => import('./pages/SquareFootage').then(m => ({ default: m.SquareFootageCalculator })));
const TimeCalculator = lazy(() => import('./pages/TimeCalculator').then(m => ({ default: m.TimeCalculator })));
const GradeCalculator = lazy(() => import('./pages/GradeCalculator').then(m => ({ default: m.GradeCalculator })));
const HoursCalculator = lazy(() => import('./pages/HoursCalculator').then(m => ({ default: m.HoursCalculator })));
const IPSubnetCalculator = lazy(() => import('./pages/IPSubnetCalculator').then(m => ({ default: m.IPSubnetCalculator })));
const IRRCalculator = lazy(() => import('./pages/IRRCalculator').then(m => ({ default: m.IRRCalculator })));
const FuelCost = lazy(() => import('./pages/FuelCost').then(m => ({ default: m.FuelCostCalculator })));
const EngineHorsepower = lazy(() => import('./pages/EngineHorsepower').then(m => ({ default: m.EngineHorsepowerCalculator })));
const BTU = lazy(() => import('./pages/BTU').then(m => ({ default: m.BTUCalculator })));
const DewPoint = lazy(() => import('./pages/DewPoint').then(m => ({ default: m.DewPointCalculator })));
const Roofing = lazy(() => import('./pages/Roofing').then(m => ({ default: m.RoofingCalculator })));
const HeatIndex = lazy(() => import('./pages/HeatIndex').then(m => ({ default: m.HeatIndexCalculator })));
const LoanCalculator = lazy(() => import('./pages/Loan').then(m => ({ default: m.LoanCalculator })));
const InvestmentCalculator = lazy(() => import('./pages/Investment').then(m => ({ default: m.InvestmentCalculator })));
const RetirementCalculator = lazy(() => import('./pages/Retirement').then(m => ({ default: m.RetirementCalculator })));
const SavingsCalculator = lazy(() => import('./pages/Savings').then(m => ({ default: m.SavingsCalculator })));
const CreditCardCalculator = lazy(() => import('./pages/CreditCard').then(m => ({ default: m.CreditCardCalculator })));
const InflationCalculator = lazy(() => import('./pages/Inflation').then(m => ({ default: m.InflationCalculator })));
const ROICalculator = lazy(() => import('./pages/ROI').then(m => ({ default: m.ROICalculator })));
const APRCalculator = lazy(() => import('./pages/APR').then(m => ({ default: m.APRCalculator })));
const SimpleInterestCalculator = lazy(() => import('./pages/SimpleInterest').then(m => ({ default: m.SimpleInterestCalculator })));
const SalesTaxCalculator = lazy(() => import('./pages/SalesTax').then(m => ({ default: m.SalesTaxCalculator })));
const SlopeCalculator = lazy(() => import('./pages/SlopeCalculator').then(m => ({ default: m.SlopeCalculator })));
const HexCalculator = lazy(() => import('./pages/HexCalculator').then(m => ({ default: m.HexCalculator })));
const ExponentCalculator = lazy(() => import('./pages/ExponentCalculator').then(m => ({ default: m.ExponentCalculator })));
const MatrixCalculator = lazy(() => import('./pages/MatrixCalculator').then(m => ({ default: m.MatrixCalculator })));
const LongDivisionCalculator = lazy(() => import('./pages/LongDivisionCalculator').then(m => ({ default: m.LongDivisionCalculator })));
const LogCalculator = lazy(() => import('./pages/LogCalculator').then(m => ({ default: m.LogCalculator })));
const BinaryCalculator = lazy(() => import('./pages/BinaryCalculator').then(m => ({ default: m.BinaryCalculator })));
const PercentErrorCalculator = lazy(() => import('./pages/PercentErrorCalculator').then(m => ({ default: m.PercentErrorCalculator })));
const BMRCalculator = lazy(() => import('./pages/BMR').then(m => ({ default: m.BMRCalculator })));
const BodyFatCalculator = lazy(() => import('./pages/BodyFat').then(m => ({ default: m.BodyFatCalculator })));
const MacroCalculator = lazy(() => import('./pages/MacroCalculator').then(m => ({ default: m.MacroCalculator })));
const TDEECalculator = lazy(() => import('./pages/TDEECalculator').then(m => ({ default: m.TDEECalculator })));
const PaceCalculator = lazy(() => import('./pages/PaceCalculator').then(m => ({ default: m.PaceCalculator })));
const PaybackPeriodCalculator = lazy(() => import('./pages/PaybackPeriodCalculator').then(m => ({ default: m.PaybackPeriodCalculator })));
const TargetHeartRateCalculator = lazy(() => import('./pages/TargetHeartRateCalculator').then(m => ({ default: m.TargetHeartRateCalculator })));
const ProteinCalculator = lazy(() => import('./pages/ProteinCalculator').then(m => ({ default: m.ProteinCalculator })));
const FourOhOneKCalculator = lazy(() => import('./pages/401KCalculator').then(m => ({ default: m.FourOhOneKCalculator })));
const InterestRateCalculator = lazy(() => import('./pages/InterestRateCalculator').then(m => ({ default: m.InterestRateCalculator })));
const HouseAffordabilityCalculator = lazy(() => import('./pages/HouseAffordabilityCalculator').then(m => ({ default: m.HouseAffordabilityCalculator })));
const RentCalculator = lazy(() => import('./pages/RentCalculator').then(m => ({ default: m.RentCalculator })));
const RentalPropertyCalculator = lazy(() => import('./pages/RentalPropertyCalculator').then(m => ({ default: m.RentalPropertyCalculator })));
const MarriageTaxCalculator = lazy(() => import('./pages/MarriageTaxCalculator').then(m => ({ default: m.MarriageTaxCalculator })));
const EstateTaxCalculator = lazy(() => import('./pages/EstateTaxCalculator').then(m => ({ default: m.EstateTaxCalculator })));
const PensionCalculator = lazy(() => import('./pages/PensionCalculator').then(m => ({ default: m.PensionCalculator })));
const SocialSecurityCalculator = lazy(() => import('./pages/SocialSecurityCalculator').then(m => ({ default: m.SocialSecurityCalculator })));
const AnnuityCalculator = lazy(() => import('./pages/AnnuityCalculator').then(m => ({ default: m.AnnuityCalculator })));
const AnnuityPayoutCalculator = lazy(() => import('./pages/AnnuityPayoutCalculator').then(m => ({ default: m.AnnuityPayoutCalculator })));
const CreditCardPayoffCalculator = lazy(() => import('./pages/CreditCardPayoffCalculator').then(m => ({ default: m.CreditCardPayoffCalculator })));
const DebtPayoffCalculator = lazy(() => import('./pages/DebtPayoffCalculator').then(m => ({ default: m.DebtPayoffCalculator })));
const DebtConsolidationCalculator = lazy(() => import('./pages/DebtConsolidationCalculator').then(m => ({ default: m.DebtConsolidationCalculator })));
const RepaymentCalculator = lazy(() => import('./pages/RepaymentCalculator').then(m => ({ default: m.RepaymentCalculator })));
const StudentLoanCalculator = lazy(() => import('./pages/StudentLoanCalculator').then(m => ({ default: m.StudentLoanCalculator })));
const CollegeCostCalculator = lazy(() => import('./pages/CollegeCostCalculator').then(m => ({ default: m.CollegeCostCalculator })));
const CDCalculator = lazy(() => import('./pages/CDCalculator').then(m => ({ default: m.CDCalculator })));
const BondCalculator = lazy(() => import('./pages/BondCalculator').then(m => ({ default: m.BondCalculator })));
const MutualFundCalculator = lazy(() => import('./pages/MutualFundCalculator').then(m => ({ default: m.MutualFundCalculator })));
const RothIRACalculator = lazy(() => import('./pages/RothIRACalculator').then(m => ({ default: m.RothIRACalculator })));
const IRACalculator = lazy(() => import('./pages/IRACalculator').then(m => ({ default: m.IRACalculator })));
const RMDCalculator = lazy(() => import('./pages/RMDCalculator').then(m => ({ default: m.RMDCalculator })));
const CashBackLowInterestCalculator = lazy(() => import('./pages/CashBackLowInterestCalculator').then(m => ({ default: m.CashBackLowInterestCalculator })));
const AutoLeaseCalculator = lazy(() => import('./pages/AutoLeaseCalculator').then(m => ({ default: m.AutoLeaseCalculator })));
const DepreciationCalculator = lazy(() => import('./pages/DepreciationCalculator').then(m => ({ default: m.DepreciationCalculator })));
const MarginCalculator = lazy(() => import('./pages/MarginCalculator').then(m => ({ default: m.MarginCalculator })));
const PresentValueCalculator = lazy(() => import('./pages/PresentValueCalculator').then(m => ({ default: m.PresentValueCalculator })));
const FutureValueCalculator = lazy(() => import('./pages/FutureValueCalculator').then(m => ({ default: m.FutureValueCalculator })));
const CommissionCalculator = lazy(() => import('./pages/CommissionCalculator').then(m => ({ default: m.CommissionCalculator })));
const HELOCCalculator = lazy(() => import('./pages/HELOC').then(m => ({ default: m.HELOCCalculator })));
const CanadianMortgageCalculator = lazy(() => import('./pages/CanadianMortgage').then(m => ({ default: m.CanadianMortgageCalculator })));
const MortgageUKCalculator = lazy(() => import('./pages/MortgageUK').then(m => ({ default: m.MortgageUKCalculator })));
const HomeEquityCalculator = lazy(() => import('./pages/HomeEquity').then(m => ({ default: m.HomeEquityCalculator })));
const DebtToIncomeRatioCalculator = lazy(() => import('./pages/DebtToIncomeRatioCalculator').then(m => ({ default: m.DebtToIncomeRatioCalculator })));
const PersonalLoanCalculator = lazy(() => import('./pages/PersonalLoanCalculator').then(m => ({ default: m.PersonalLoanCalculator })));
const BoatLoanCalculator = lazy(() => import('./pages/BoatLoanCalculator').then(m => ({ default: m.BoatLoanCalculator })));
const LeaseCalculator = lazy(() => import('./pages/LeaseCalculator').then(m => ({ default: m.LeaseCalculator })));
const RefinanceCalculator = lazy(() => import('./pages/RefinanceCalculator').then(m => ({ default: m.RefinanceCalculator })));
const BudgetCalculator = lazy(() => import('./pages/BudgetCalculator').then(m => ({ default: m.BudgetCalculator })));
const BusinessLoanCalculator = lazy(() => import('./pages/BusinessLoanCalculator').then(m => ({ default: m.BusinessLoanCalculator })));
const UnitConverter = lazy(() => import('./pages/UnitConverter').then(m => ({ default: m.UnitConverter })));
const CurrencyConverter = lazy(() => import('./pages/CurrencyConverter').then(m => ({ default: m.CurrencyConverter })));
const PercentageOff = lazy(() => import('./pages/PercentageOff').then(m => ({ default: m.PercentageOff })));
const ScientificNotation = lazy(() => import('./pages/ScientificNotation').then(m => ({ default: m.ScientificNotation })));
const RandomNumber = lazy(() => import('./pages/RandomNumber').then(m => ({ default: m.RandomNumber })));
const WordCounter = lazy(() => import('./pages/WordCounter').then(m => ({ default: m.WordCounter })));
const LoveCalculator = lazy(() => import('./pages/LoveCalculator').then(m => ({ default: m.LoveCalculator })));
const Numerology = lazy(() => import('./pages/Numerology').then(m => ({ default: m.Numerology })));
const Zodiac = lazy(() => import('./pages/Zodiac').then(m => ({ default: m.Zodiac })));
const Ovulation = lazy(() => import('./pages/Ovulation').then(m => ({ default: m.Ovulation })));
const SleepCalculator = lazy(() => import('./pages/SleepCalculator').then(m => ({ default: m.SleepCalculator })));
const CaloriesBurned = lazy(() => import('./pages/CaloriesBurned').then(m => ({ default: m.CaloriesBurned })));
const AverageCalculator = lazy(() => import('./pages/AverageCalculator').then(m => ({ default: m.AverageCalculator })));
const RatioCalculator = lazy(() => import('./pages/RatioCalculator').then(m => ({ default: m.RatioCalculator })));
const SquareRoot = lazy(() => import('./pages/SquareRoot').then(m => ({ default: m.SquareRoot })));
const TemperatureConverter = lazy(() => import('./pages/TemperatureConverter').then(m => ({ default: m.TemperatureConverter })));
const RomanNumeralConverter = lazy(() => import('./pages/RomanNumeralConverter').then(m => ({ default: m.RomanNumeralConverter })));
const WaterIntake = lazy(() => import('./pages/WaterIntake').then(m => ({ default: m.WaterIntake })));
const OneRepMax = lazy(() => import('./pages/OneRepMax').then(m => ({ default: m.OneRepMax })));
const ArmBodyFat = lazy(() => import('./pages/ArmBodyFat').then(m => ({ default: m.ArmBodyFat })));
const ChildHeightPredictor = lazy(() => import('./pages/ChildHeightPredictor').then(m => ({ default: m.ChildHeightPredictor })));
const SobrietyCalculator = lazy(() => import('./pages/SobrietyCalculator').then(m => ({ default: m.SobrietyCalculator })));
const LeanBodyMass = lazy(() => import('./pages/LeanBodyMass').then(m => ({ default: m.LeanBodyMass })));
const WaistToHip = lazy(() => import('./pages/WaistToHip').then(m => ({ default: m.WaistToHip })));
const VO2Max = lazy(() => import('./pages/VO2Max').then(m => ({ default: m.VO2Max })));
const PostpartumRecovery = lazy(() => import('./pages/PostpartumRecovery').then(m => ({ default: m.PostpartumRecovery })));
const DueDate = lazy(() => import('./pages/DueDate').then(m => ({ default: m.DueDate })));
const FertilityCalculator = lazy(() => import('./pages/FertilityCalculator').then(m => ({ default: m.FertilityCalculator })));
const BabyWeight = lazy(() => import('./pages/BabyWeight').then(m => ({ default: m.BabyWeight })));
const DaysUntil = lazy(() => import('./pages/DaysUntil').then(m => ({ default: m.DaysUntil })));
const TimeZoneConverter = lazy(() => import('./pages/TimeZoneConverter').then(m => ({ default: m.TimeZoneConverter })));
const BusinessDays = lazy(() => import('./pages/BusinessDays').then(m => ({ default: m.BusinessDays })));
const ChronologicalAge = lazy(() => import('./pages/ChronologicalAge').then(m => ({ default: m.ChronologicalAge })));
const WorkHours = lazy(() => import('./pages/WorkHours').then(m => ({ default: m.WorkHours })));
const TimeCard = lazy(() => import('./pages/TimeCard').then(m => ({ default: m.TimeCard })));
const RetirementDate = lazy(() => import('./pages/RetirementDate').then(m => ({ default: m.RetirementDate })));
const AnniversaryCalculator = lazy(() => import('./pages/AnniversaryCalculator').then(m => ({ default: m.AnniversaryCalculator })));
const TestScoreCalculator = lazy(() => import('./pages/TestScoreCalculator').then(m => ({ default: m.TestScoreCalculator })));
const FinalGradeCalculator = lazy(() => import('./pages/FinalGradeCalculator').then(m => ({ default: m.FinalGradeCalculator })));
const ClassRankCalculator = lazy(() => import('./pages/ClassRankCalculator').then(m => ({ default: m.ClassRankCalculator })));
const WeightedAverageCalculator = lazy(() => import('./pages/WeightedAverageCalculator').then(m => ({ default: m.WeightedAverageCalculator })));
const PregnancyWeightGainCalculator = lazy(() => import('./pages/PregnancyWeightGain').then(m => ({ default: m.PregnancyWeightGainCalculator })));
const PregnancyConceptionCalculator = lazy(() => import('./pages/PregnancyConception').then(m => ({ default: m.PregnancyConceptionCalculator })));
const CarbohydrateCalculator = lazy(() => import('./pages/CarbohydrateCalculator').then(m => ({ default: m.CarbohydrateCalculator })));
const HealthyWeightCalculator = lazy(() => import('./pages/HealthyWeightCalculator').then(m => ({ default: m.HealthyWeightCalculator })));
const FatIntakeCalculator = lazy(() => import('./pages/FatIntakeCalculator').then(m => ({ default: m.FatIntakeCalculator })));
const ConceptionCalculator = lazy(() => import('./pages/ConceptionCalculator').then(m => ({ default: m.ConceptionCalculator })));
const PeriodCalculator = lazy(() => import('./pages/PeriodCalculator').then(m => ({ default: m.PeriodCalculator })));
const GFRCalculator = lazy(() => import('./pages/GFRCalculator').then(m => ({ default: m.GFRCalculator })));
const BodyTypeCalculator = lazy(() => import('./pages/BodyTypeCalculator').then(m => ({ default: m.BodyTypeCalculator })));
const BodySurfaceAreaCalculator = lazy(() => import('./pages/BodySurfaceAreaCalculator').then(m => ({ default: m.BodySurfaceAreaCalculator })));
const BACCalculator = lazy(() => import('./pages/BACCalculator').then(m => ({ default: m.BACCalculator })));
const WeightWatcherPointsCalculator = lazy(() => import('./pages/WeightWatcherPointsCalculator').then(m => ({ default: m.WeightWatcherPointsCalculator })));
const AnorexicBMICalculator = lazy(() => import('./pages/AnorexicBMICalculator').then(m => ({ default: m.AnorexicBMICalculator })));
const OverweightCalculator = lazy(() => import('./pages/OverweightCalculator').then(m => ({ default: m.OverweightCalculator })));
const ReadingLevelCalculator = lazy(() => import('./pages/ReadingLevelCalculator').then(m => ({ default: m.ReadingLevelCalculator })));
const WordsPerMinuteCalculator = lazy(() => import('./pages/WordsPerMinuteCalculator').then(m => ({ default: m.WordsPerMinuteCalculator })));
const StudyTimeCalculator = lazy(() => import('./pages/StudyTimeCalculator').then(m => ({ default: m.StudyTimeCalculator })));
const ScholarshipCalculator = lazy(() => import('./pages/ScholarshipCalculator').then(m => ({ default: m.ScholarshipCalculator })));
const MPGCalculator = lazy(() => import('./pages/MPGCalculator').then(m => ({ default: m.MPGCalculator })));
const CarDepreciationCalculator = lazy(() => import('./pages/CarDepreciationCalculator').then(m => ({ default: m.CarDepreciationCalculator })));
const TireSizeCalculator = lazy(() => import('./pages/TireSizeCalculator').then(m => ({ default: m.TireSizeCalculator })));
const CarLeaseCalculator = lazy(() => import('./pages/CarLeaseCalculator').then(m => ({ default: m.CarLeaseCalculator })));
const VehicleTaxCalculator = lazy(() => import('./pages/VehicleTaxCalculator').then(m => ({ default: m.VehicleTaxCalculator })));
const RoadTripCostCalculator = lazy(() => import('./pages/RoadTripCostCalculator').then(m => ({ default: m.RoadTripCostCalculator })));
const PaintCalculator = lazy(() => import('./pages/PaintCalculator').then(m => ({ default: m.PaintCalculator })));
const FlooringCalculator = lazy(() => import('./pages/FlooringCalculator').then(m => ({ default: m.FlooringCalculator })));
const TileCalculator = lazy(() => import('./pages/TileCalculator').then(m => ({ default: m.TileCalculator })));
const FenceCalculator = lazy(() => import('./pages/FenceCalculator').then(m => ({ default: m.FenceCalculator })));
const MulchCalculator = lazy(() => import('./pages/MulchCalculator').then(m => ({ default: m.MulchCalculator })));
const GravelCalculator = lazy(() => import('./pages/GravelCalculator').then(m => ({ default: m.GravelCalculator })));
const StairCalculator = lazy(() => import('./pages/StairCalculator').then(m => ({ default: m.StairCalculator })));
const WallpaperCalculator = lazy(() => import('./pages/WallpaperCalculator').then(m => ({ default: m.WallpaperCalculator })));
const DeckCalculator = lazy(() => import('./pages/DeckCalculator').then(m => ({ default: m.DeckCalculator })));
const CalculatorMonthlySearches = lazy(() => import('./pages/CalculatorMonthlySearches').then(m => ({ default: m.CalculatorMonthlySearches })));
const PayrollCalculator = lazy(() => import('./pages/PayrollCalculator').then(m => ({ default: m.PayrollCalculator })));
const TakeHomePayCalculator = lazy(() => import('./pages/TakeHomePayCalculator').then(m => ({ default: m.TakeHomePayCalculator })));
const CapitalGainsTaxCalculator = lazy(() => import('./pages/CapitalGainsTaxCalculator').then(m => ({ default: m.CapitalGainsTaxCalculator })));
const TaxBracketCalculator = lazy(() => import('./pages/TaxBracketCalculator').then(m => ({ default: m.TaxBracketCalculator })));
const DividendCalculator = lazy(() => import('./pages/DividendCalculator').then(m => ({ default: m.DividendCalculator })));
const NetWorthCalculator = lazy(() => import('./pages/NetWorthCalculator').then(m => ({ default: m.NetWorthCalculator })));
const StockReturnCalculator = lazy(() => import('./pages/StockReturnCalculator').then(m => ({ default: m.StockReturnCalculator })));
const CryptocurrencyCalculator = lazy(() => import('./pages/CryptocurrencyCalculator').then(m => ({ default: m.CryptocurrencyCalculator })));
const BitcoinProfitCalculator = lazy(() => import('./pages/BitcoinProfitCalculator').then(m => ({ default: m.BitcoinProfitCalculator })));
const DogAgeCalculator = lazy(() => import('./pages/DogAgeCalculator').then(m => ({ default: m.DogAgeCalculator })));
const CatAgeCalculator = lazy(() => import('./pages/CatAgeCalculator').then(m => ({ default: m.CatAgeCalculator })));
const AngelNumberCalculator = lazy(() => import('./pages/AngelNumberCalculator').then(m => ({ default: m.AngelNumberCalculator })));
const LuckyNumberCalculator = lazy(() => import('./pages/LuckyNumberCalculator').then(m => ({ default: m.LuckyNumberCalculator })));
const FriendshipCalculator = lazy(() => import('./pages/FriendshipCalculator').then(m => ({ default: m.FriendshipCalculator })));
const StarSignCompatibility = lazy(() => import('./pages/StarSignCompatibility').then(m => ({ default: m.StarSignCompatibility })));
const NameCompatibility = lazy(() => import('./pages/NameCompatibility').then(m => ({ default: m.NameCompatibility })));
const IQScoreEstimator = lazy(() => import('./pages/IQScoreEstimator').then(m => ({ default: m.IQScoreEstimator })));
const QuadraticFormulaCalculator = lazy(() => import('./pages/QuadraticFormulaCalculator').then(m => ({ default: m.QuadraticFormulaCalculator })));
const GCFCalculator = lazy(() => import('./pages/GCFCalculator').then(m => ({ default: m.GCFCalculator })));
const LCMCalculator = lazy(() => import('./pages/LCMCalculator').then(m => ({ default: m.LCMCalculator })));
const PythagoreanTheoremCalculator = lazy(() => import('./pages/PythagoreanTheoremCalculator').then(m => ({ default: m.PythagoreanTheoremCalculator })));
const ProbabilityCalculator = lazy(() => import('./pages/ProbabilityCalculator').then(m => ({ default: m.ProbabilityCalculator })));
const PermutationCalculator = lazy(() => import('./pages/PermutationCalculator').then(m => ({ default: m.PermutationCalculator })));
const CombinationCalculator = lazy(() => import('./pages/CombinationCalculator').then(m => ({ default: m.CombinationCalculator })));
const PrimeNumberChecker = lazy(() => import('./pages/PrimeNumberChecker').then(m => ({ default: m.PrimeNumberChecker })));
const SignificantFiguresCalculator = lazy(() => import('./pages/SignificantFiguresCalculator').then(m => ({ default: m.SignificantFiguresCalculator })));
const StandardDeviationCalculator = lazy(() => import('./pages/StandardDeviationCalculator').then(m => ({ default: m.StandardDeviationCalculator })));
const IncomeTaxCalculator = lazy(() => import('./pages/IncomeTaxCalculator').then(m => ({ default: m.IncomeTaxCalculator })));
const VoltageDropCalculator = lazy(() => import('./pages/VoltageDropCalculator').then(m => ({ default: m.VoltageDropCalculator })));
const ResistorCalculator = lazy(() => import('./pages/ResistorCalculator').then(m => ({ default: m.ResistorCalculator })));
const OhmsLawCalculator = lazy(() => import('./pages/OhmsLawCalculator').then(m => ({ default: m.OhmsLawCalculator })));
const ElectricityCalculator = lazy(() => import('./pages/ElectricityCalculator').then(m => ({ default: m.ElectricityCalculator })));
const FactorCalculator = lazy(() => import('./pages/FactorCalculator').then(m => ({ default: m.FactorCalculator })));
const RoundingCalculator = lazy(() => import('./pages/RoundingCalculator').then(m => ({ default: m.RoundingCalculator })));
const BigNumberCalculator = lazy(() => import('./pages/BigNumberCalculator').then(m => ({ default: m.BigNumberCalculator })));
const PrimeFactorizationCalculator = lazy(() => import('./pages/PrimeFactorizationCalculator').then(m => ({ default: m.PrimeFactorizationCalculator })));
const CommonFactorCalculator = lazy(() => import('./pages/CommonFactorCalculator').then(m => ({ default: m.CommonFactorCalculator })));
const BasicCalculator = lazy(() => import('./pages/BasicCalculator').then(m => ({ default: m.BasicCalculator })));
const PValueCalculator = lazy(() => import('./pages/PValueCalculator').then(m => ({ default: m.PValueCalculator })));
const HeightCalculator = lazy(() => import('./pages/HeightCalculator').then(m => ({ default: m.HeightCalculator })));
const BraSizeCalculator = lazy(() => import('./pages/BraSizeCalculator').then(m => ({ default: m.BraSizeCalculator })));
const DiceRoller = lazy(() => import('./pages/DiceRoller').then(m => ({ default: m.DiceRoller })));
const GDPCalculator = lazy(() => import('./pages/GDPCalculator').then(m => ({ default: m.GDPCalculator })));
const ShoeSizeConversion = lazy(() => import('./pages/ShoeSizeConversion').then(m => ({ default: m.ShoeSizeConversion })));
const DensityCalculator = lazy(() => import('./pages/DensityCalculator').then(m => ({ default: m.DensityCalculator })));
const MassCalculator = lazy(() => import('./pages/MassCalculator').then(m => ({ default: m.MassCalculator })));
const WeightCalculator = lazy(() => import('./pages/WeightCalculator').then(m => ({ default: m.WeightCalculator })));
const SpeedCalculator = lazy(() => import('./pages/SpeedCalculator').then(m => ({ default: m.SpeedCalculator })));
const MolarityCalculator = lazy(() => import('./pages/MolarityCalculator').then(m => ({ default: m.MolarityCalculator })));
const MolecularWeightCalculator = lazy(() => import('./pages/MolecularWeightCalculator').then(m => ({ default: m.MolecularWeightCalculator })));
const GolfHandicapCalculator = lazy(() => import('./pages/GolfHandicapCalculator').then(m => ({ default: m.GolfHandicapCalculator })));
const WindChillCalculator = lazy(() => import('./pages/WindChillCalculator').then(m => ({ default: m.WindChillCalculator })));
const BandwidthCalculator = lazy(() => import('./pages/BandwidthCalculator').then(m => ({ default: m.BandwidthCalculator })));
const Base64Converter = lazy(() => import('./pages/Base64Converter').then(m => ({ default: m.Base64Converter })));
const URLConverter = lazy(() => import('./pages/URLConverter').then(m => ({ default: m.URLConverter })));
const TimeDurationCalculator = lazy(() => import('./pages/TimeDurationCalculator').then(m => ({ default: m.TimeDurationCalculator })));
const DayCounter = lazy(() => import('./pages/DayCounter').then(m => ({ default: m.DayCounter })));
const DayOfTheWeekCalculator = lazy(() => import('./pages/DayOfTheWeekCalculator').then(m => ({ default: m.DayOfTheWeekCalculator })));
const RightTriangleCalculator = lazy(() => import('./pages/RightTriangleCalculator').then(m => ({ default: m.RightTriangleCalculator })));
const NumberSequenceCalculator = lazy(() => import('./pages/NumberSequenceCalculator').then(m => ({ default: m.NumberSequenceCalculator })));
const HalfLifeCalculator = lazy(() => import('./pages/HalfLifeCalculator').then(m => ({ default: m.HalfLifeCalculator })));
const SampleSizeCalculator = lazy(() => import('./pages/SampleSizeCalculator').then(m => ({ default: m.SampleSizeCalculator })));
const ZScoreCalculator = lazy(() => import('./pages/ZScoreCalculator').then(m => ({ default: m.ZScoreCalculator })));
const ConfidenceIntervalCalculator = lazy(() => import('./pages/ConfidenceIntervalCalculator').then(m => ({ default: m.ConfidenceIntervalCalculator })));
const DistanceCalculator = lazy(() => import('./pages/DistanceCalculator').then(m => ({ default: m.DistanceCalculator })));
const CircleCalculator = lazy(() => import('./pages/CircleCalculator').then(m => ({ default: m.CircleCalculator })));
const SurfaceAreaCalculator = lazy(() => import('./pages/SurfaceAreaCalculator').then(m => ({ default: m.SurfaceAreaCalculator })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const LifeInsuranceCalculator = lazy(() => import('./pages/LifeInsurance').then(m => ({ default: m.LifeInsuranceCalculator })));
const HealthInsuranceCalculator = lazy(() => import('./pages/HealthInsurance').then(m => ({ default: m.HealthInsuranceCalculator })));
const CarInsuranceCalculator = lazy(() => import('./pages/CarInsurance').then(m => ({ default: m.CarInsuranceCalculator })));
const CreditScoreSimulator = lazy(() => import('./pages/CreditScoreSimulator').then(m => ({ default: m.CreditScoreSimulator })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(m => ({ default: m.Sitemap })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then(m => ({ default: m.CategoryPage })));

import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <TrailingSlashRedirect />
        <CanonicalSEO />
        <Layout>
          <ErrorBoundary>
            <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <Loader2 className="w-10 h-10 animate-spin text-blue-600 opacity-20" />
            </div>
          }>
            <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Standard Top-Level Routes */}
            <Route path="/mortgage" element={<MortgageCalculator />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
            <Route path="/salary" element={<SalaryCalculator />} />
            <Route path="/math/percentage" element={<PercentageCalculator />} />
            <Route path="/age" element={<AgeCalculator />} />
            <Route path="/auto-loan" element={<AutoLoanCalculator />} />
            <Route path="/discount" element={<DiscountCalculator />} />
            <Route path="/calorie" element={<CalorieCalculator />} />
            <Route path="/tip" element={<TipCalculator />} />
            <Route path="/unit-converter" element={<UnitConverter />} />
            <Route path="/currency-converter" element={<CurrencyConverter />} />
            <Route path="/word-counter" element={<WordCounter />} />
            <Route path="/scientific-notation" element={<ScientificNotation />} />
            <Route path="/apr" element={<APRCalculator />} />
            <Route path="/simple-interest" element={<SimpleInterestCalculator />} />
            <Route path="/sales-tax" element={<SalesTaxCalculator />} />
            <Route path="/math/slope" element={<SlopeCalculator />} />
            <Route path="/math/exponent" element={<ExponentCalculator />} />
            <Route path="/math/matrix" element={<MatrixCalculator />} />
            <Route path="/math/long-division" element={<LongDivisionCalculator />} />
            <Route path="/math/log" element={<LogCalculator />} />
            <Route path="/math/percent-error" element={<PercentErrorCalculator />} />

            {/* Silo: Finance (Moved to top-level) */}
            <Route path="/payroll" element={<PayrollCalculator />} />
            <Route path="/take-home-pay" element={<TakeHomePayCalculator />} />
            <Route path="/capital-gains-tax" element={<CapitalGainsTaxCalculator />} />
            <Route path="/tax-bracket" element={<TaxBracketCalculator />} />
            <Route path="/dividend" element={<DividendCalculator />} />
            <Route path="/net-worth" element={<NetWorthCalculator />} />
            <Route path="/stock-return" element={<StockReturnCalculator />} />
            <Route path="/cryptocurrency" element={<CryptocurrencyCalculator />} />
            <Route path="/bitcoin-profit" element={<BitcoinProfitCalculator />} />
            <Route path="/loan" element={<LoanCalculator />} />
            <Route path="/investment" element={<InvestmentCalculator />} />
            <Route path="/retirement" element={<RetirementCalculator />} />
            <Route path="/savings" element={<SavingsCalculator />} />
            <Route path="/life-insurance" element={<LifeInsuranceCalculator />} />
            <Route path="/health-insurance" element={<HealthInsuranceCalculator />} />
            <Route path="/car-insurance" element={<CarInsuranceCalculator />} />
            <Route path="/income-tax" element={<IncomeTaxCalculator />} />
            <Route path="/cd" element={<CDCalculator />} />
            <Route path="/interest-rate" element={<InterestRateCalculator />} />
            <Route path="/401k" element={<FourOhOneKCalculator />} />
            <Route path="/roth-ira" element={<RothIRACalculator />} />
            <Route path="/house-affordability" element={<HouseAffordabilityCalculator />} />
            <Route path="/heloc" element={<HELOCCalculator />} />
            <Route path="/personal-loan" element={<PersonalLoanCalculator />} />
            <Route path="/student-loan" element={<StudentLoanCalculator />} />
            <Route path="/business-loan" element={<BusinessLoanCalculator />} />
            <Route path="/credit-card" element={<CreditCardCalculator />} />
            <Route path="/debt-payoff" element={<DebtPayoffCalculator />} />
            <Route path="/debt-consolidation" element={<DebtConsolidationCalculator />} />
            <Route path="/roi" element={<ROICalculator />} />
            <Route path="/inflation" element={<InflationCalculator />} />
            <Route path="/credit-score-simulator" element={<CreditScoreSimulator />} />

            {/* Silo: Health (Moved to top-level) */}
            <Route path="/bmr" element={<BMRCalculator />} />
            <Route path="/body-fat" element={<BodyFatCalculator />} />
            <Route path="/macro" element={<MacroCalculator />} />
            <Route path="/tdee" element={<TDEECalculator />} />
            <Route path="/pace" element={<PaceCalculator />} />
            <Route path="/target-heart-rate" element={<TargetHeartRateCalculator />} />
            <Route path="/protein" element={<ProteinCalculator />} />
            <Route path="/pregnancy" element={<PregnancyCalculator />} />
            <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
            <Route path="/ovulation" element={<Ovulation />} />
            <Route path="/sleep-calculator" element={<SleepCalculator />} />
            <Route path="/calories-burned" element={<CaloriesBurned />} />
            <Route path="/water-intake" element={<WaterIntake />} />
            <Route path="/one-rep-max" element={<OneRepMax />} />
            <Route path="/arm-body-fat" element={<ArmBodyFat />} />
            <Route path="/child-height-predictor" element={<ChildHeightPredictor />} />
            <Route path="/lean-body-mass" element={<LeanBodyMass />} />
            <Route path="/waist-to-hip" element={<WaistToHip />} />
            <Route path="/vo2-max" element={<VO2Max />} />
            <Route path="/postpartum-recovery" element={<PostpartumRecovery />} />
            <Route path="/due-date" element={<DueDate />} />
            <Route path="/fertility-calculator" element={<FertilityCalculator />} />
            <Route path="/baby-weight" element={<BabyWeight />} />

            {/* Silo: Conversions (Moved to top-level) */}
            <Route path="/temperature-converter" element={<TemperatureConverter />} />
            <Route path="/roman-numeral-converter" element={<RomanNumeralConverter />} />
            <Route path="/shoe-size-conversion" element={<ShoeSizeConversion />} />
            <Route path="/time-zone-converter" element={<TimeZoneConverter />} />
            <Route path="/square-footage" element={<SquareFootageCalculator />} />
            <Route path="/hex" element={<HexCalculator />} />
            <Route path="/binary" element={<BinaryCalculator />} />

            {/* All other routes */}
            <Route path="/vat" element={<VATCalculator />} />
            <Route path="/gpa" element={<GPACalculator />} />
            <Route path="/concrete" element={<ConcreteCalculator />} />
            <Route path="/amazon-fba" element={<AmazonFBACalculator />} />
            <Route path="/brrrr" element={<BRRRRCalculator />} />
            <Route path="/scientific" element={<ScientificCalculator />} />
            <Route path="/math/fraction" element={<FractionCalculator />} />
            <Route path="/date" element={<DateCalculator />} />
            <Route path="/math/volume" element={<VolumeCalculator />} />
            <Route path="/math/area" element={<AreaCalculator />} />
            <Route path="/math/statistics" element={<StatisticsCalculator />} />
            <Route path="/math/triangle" element={<TriangleCalculator />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
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
            <Route path="/repayment" element={<RepaymentCalculator />} />
            <Route path="/college-cost" element={<CollegeCostCalculator />} />
            <Route path="/bond" element={<BondCalculator />} />
            <Route path="/mutual-fund" element={<MutualFundCalculator />} />
            <Route path="/ira" element={<IRACalculator />} />
            <Route path="/rmd" element={<RMDCalculator />} />
            <Route path="/cash-back-low-interest" element={<CashBackLowInterestCalculator />} />
            <Route path="/auto-lease" element={<AutoLeaseCalculator />} />
            <Route path="/depreciation" element={<DepreciationCalculator />} />
            <Route path="/margin" element={<MarginCalculator />} />
            <Route path="/present-value" element={<PresentValueCalculator />} />
            <Route path="/future-value" element={<FutureValueCalculator />} />
            <Route path="/commission" element={<CommissionCalculator />} />
            <Route path="/canadian-mortgage" element={<CanadianMortgageCalculator />} />
            <Route path="/mortgage-uk" element={<MortgageUKCalculator />} />
            <Route path="/home-equity" element={<HomeEquityCalculator />} />
            <Route path="/dti-ratio" element={<DebtToIncomeRatioCalculator />} />
            <Route path="/boat-loan" element={<BoatLoanCalculator />} />
            <Route path="/lease" element={<LeaseCalculator />} />
            <Route path="/refinance" element={<RefinanceCalculator />} />
            <Route path="/budget" element={<BudgetCalculator />} />
            <Route path="/percentage-off" element={<PercentageOff />} />
            <Route path="/random-number" element={<RandomNumber />} />
            <Route path="/love-calculator" element={<LoveCalculator />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/zodiac" element={<Zodiac />} />
            <Route path="/math/average" element={<AverageCalculator />} />
            <Route path="/math/ratio" element={<RatioCalculator />} />
            <Route path="/square-root" element={<SquareRoot />} />
            <Route path="/sobriety-calculator" element={<SobrietyCalculator />} />
            <Route path="/days-until" element={<DaysUntil />} />
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
            <Route path="/dog-age" element={<DogAgeCalculator />} />
            <Route path="/cat-age" element={<CatAgeCalculator />} />
            <Route path="/angel-number" element={<AngelNumberCalculator />} />
            <Route path="/lucky-number" element={<LuckyNumberCalculator />} />
            <Route path="/friendship" element={<FriendshipCalculator />} />
            <Route path="/star-sign-compatibility" element={<StarSignCompatibility />} />
            <Route path="/name-compatibility" element={<NameCompatibility />} />
            <Route path="/iq-score" element={<IQScoreEstimator />} />
            <Route path="/math/quadratic-formula" element={<QuadraticFormulaCalculator />} />
            <Route path="/math/gcf" element={<GCFCalculator />} />
            <Route path="/math/lcm" element={<LCMCalculator />} />
            <Route path="/math/pythagorean-theorem" element={<PythagoreanTheoremCalculator />} />
            <Route path="/math/probability" element={<ProbabilityCalculator />} />
            <Route path="/math/permutation" element={<PermutationCalculator />} />
            <Route path="/math/combination" element={<CombinationCalculator />} />
            <Route path="/math/prime-number" element={<PrimeNumberChecker />} />
            <Route path="/math/significant-figures" element={<SignificantFiguresCalculator />} />
            <Route path="/math/standard-deviation" element={<StandardDeviationCalculator />} />
            <Route path="/voltage-drop" element={<VoltageDropCalculator />} />
            <Route path="/resistor" element={<ResistorCalculator />} />
            <Route path="/ohms-law" element={<OhmsLawCalculator />} />
            <Route path="/electricity" element={<ElectricityCalculator />} />
            <Route path="/math/factor" element={<FactorCalculator />} />
            <Route path="/math/rounding" element={<RoundingCalculator />} />
            <Route path="/math/big-number" element={<BigNumberCalculator />} />
            <Route path="/math/prime-factorization" element={<PrimeFactorizationCalculator />} />
            <Route path="/math/common-factor" element={<CommonFactorCalculator />} />
            <Route path="/math/basic-calculator" element={<BasicCalculator />} />
            <Route path="/math/p-value" element={<PValueCalculator />} />
            <Route path="/height" element={<HeightCalculator />} />
            <Route path="/bra-size" element={<BraSizeCalculator />} />
            <Route path="/dice-roller" element={<DiceRoller />} />
            <Route path="/gdp" element={<GDPCalculator />} />
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
            <Route path="/math/right-triangle" element={<RightTriangleCalculator />} />
            <Route path="/math/number-sequence" element={<NumberSequenceCalculator />} />
            <Route path="/math/half-life" element={<HalfLifeCalculator />} />
            <Route path="/math/sample-size" element={<SampleSizeCalculator />} />
            <Route path="/math/z-score" element={<ZScoreCalculator />} />
            <Route path="/math/confidence-interval" element={<ConfidenceIntervalCalculator />} />
            <Route path="/math/distance" element={<DistanceCalculator />} />
            <Route path="/math/circle" element={<CircleCalculator />} />
            <Route path="/math/surface-area" element={<SurfaceAreaCalculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* All Category Hubs at top-level */}
            {CATEGORIES.map(cat => (
              <Route key={cat.slug} path={`/${cat.slug}`} element={<CategoryPage />} />
            ))}
            
            <Route path="/category/:categoryKey" element={<CategoryPage />} />
            <Route path="/:calculatorPath" element={<CalculatorPage />} />
          </Routes>
          </Suspense>
          </ErrorBoundary>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
