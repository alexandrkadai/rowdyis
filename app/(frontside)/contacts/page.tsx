'use client';
import { contactFormAction } from '@/app/actions';
import { AlertManager } from '@/app/components/frontside/AlertManage';
import SubmitButton from '@/app/components/SubmitButton';
import { useAlertManager } from '@/app/hooks/useAlert';
import { contactFormSchema } from '@/app/lib/zodSchemas';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';
import { useEffect } from 'react';

type Enum = 'error' | 'success' | undefined;
interface iLastResult{
  status: Enum;
  message: string;
}

export default function ContactsPage() {
  const { alerts, addAlert } = useAlertManager();
  
  const [lastResult, action] = useActionState(contactFormAction, undefined);

  useEffect(() => {
    if (lastResult?.status === 'success') {
      addAlert('Message sent successfully!', 'success');
    }
    if (lastResult?.status === 'error') {
      addAlert('Message not sent!', 'error');
    }
  }, [lastResult]);

  const [form, fields] = useForm({
    lastResult: lastResult as iLastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactFormSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <div className="mt-14 w-full justify-center text-center lg:mt-10">
      <h2 className="text-2xl font-bold">Будемо на звʼязку</h2>
      <div className="mx-auto mt-5 flex w-[350px] flex-col items-center justify-center lg:mx-auto lg:mt-10">
        <form
          action={action}
          id={form.id}
          onSubmit={form.onSubmit}
        >
          <div className="mt-2 text-left">
            <label htmlFor="nameUser" className="font-bold uppercase">
              Імʼя
            </label>
            <input
              className="w-[350px] border-2 border-black p-1"
              id="nameUser"
              name={fields.name.name}
              key={fields.name.key}
              defaultValue={fields.name.initialValue}
              type="text"
              required
              placeholder="Введіть ваше імʼя"
            />
            <p className="text-red-500">{fields.name.errors}</p>
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="phone" className="font-bold uppercase">
              Телефон
            </label>
            <input
              id="phone"
              type="phone"
              name={fields.phone.name}
              key={fields.phone.key}
              defaultValue={fields.phone.initialValue}
              required
              placeholder="Введіть ваш номер телефону"
              className="w-[350px] border-2 border-black p-1"
            />
            <p className="text-red-500">{fields.phone.errors}</p>
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="email" className="font-bold uppercase">
              Email
            </label>
            <input
              id="email"
              type="email"
              name={fields.email.name}
              key={fields.email.key}
              defaultValue={fields.email.initialValue}
              required
              placeholder="Введіть ваш Email"
              className="w-[350px] border-2 border-black p-1"
            />
            <p className="text-red-500">{fields.email.errors}</p>
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="messageText" className="font-bold uppercase">
              Ваше повідомлення
            </label>
            <textarea
              id="messageText"
              name={fields.message.name}
              key={fields.message.key}
              defaultValue={fields.message.initialValue}
              required
              placeholder="Введіть ваше повідомлення"
              className="w-[350px] border-2 border-black p-1"
            />
            <p className="text-red-500">{fields.message.errors}</p>
          </div>
          <SubmitButton className="mt-5 w-full font-bold uppercase" variant="default" text="Відправити" />
        </form>
      </div>
      <AlertManager alerts={alerts} />
    </div>
  );
}