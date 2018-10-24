# todo
## react-native run-iosを実行して、Print: Entry, ":CFBundleIdentifier", Does Not Existが出た時は、
- https://qiita.com/iwamatsu0430/items/ba3c5d14e4b525c80e23
- https://qiita.com/gki/items/ad5bb0af398bfea438ff
を参照のこと.
## react-native run-androidを実行して、こんなエラーが出たなら、
```
FAILURE: Build failed with an exception.

* What went wrong:
Could not resolve all files for configuration ':app:debugCompileClasspath'.
> Could not find support-vector-drawable.aar (com.android.support:support-vector-drawable:27.1.1).
  Searched in the following locations:
      https://jcenter.bintray.com/com/android/support/support-vector-drawable/27.1.1/support-vector-drawable-27.1.1.aar
> Could not find livedata-core.aar (android.arch.lifecycle:livedata-core:1.1.0).
  Searched in the following locations:
      https://jcenter.bintray.com/android/arch/lifecycle/livedata-core/1.1.0/livedata-core-1.1.0.aar
> Could not find viewmodel.aar (android.arch.lifecycle:viewmodel:1.1.0).
  Searched in the following locations:
      https://jcenter.bintray.com/android/arch/lifecycle/viewmodel/1.1.0/viewmodel-1.1.0.aar
> Could not find runtime.aar (android.arch.core:runtime:1.1.0).
  Searched in the following locations:
      https://jcenter.bintray.com/android/arch/core/runtime/1.1.0/runtime-1.1.0.aar

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 13s
1 actionable task: 1 executed
Could not install the app on the device, read the error above for details.
Make sure you have an Android emulator running or a device connected and have
set up your Android development environment:
https://facebook.github.io/react-native/docs/getting-started.html
```
- https://github.com/facebook/react-native/issues/21916#issuecomment-432532745
を参照のこと.
