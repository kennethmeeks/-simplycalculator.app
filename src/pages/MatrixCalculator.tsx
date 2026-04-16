import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Grid, Plus, Minus, X, Info } from 'lucide-react';

export const MatrixCalculator: React.FC = () => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [matrixA, setMatrixA] = useState([[1, 2], [3, 4]]);
  const [matrixB, setMatrixB] = useState([[5, 6], [7, 8]]);
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply'>('add');
  const [result, setResult] = useState<number[][]>([]);

  useEffect(() => {
    const res: number[][] = [];
    if (operation === 'add') {
      for (let i = 0; i < rows; i++) {
        res[i] = [];
        for (let j = 0; j < cols; j++) {
          res[i][j] = (matrixA[i]?.[j] || 0) + (matrixB[i]?.[j] || 0);
        }
      }
    } else if (operation === 'subtract') {
      for (let i = 0; i < rows; i++) {
        res[i] = [];
        for (let j = 0; j < cols; j++) {
          res[i][j] = (matrixA[i]?.[j] || 0) - (matrixB[i]?.[j] || 0);
        }
      }
    } else if (operation === 'multiply') {
      // For simplicity, we only do A * B where dimensions match for this basic tool
      for (let i = 0; i < rows; i++) {
        res[i] = [];
        for (let j = 0; j < cols; j++) {
          let sum = 0;
          for (let k = 0; k < cols; k++) {
            sum += (matrixA[i]?.[k] || 0) * (matrixB[k]?.[j] || 0);
          }
          res[i][j] = sum;
        }
      }
    }
    setResult(res);
  }, [matrixA, matrixB, operation, rows, cols]);

  const updateMatrix = (matrix: 'A' | 'B', r: number, c: number, val: number) => {
    if (matrix === 'A') {
      const newA = [...matrixA];
      if (!newA[r]) newA[r] = [];
      newA[r][c] = val;
      setMatrixA(newA);
    } else {
      const newB = [...matrixB];
      if (!newB[r]) newB[r] = [];
      newB[r][c] = val;
      setMatrixB(newB);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Matrix Calculator | Add, Subtract & Multiply Matrices</title>
        <meta name="description" content="Free online matrix calculator for basic operations. Add, subtract, and multiply matrices with ease. Perfect for linear algebra students in 2026." />
      </Helmet>

      <h1>Matrix Calculator</h1>
      <p>Perform basic matrix operations including addition, subtraction, and multiplication. Ideal for solving linear algebra problems and engineering calculations.</p>

      

      <div className="calculator-container mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <label className="input-label">Rows</label>
            <input type="number" min="1" max="4" value={rows} onChange={(e) => setRows(Number(e.target.value))} className="input-field w-20" />
          </div>
          <div>
            <label className="input-label">Cols</label>
            <input type="number" min="1" max="4" value={cols} onChange={(e) => setCols(Number(e.target.value))} className="input-field w-20" />
          </div>
          <div className="flex-1"></div>
          <div className="flex gap-2">
            <button onClick={() => setOperation('add')} className={`p-2 rounded border ${operation === 'add' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200'}`}><Plus size={20} /></button>
            <button onClick={() => setOperation('subtract')} className={`p-2 rounded border ${operation === 'subtract' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200'}`}><Minus size={20} /></button>
            <button onClick={() => setOperation('multiply')} className={`p-2 rounded border ${operation === 'multiply' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200'}`}><X size={20} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase mb-2">Matrix A</div>
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
              {Array.from({ length: rows }).map((_, r) => 
                Array.from({ length: cols }).map((_, c) => (
                  <input 
                    key={`a-${r}-${c}`}
                    type="number" 
                    value={matrixA[r]?.[c] || 0} 
                    onChange={(e) => updateMatrix('A', r, c, Number(e.target.value))}
                    className="input-field text-center p-1"
                  />
                ))
              )}
            </div>
          </div>

          <div className="flex justify-center text-2xl font-bold text-slate-400">
            {operation === 'add' ? '+' : operation === 'subtract' ? '-' : '×'}
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase mb-2">Matrix B</div>
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
              {Array.from({ length: rows }).map((_, r) => 
                Array.from({ length: cols }).map((_, c) => (
                  <input 
                    key={`b-${r}-${c}`}
                    type="number" 
                    value={matrixB[r]?.[c] || 0} 
                    onChange={(e) => updateMatrix('B', r, c, Number(e.target.value))}
                    className="input-field text-center p-1"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="calculator-container">
        <div className="section-title">Result Matrix</div>
        <div className="grid gap-2 max-w-xs mx-auto" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {result.map((row, r) => 
            row.map((val, c) => (
              <div key={`res-${r}-${c}`} className="p-3 bg-blue-50 border border-blue-100 rounded text-center font-bold text-[#0066cc]">
                {val}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Matrix Math: A Linear Algebra Guide</h2>
        <p>
          Matrices are rectangular arrays of numbers, symbols, or expressions arranged in rows and columns. They are the building blocks of linear algebra and are used in everything from computer graphics to quantum physics. Our <strong>matrix calculator</strong> helps you perform basic operations quickly in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Matrix Addition and Subtraction</h3>
        <p>
          To add or subtract two matrices, they must have the same dimensions (the same number of rows and columns). You simply add or subtract the corresponding elements in each matrix.
        </p>
        <p>Example: A[0,0] + B[0,0] = Result[0,0]</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Matrix Multiplication</h3>
        <p>
          Matrix multiplication is more complex. To multiply matrix A by matrix B, the number of columns in A must equal the number of rows in B. The resulting matrix will have the number of rows from A and the number of columns from B.
        </p>
        <p>
          Each element in the result is the "dot product" of a row from A and a column from B.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Applications of Matrices</h3>
        <ul>
          <li><strong>Computer Graphics:</strong> Matrices are used to rotate, scale, and translate 3D objects on your screen.</li>
          <li><strong>Data Science:</strong> Large datasets are often represented as matrices for efficient processing.</li>
          <li><strong>Engineering:</strong> Used to solve systems of linear equations in structural analysis and circuit design.</li>
          <li><strong>Economics:</strong> Input-output models use matrices to represent the flow of goods between industries.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is A * B the same as B * A?</p>
            <p>No. Matrix multiplication is not commutative. Changing the order of the matrices will usually result in a different answer, or the operation might become impossible due to dimension mismatch.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is an Identity Matrix?</p>
            <p>An identity matrix is a square matrix with 1s on the main diagonal and 0s everywhere else. Multiplying any matrix by the identity matrix results in the original matrix (A * I = A).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the determinant of a matrix?</p>
            <p>The determinant is a scalar value that can be calculated from a square matrix. It provides important information about the matrix, such as whether it has an inverse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
