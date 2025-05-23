'use client';

import { formSet } from '@/app/store/formsSlice';
import { useAppSelector } from '@/lib/hooks/reduxHooks';
import { useDispatch } from 'react-redux';
import { ChooseButton } from '../SubmitButton';
import FormCheckoutWorld from './FormChekoutWorld';
import FormCheckoutUkraine from './FormCheckoutUkraine';

export default function DeliveryCountry() {
  const dispatch = useDispatch();
  const check = useAppSelector((state) => state.formSet.checked);

  return (
    <div className="flex w-full flex-col gap-5">
      <h4 className="text-2xl font-bold">Відправка</h4>
      <span className="mt-2 font-bold">Виберіть Країну Доставки</span>

      <div className="mt-5 flex w-[350px] flex-row gap-5">
        <ChooseButton
          onClick={() => dispatch(formSet())}
          variant={check ? 'default' : 'ghost'}
          text="ukraine"
        />
        <ChooseButton
          onClick={() => dispatch(formSet())}
          variant={check ? 'ghost' : 'default'}
          text="all world"
        />
      </div>
      {check ? <FormCheckoutUkraine /> : <FormCheckoutWorld />}
    </div>
  );
}
