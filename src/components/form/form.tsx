"use client";

import { formProps } from '@/types'
import { useRef } from 'react'

const form = ({ childrean, action, className, onSubmit }:formProps ) => {
    const ref = useRef<HTMLFormElement> (null);
  return ( 
  <form action={async (formData) => {
    await action(formData);
    ref.current?.reset()
  }} 
  onSubmit={onSubmit} ref={ref} >
    {childrean}
  </form>
  );
};

export default form;