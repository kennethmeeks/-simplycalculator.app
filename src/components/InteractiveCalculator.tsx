
import React, { useState } from 'react';
import { Delete, Divide, Equal, Minus, Plus, X } from 'lucide-react';

export const InteractiveCalculator: React.FC = () => {
    const [display, setDisplay] = useState('0');
    const [prevValue, setPrevValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputDigit = (digit: string) => {
        if (waitingForOperand) {
            setDisplay(digit);
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? digit : display + digit);
        }
    };

    const inputDot = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const clearAll = () => {
        setDisplay('0');
        setPrevValue(null);
        setOperator(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperator: string) => {
        const inputValue = parseFloat(display);

        if (prevValue === null) {
            setPrevValue(inputValue);
        } else if (operator) {
            const currentValue = prevValue || 0;
            const newValue = calculate(currentValue, inputValue, operator);
            setPrevValue(newValue);
            setDisplay(String(newValue));
        }

        setWaitingForOperand(true);
        setOperator(nextOperator);
    };

    const calculate = (prev: number, next: number, op: string) => {
        switch (op) {
            case '+': return prev + next;
            case '-': return prev - next;
            case '*': return prev * next;
            case '/': return prev / next;
            default: return next;
        }
    };

    const handleEquals = () => {
        const inputValue = parseFloat(display);
        if (operator && prevValue !== null) {
            const newValue = calculate(prevValue, inputValue, operator);
            setDisplay(String(newValue));
            setPrevValue(null);
            setOperator(null);
            setWaitingForOperand(false);
        }
    };

    const buttons = [
        { label: 'AC', action: clearAll, className: 'col-span-2 bg-slate-100 text-slate-800' },
        { label: 'DEL', action: () => setDisplay(display.length > 1 ? display.slice(0, -1) : '0'), className: 'bg-slate-100 text-slate-800' },
        { label: '/', action: () => performOperation('/'), icon: Divide, className: 'bg-[#0066cc] text-white' },
        { label: '7', action: () => inputDigit('7'), className: 'bg-white' },
        { label: '8', action: () => inputDigit('8'), className: 'bg-white' },
        { label: '9', action: () => inputDigit('9'), className: 'bg-white' },
        { label: 'x', action: () => performOperation('*'), icon: X, className: 'bg-[#0066cc] text-white' },
        { label: '4', action: () => inputDigit('4'), className: 'bg-white' },
        { label: '5', action: () => inputDigit('5'), className: 'bg-white' },
        { label: '6', action: () => inputDigit('6'), className: 'bg-white' },
        { label: '-', action: () => performOperation('-'), icon: Minus, className: 'bg-[#0066cc] text-white' },
        { label: '1', action: () => inputDigit('1'), className: 'bg-white' },
        { label: '2', action: () => inputDigit('2'), className: 'bg-white' },
        { label: '3', action: () => inputDigit('3'), className: 'bg-white' },
        { label: '+', action: () => performOperation('+'), icon: Plus, className: 'bg-[#0066cc] text-white' },
        { label: '0', action: () => inputDigit('0'), className: 'col-span-2 bg-white' },
        { label: '.', action: inputDot, className: 'bg-white' },
        { label: '=', action: handleEquals, icon: Equal, className: 'bg-[#0066cc] text-white hover:bg-blue-700' },
    ];

    return (
        <div className="bg-slate-100 p-8 rounded-lg shadow-sm max-w-sm mx-auto w-full border border-slate-200">
            {/* Display */}
            <div className="bg-white p-6 rounded border border-slate-300 mb-6 text-right overflow-hidden shadow-inner">
                <div className="text-slate-400 text-xs font-mono h-4 mb-2">
                    {prevValue !== null && `${prevValue} ${operator}`}
                </div>
                <div className="text-slate-900 text-4xl font-bold tracking-tight truncate font-mono">
                    {display}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-4 gap-2">
                {buttons.map((btn, idx) => (
                    <button
                        key={idx}
                        onClick={btn.action}
                        className={`h-14 rounded font-bold text-sm transition-all active:scale-95 flex items-center justify-center border border-slate-300 shadow-sm ${btn.className}`}
                    >
                        {btn.icon ? <btn.icon className="w-5 h-5" /> : btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
