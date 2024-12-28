import { Expression } from '../types/expression';
import { CountryFlag } from './CountryFlag';

interface ExpressionListProps {
  expressions: Expression[];
}

export function ExpressionList({ expressions }: ExpressionListProps) {
  return (
    <div className="max-h-[60vh] overflow-y-auto rounded-xl bg-white/50 p-3 sm:p-4 custom-scrollbar mx-4 sm:mx-0">
      {expressions.map((expression, index) => (
        <div 
          key={`${expression.id}-${index}`}
          className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg mb-3 shadow-sm hover:shadow-md transition-shadow"
        >
          <CountryFlag country={expression.type === 'french' ? 'france' : 'canada'} />
          <div className="text-left flex-1">
            <div className="font-semibold text-gray-800 text-base sm:text-lg mb-1">{expression.text}</div>
            <div className="text-sm sm:text-base text-gray-600">{expression.translation}</div>
          </div>
        </div>
      ))}
    </div>
  );
}