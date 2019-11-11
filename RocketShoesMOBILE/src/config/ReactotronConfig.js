import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
    const tron = Reactotron.configure()
        .useReactNative()
        .use(reactotronSaga())
        .use(reactotronRedux())
        .connect();

    console.tron = tron;

    tron.clear();
}
