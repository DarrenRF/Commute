import { useState, useEffect} from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (focusedOrSearching, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {

    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    }

    if (focusedOrSearching) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [focusedOrSearching, callback]);

  return [err];
}
