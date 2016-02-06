package io.vigour.plugin.open;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.open.CallbackManager;
import com.open.OpenCallback;
import com.open.OpenException;
import com.fasterxml.jackson.jr.ob.JSON;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;

import io.vigour.nativewrapper.plugin.core.ActivityResultListener;
import io.vigour.nativewrapper.plugin.core.Plugin;
import rx.Observable;
import rx.Subscriber;

public class OpenPlugin extends Plugin implements ActivityResultListener {
    private static final String NAME = "open";
    private static final String TAG = NAME;
    Activity activity;
    private LoginManager loginManager;
    public CallbackManager callbackManager;
    OpenStatus status = new OpenStatus(); // wtf

    public OpenPlugin(Activity context) {
        super(NAME);
        activity = context;
    }

    public String init(Object key) {
        Log.d(TAG, "init called, args: " + key);

    // public Observable<String> login(Object scope) {
    //     Log.d(TAG, "login called, args: " + scope);
    //
    //     return Observable.create(new Observable.OnSubscribe<String>() {
    //         @Override public void call(final Subscriber<? super String> subscriber) {
    //             Log.d(TAG, "login inside observable call");
    //             FacebookCallback<LoginResult> callback = new FacebookCallback<LoginResult>() {
    //                 @Override
    //                 public void onSuccess(LoginResult loginResult) {
    //                     Log.d(TAG, "login inside success");
    //                     AccessToken token = loginResult.getAccessToken();
    //                     status = new FacebookStatus(token);
    //                     subscriber.onNext(getString(status));
    //                     subscriber.onCompleted();
    //                 }
    //
    //                 @Override
    //                 public void onCancel() {
    //                     Log.d(TAG, "login inside cancel");
    //                     subscriber.onError(new Throwable("user cancelled"));
    //                     subscriber.onCompleted();
    //                 }
    //
    //                 @Override
    //                 public void onError(FacebookException exception) {
    //                     Log.d(TAG, "login inside error");
    //                     subscriber.onError(exception);
    //                     subscriber.onCompleted();
    //                 }
    //             };
    //             LoginManager.getInstance().registerCallback(callbackManager,
    //                                                         callback);
    //             loginManager.logInWithPublishPermissions(activity, Arrays.asList("publish_actions"));
    //         }
    //     });
    // }
    //
    // public String logout() {
    //     loginManager.logOut();
    //     return "";
    // }

    public String open(Map<String, Object> args) {
        Log.d(TAG, "url called, args: " + args);
        String url = args.get("url").toString();

        return getString('wtf', url);
    }

    @Override public void onActivityResult(int requestCode, int resultCode, Object data) {
        Log.i(TAG, "onactivityresult");
        callbackManager.onActivityResult(requestCode, resultCode, (Intent) data);
    }
}
