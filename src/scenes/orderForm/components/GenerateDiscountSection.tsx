import React, { useState } from 'react';
import { Button } from 'src/components/common/Button';
import { mockDiscountCodeGenerate } from 'src/utils/mocks/mockDiscountCodeGenerate';

function OrderSceneGenerateDiscount() {
  const [isLoading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  // usually this would be server request so I mock async operation here
  const handleGenerate = async () => {
    try {
      setLoading(true);
      const newCode = await mockDiscountCodeGenerate();
      setGeneratedCode(newCode);
    } catch (e) {
      // todo: inform user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h5 className="text-2xl font-bold dark:text-white mb-2">Want to get another promo code?</h5>
      <div className="flex gap-4 items-center">
        <Button
          onClick={handleGenerate}
          isLoading={isLoading}
          label={isLoading ? 'Generating ...' : 'Get new code!'}
        />
        {generatedCode && (
          <p>
            You generated code <span className="underline font-bold">{generatedCode}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export { OrderSceneGenerateDiscount };
