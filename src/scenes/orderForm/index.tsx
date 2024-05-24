import React from 'react';
import { OrderScenePetSelection } from './components/PetSelectionSection';
import { OrderSceneDiscountSection } from './components/DiscountSection';
import { OrderSceneGenerateDiscount } from './components/GenerateDiscountSection';
import { OrderSceneUserNoteSection } from './components/UserNoteSection';
import { Divider } from 'src/components/common/Divider';

function OrderFormScene() {
  return (
    <main className="p-3">
      {/* we use redux to avoid prop drilling
      thus it is easier to split components */}
      <form className="max-w-md flex flex-col gap-2 mx-auto">
        <OrderScenePetSelection />
        <Divider />
        {/*  */}
        <OrderSceneDiscountSection />
        <Divider />
        {/*  */}
        <OrderSceneGenerateDiscount />
        <Divider />
        {/*  */}
        <OrderSceneUserNoteSection />
      </form>
    </main>
  );
}

export default OrderFormScene;
