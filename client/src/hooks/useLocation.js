<<<<<<< HEAD
import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
=======
import { useState, useEffect} from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

export default (focusedOrSearching, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
=======

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
<<<<<<< HEAD
            distanceInterval: 10,
=======
            distanceInterval: 10
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
<<<<<<< HEAD
    };
=======
    }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

    if (focusedOrSearching) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
<<<<<<< HEAD
      subscriber = null;
=======
      subscriber = null
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [focusedOrSearching, callback]);

  return [err];
<<<<<<< HEAD
};
=======
}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
