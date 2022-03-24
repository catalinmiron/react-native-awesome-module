import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-awesome-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type AwesomeModuleProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'AwesomeModuleView';

export const AwesomeModuleView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<AwesomeModuleProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
