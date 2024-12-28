import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpressionCard from '../components/ExpressionCard';
import GameProgress from '../components/GameProgress';
import Header from '../components/Header';
import { frenchExpressions } from '../data/frenchExpressions';
import { canadianExpressions } from '../data/canadianExpressions';

const TOTAL_ROUNDS = 10;

interface Expression {
  id: string;
  text: string;
  translation: string;
  description: string;
  type: string;
}

export default function Game() {
  const navigate = useNavigate();
  const [round, setRound] = useState(0);
  const [choices, setChoices] = useState<Expression[]>([]);
  const [currentExpressions, setCurrentExpressions] = useState<Expression[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [usedExpressions] = useState<Set<string>>(new Set());

  const pickNewExpressions = useCallback(() => {
    const getRandomExpressions = (expressions: Expression[], count: number): Expression[] => {
      const availableExpressions = expressions.filter(e => !usedExpressions.has(e.id));
      const result: Expression[] = [];
      
      for (let i = 0; i < count; i++) {
        if (availableExpressions.length === 0) {
          usedExpressions.clear();
          const randomExp = expressions[Math.floor(Math.random() * expressions.length)];
          result.push(randomExp);
          usedExpressions.add(randomExp.id);
        } else {
          const index = Math.floor(Math.random() * availableExpressions.length);
          const expression = availableExpressions[index];
          result.push(expression);
          usedExpressions.add(expression.id);
          availableExpressions.splice(index, 1);
        }
      }
      
      return result;
    };

    const frenchChoices = getRandomExpressions(frenchExpressions, 2);
    const canadianChoices = getRandomExpressions(canadianExpressions, 2);
    
    return [...frenchChoices, ...canadianChoices]
      .sort(() => Math.random() - 0.5);
  }, [usedExpressions]);

  useEffect(() => {
    if (round === TOTAL_ROUNDS) {
      navigate('/results', { state: { choices } });
      return;
    }
    
    if (currentExpressions.length === 0) {
      setCurrentExpressions(pickNewExpressions());
    }
  }, [round, navigate, choices, pickNewExpressions, currentExpressions.length]);

  const handleChoice = (expression: Expression) => {
    setSelectedId(expression.id);
    setTimeout(() => {
      setChoices(prev => [...prev, expression]);
      setRound(prev => prev + 1);
      setSelectedId(null);
      setCurrentExpressions(pickNewExpressions());
    }, 500);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
        <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3 sm:mb-4">
              La Bataille des Expressions
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Choisissez votre expression favorite parmi les quatre affichées !
            </p>
          </div>

          <GameProgress currentRound={round} totalRounds={TOTAL_ROUNDS} />
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {currentExpressions.map((expression) => (
              <ExpressionCard
                key={expression.id}
                id={expression.id}
                text={expression.text}
                translation={expression.translation}
                description={expression.description}
                onClick={() => handleChoice(expression)}
                selectedId={selectedId}
              />
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-lg sm:text-xl font-medium bg-white/50 inline-block px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              Round {round + 1} sur {TOTAL_ROUNDS}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}