import { useRouter } from 'next/router';
import en from '../../public/locales/en.json';
import ko from '../../public/locales/ko.json';

export const useChangeParam = () => {
  const router = useRouter();
  return {
    changeParam: (key: string, value: string | number) =>
      router.push({ query: { ...router.query, [key]: value } }, undefined, { scroll: false }),
  };
};

export const useTrans = () => {
  const router = useRouter();
  const { locale } = router.query;

  let trans = en;

  switch (locale) {
    case 'en_US':
      trans = en;
      break;
    case 'ko_KR':
      trans = ko;
      break;
  }
  return trans;
};
