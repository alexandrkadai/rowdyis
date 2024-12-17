'use client';
import { formSet } from '@/app/store/formsSlice';
import { useAppSelector } from '@/lib/hooks/reduxHooks';
import { useDispatch } from 'react-redux';
import { ChooseButton } from '../SubmitButton';

export default function DeliveryCountry() {
  const dispatch = useDispatch();
  const check = useAppSelector((state) => state.formSet.checked);

  return (
    <div className="mt-10 flex flex-col  w-[350px justify-start items-center gap-5">
      <h3>Select a country</h3>
        <div className="mt-5 flex flex-row gap-5">
        <ChooseButton onClick={() => dispatch(formSet())} variant={check ? 'default' : 'ghost'} text="ukraine"/>
        <ChooseButton onClick={() => dispatch(formSet())} variant={check ? 'ghost' : 'default'} text="all world"/>
        </div>
    {check ? <span onClick={() => dispatch(formSet())} >Check</span> : <span onClick={() => dispatch(formSet())} >No Check</span>}

    
    </div>
  );
}
