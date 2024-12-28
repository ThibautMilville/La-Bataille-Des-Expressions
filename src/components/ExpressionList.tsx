import { Expression } from '../types/expression';
import { CountryFlag } from './CountryFlag';

interface ExpressionListProps {
  expressions: Expression[];
}

export function ExpressionList({ expressions }: ExpressionListProps) {
  return (
    <div className="max-h-64 overflow-y-auto rounded-xl bg-white/50 p-4 custom-scrollbar">
      {expressions.map((expression, index) => (
        <div 
          key={`${expression.id}-${index}`}
          className="flex items-center gap-4 p-4 bg-white rounded-lg mb-3 shadow-sm hover:shadow-md transition-shadow"
        >
          <CountryFlag country={expression.type === 'french' ? 'france' : 'canada'} />
          <div className="text-left flex-1">
            <div className="font-semibold text-gray-800">{expression.text}</div>
            <div className="text-sm text-gray-600">{expression.translation}</div>
          </div>
        </div>
      ))}
    </div>
  );
}