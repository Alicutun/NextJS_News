import React from 'react';
import { useRouter } from 'next/router';

export const useChangeParam = () => {
  const router = useRouter();
  return {
    changeParam: (key: string, value: string | number) =>
      router.push({ query: { ...router.query, [key]: value } }, undefined, { scroll: false }),
  };
};
