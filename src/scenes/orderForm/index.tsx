import React from 'react';
import { OrderScenePetSelection } from './components/PetSelectionSection';

function OrderFormScene() {
  return (
    <main className="p-3">
      {/* we use redux to avoid prop drilling
      thus it is easier to split components */}
      <OrderScenePetSelection />
    </main>
  );
}

export default OrderFormScene;
