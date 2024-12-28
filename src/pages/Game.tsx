import React, { useState, useEffect, useCallback } from 'react';
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
  type: 'french' | 'canadian';
}

export default function Game() {
  const navigate = useNavigate();
  const [round, setRound] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [currentPair, setCurrentPair] = useState<Expression[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [usedExpressions] = useState<Set<string>>(new Set());

  const pickNewPair = useCallback(() => {
    const getRandomExpression = (expressions: Expression[], type: 'french' | 'canadian'): Expression => {
      const availableExpressions = expressions.filter(e => !usedExpressions.has(e.id));
      if (availableExpressions.length === 0) {
        usedExpressions.clear();
        return expressions[Math.floor(Math.random() * expressions.length)];
      }
      return availableExpressions[Math.floor(Math.random() * availableExpressions.length)];
    };

    const randomFrench = getRandomExpression(frenchExpressions, 'french');
    const randomCanadian = getRandomExpression(canadianExpressions, 'canadian');
    
    usedExpressions.add(randomFrench.id);
    usedExpressions.add(randomCanadian.id);
    
    return [randomFrench, randomCanadian];
  }, [usedExpressions]);

  useEffect(() => {
    if (round === TOTAL_ROUNDS) {
      navigate('/results', { state: { choices } });
      return;
    }
    
    if (currentPair.length === 0) {
      setCurrentPair(pickNewPair());
    }
  }, [round, navigate, choices, pickNewPair, currentPair.length]);

  const handleChoice = (type: 'french' | 'canadian') => {
    setSelectedCard(type);
    setTimeout(() => {
      setChoices(prev => [...prev, type]);
      setRound(prev => prev + 1);
      setSelectedCard(null);
      setCurrentPair(pickNewPair());
    }, 500);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              La Bataille des Expressions !
            </h1>
            <p className="text-lg text-gray-600">
              Choisissez votre camp : Parisien raffiné ou Québécois pure souche ?
            </p>
          </div>

          <GameProgress currentRound={round} totalRounds={TOTAL_ROUNDS} />
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {currentPair.map((expression) => (
              <ExpressionCard
                key={expression.id}
                text={expression.text}
                translation={expression.translation}
                description={expression.description}
                type={expression.type}
                onClick={() => handleChoice(expression.type)}
                isSelected={selectedCard && selectedCard !== expression.type}
              />
            ))}
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="text-lg font-medium">Round {round + 1} sur {TOTAL_ROUNDS}</p>
          </div>
        </div>
      </div>
    </>
  );
}