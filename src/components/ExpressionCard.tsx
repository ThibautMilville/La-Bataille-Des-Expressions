interface ExpressionCardProps {
  text: string;
  translation: string;
  description: string;
  onClick: () => void;
  isSelected?: boolean;
  selectedId?: string | null;
  id: string;
}

export default function ExpressionCard({ 
  text, 
  translation, 
  description, 
  onClick, 
  selectedId,
  id
}: ExpressionCardProps) {
  const isCardSelected = selectedId === id;
  const shouldBeDisabled = selectedId !== null && !isCardSelected;

  return (
    <button
      onClick={onClick}
      disabled={shouldBeDisabled}
      className={`
        w-full p-4 sm:p-6 rounded-2xl transition-all duration-300 
        bg-gradient-to-br from-white to-gray-50
        border-2 shadow-lg backdrop-blur-sm
        group relative overflow-hidden
        ${shouldBeDisabled 
          ? 'opacity-50 scale-95 border-gray-200' 
          : isCardSelected
            ? 'border-emerald-400 from-emerald-50 to-emerald-100 shadow-emerald-100'
            : 'border-transparent hover:border-purple-400 hover:from-purple-50 hover:to-purple-100 hover:shadow-purple-100'
        }
        transform hover:scale-102 hover:-translate-y-1
        active:scale-95 md:hover:scale-105
      `}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative space-y-3 sm:space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
          {text}
        </h3>
        <p className="text-base sm:text-lg italic text-purple-700 font-medium">
          {translation}
        </p>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
        <span className="text-xs sm:text-sm font-medium text-gray-500 group-hover:text-purple-600 transition-colors">
          Cliquez pour choisir cette expression
        </span>
      </div>
    </button>
  );
}