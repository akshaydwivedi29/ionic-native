import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Is Debug
 * @description
 * Detect if the app is running in debug mode or not.
 * Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user.
 *
 * @usage
 * ```typescript
 * import { IsDebug } from '@ionic-native/is-debug';
 *
 * constructor(private isDebug: IsDebug) { }
 *
 * ...
 *
 * this.isDebug.getIsDebug()
 *   .then((isDebug: boolean) => console.log('Is debug:', isDebug))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'IsDebug',
  plugin: 'cordova-plugin-is-debug',
  pluginRef: 'cordova.plugins.IsDebug',
  repo: 'https://github.com/mattlewis92/cordova-plugin-is-debug',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class IsDebug extends IonicNativePlugin {

  /**
   * Determine if an app was installed via xcode / eclipse / the ionic CLI etc
   * @returns {Promise<boolean>} Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
   */
  @Cordova()
  getIsDebug(): Promise<boolean> {
    return;
  }

}
