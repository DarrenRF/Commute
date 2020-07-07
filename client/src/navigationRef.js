import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
<<<<<<< HEAD
      params,
=======
      params
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    })
  );
};
